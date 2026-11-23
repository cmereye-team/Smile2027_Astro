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

  // 1. 讀取 Cloudflare KV 綁定 (PROMO_KV 或 KV)
  const kv = context.env.PROMO_KV || context.env.KV;
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
          message: `PROMO_KV connected, but key '${key}' does not exist or is empty.`,
        }),
        { headers }
      );
    } catch (err: unknown) {
      console.error("[Promo API] KV evaluation error:", err);
      const errMsg = err instanceof Error ? err.message : String(err);
      return new Response(
        JSON.stringify({
          enabled: false,
          error: errMsg,
        }),
        { headers }
      );
    }
  }

  // 2. 兜底回覆：未檢測到 PROMO_KV 綁定
  return new Response(
    JSON.stringify({
      enabled: false,
      status: "unbound",
      message:
        "PROMO_KV binding not detected in Cloudflare Pages. Please bind PROMO_KV under Pages > Settings > Functions > Bindings.",
    }),
    {
      status: 200,
      headers,
    }
  );
};
