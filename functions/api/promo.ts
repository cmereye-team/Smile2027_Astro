/*
 * @Author: Antigravity AI
 * @Date: 2026-11-23
 * @FilePath: /functions/api/promo.ts
 * @Description: Cloudflare Pages Function 邊緣端促銷彈窗配置讀取端點 (基於 Cloudflare KV 原生儲存)
 */

interface Env {
  PROMO_KV?: {
    get: (key: string, type?: string) => Promise<any>;
  };
  KV?: {
    get: (key: string, type?: string) => Promise<any>;
  };
}

export const onRequestGet = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const url = new URL(context.request.url);
  const key = url.searchParams.get("key") || "smilepromo_popup_active";

  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Access-Control-Allow-Origin": "*",
  };

  // 1. 動態識別 Cloudflare KV 綁定 (優先 PROMO_KV / KV，或自動偵測任何具備 .get 方法的 KV 實例)
  let kv: any = context.env.PROMO_KV || context.env.KV;
  let boundName = context.env.PROMO_KV ? "PROMO_KV" : context.env.KV ? "KV" : "";

  if (!kv || typeof kv.get !== "function") {
    for (const [k, v] of Object.entries(context.env)) {
      if (v && typeof (v as any).get === "function") {
        kv = v;
        boundName = k;
        break;
      }
    }
  }

  if (kv && typeof kv.get === "function") {
    try {
      const data = await kv.get(key, "json");
      if (data !== null && data !== undefined) {
        return new Response(JSON.stringify(data), { headers });
      }
      return new Response(
        JSON.stringify({
          enabled: false,
          status: "key_not_found",
          binding_name: boundName,
          message: `KV binding '${boundName}' connected successfully, but key '${key}' was not found or is empty. Please add entry '${key}' in Cloudflare KV dashboard.`,
        }),
        { headers }
      );
    } catch (err: unknown) {
      console.error("[Promo API] KV evaluation error:", err);
      const errMsg = err instanceof Error ? err.message : String(err);
      return new Response(
        JSON.stringify({
          enabled: false,
          status: "kv_error",
          binding_name: boundName,
          error: errMsg,
        }),
        { headers }
      );
    }
  }

  // 2. 兜底回覆：若環境中尚未注入任何 KV 綁定
  const availableKeys = Object.keys(context.env || {});
  return new Response(
    JSON.stringify({
      enabled: false,
      status: "unbound",
      detected_env_keys: availableKeys,
      message:
        "PROMO_KV binding not detected in current deployment container.",
      action_required: [
        "1. Cloudflare Pages 綁定僅在【新部署】時生效。請在 Pages 後台 Deployments 點擊 Retry deployment 或等待 Git 推送觸發新構建。",
        "2. 檢查 Pages > Settings > Functions > Bindings 是否同時勾選或添加到了【Preview】預覽環境（dev 分支屬於 Preview）。",
      ],
    }),
    {
      status: 200,
      headers,
    }
  );
};
