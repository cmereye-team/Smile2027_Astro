/*
 * @Author: Antigravity AI
 * @Date: 2026-11-23
 * @FilePath: /functions/api/flagship.ts
 * @Description: Cloudflare Pages Function 邊緣端 Flagship 特徵開關評估端點
 */

interface Env {
  FLAGS?: {
    getObjectValue?: (key: string, defaultValue: any, context?: any) => Promise<any>;
    getBooleanValue?: (key: string, defaultValue: boolean, context?: any) => Promise<boolean>;
    get?: (key: string) => Promise<any>;
  };
  FLAGSHIP?: any;
  PROMO_KV?: {
    get: (key: string, type?: string) => Promise<any>;
  };
  KV?: {
    get: (key: string, type?: string) => Promise<any>;
  };
  CF_ACCOUNT_ID?: string;
  CF_API_TOKEN?: string;
}

export const onRequestGet = async (context: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  const url = new URL(context.request.url);
  const flagKey = url.searchParams.get("flag") || "smilepromo_popup_active";
  const appId = url.searchParams.get("appId") || "d93e0fb8-9a1a-4f54-93e6-f365578eb3a7";

  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate",
    "Access-Control-Allow-Origin": "*",
  };

  // 1. 若環境綁定了 Cloudflare KV (如 PROMO_KV 或 KV)，優先讀取 KV 內儲存的配置 (Pages 最原生、最穩定的後台視覺化開關)
  const kv = context.env.PROMO_KV || context.env.KV;
  if (kv && typeof kv.get === "function") {
    try {
      const kvVal = await kv.get(flagKey, "json");
      if (kvVal !== null && kvVal !== undefined) {
        return new Response(JSON.stringify(kvVal), { headers });
      }
    } catch (err) {
      console.error("[Flagship Function] KV evaluation error:", err);
    }
  }

  // 2. 若環境已綁定 Cloudflare Flagship Workers Binding (支援 FLAGS, FLAGSHIP 或以開關名作為綁定名的情況)
  const binding =
    context.env.FLAGS ||
    context.env.FLAGSHIP ||
    (context.env as Record<string, any>)["smilepromo_popup_active"];

  if (binding) {
    try {
      if (typeof binding.getObjectValue === "function") {
        const val = await binding.getObjectValue(flagKey, null);
        if (val !== null && val !== undefined) {
          return new Response(JSON.stringify(val), { headers });
        }
        // 綁定成功存在，但開關處於 disabled 或返回預設 fallback (null)
        return new Response(
          JSON.stringify({
            enabled: false,
            status: "flag_disabled",
            message: "Cloudflare Flagship binding active, but flag is currently disabled.",
          }),
          { headers }
        );
      }
      if (typeof binding.get === "function") {
        const val = await binding.get(flagKey);
        if (val !== null && val !== undefined) {
          return new Response(JSON.stringify(val), { headers });
        }
        return new Response(
          JSON.stringify({
            enabled: false,
            status: "flag_disabled",
            message: "Cloudflare Flagship binding active, but flag is currently disabled.",
          }),
          { headers }
        );
      }
    } catch (err: any) {
      console.error("[Flagship Function] Binding evaluation error:", err);
      return new Response(
        JSON.stringify({
          enabled: false,
          error: err?.message || String(err),
        }),
        { headers }
      );
    }
  }

  // 3. 若環境設置了 Cloudflare API Token 與 Account ID，調用 REST Evaluate API
  const accountId = context.env.CF_ACCOUNT_ID;
  const apiToken = context.env.CF_API_TOKEN;
  if (accountId && apiToken) {
    try {
      const resp = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${accountId}/flagship/apps/${appId}/evaluate`,
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        const flags = (data as any).result?.flags || (data as any).result || {};
        const flagItem = flags[flagKey];
        if (flagItem) {
          const resultValue = flagItem.value !== undefined ? flagItem.value : flagItem;
          return new Response(JSON.stringify(resultValue), { headers });
        }
      }
    } catch (err) {
      console.error("[Flagship Function] REST evaluation error:", err);
    }
  }

  // 4. 預設兜底：安全返回 disabled 狀態 (不阻斷前端頁面)
  return new Response(
    JSON.stringify({
      enabled: false,
      flagKey,
      appId,
      notice: "No KV binding (PROMO_KV) or Flagship API token detected. Popup remains dormant.",
    }),
    {
      status: 200,
      headers,
    }
  );
};
