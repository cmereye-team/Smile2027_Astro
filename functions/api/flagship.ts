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

  // 1. 若環境已綁定 Cloudflare Flagship Workers Binding (FLAGS 或 FLAGSHIP)
  const binding = context.env.FLAGS || context.env.FLAGSHIP;
  if (binding) {
    try {
      if (typeof binding.getObjectValue === "function") {
        const val = await binding.getObjectValue(flagKey, null);
        if (val !== null && val !== undefined) {
          return new Response(JSON.stringify(val), { headers });
        }
      }
      if (typeof binding.get === "function") {
        const val = await binding.get(flagKey);
        if (val !== null && val !== undefined) {
          return new Response(JSON.stringify(val), { headers });
        }
      }
    } catch (err) {
      console.error("[Flagship Function] Binding evaluation error:", err);
    }
  }

  // 2. 若環境設置了 Cloudflare API Token 與 Account ID，調用 REST Evaluate API
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

  // 3. 預設兜底：安全返回 disabled 狀態 (不阻斷前端頁面)
  return new Response(
    JSON.stringify({
      enabled: false,
      flagKey,
      appId,
      notice: "Flagship binding or API token not detected in Pages environment. Popup remains dormant.",
    }),
    {
      status: 200,
      headers,
    }
  );
};
