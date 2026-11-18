/*
 * @Author: 谭洁莹
 * @Date: 2026-04-24 18:42:52
 * @LastEditTime: 2026-07-17 15:21:05
 * @FilePath: /src/i18n/utils.ts
 * @Description: 多语言公共函数
 */
import { ui, type Lang } from "./ui";

/**
 * 路由前缀与语言代码的映射表
 */
const langMap: Record<string, Lang> = {
  cn: "zh-cn",
  // "en": "en",
  "zh-hk": "zh-hk",
};

/**
 * 从 URL 中解析当前语言环境
 * @param {URL} url - 当前页面的 URL 对象 (Astro.url)
 * @param {string} [currentLocale] - Astro 6 原生提供的 currentLocale 变量
 * @returns {Lang} 返回匹配的语言代码，默认为 'zh-hk'
 */
export function getLangFromUrl(url: URL, currentLocale?: string): Lang {
  const lang = currentLocale || url.pathname.split("/")[1];
  return langMap[lang] || "zh-hk";
}

/**
 * 获取翻译工具函数 (t 函数)
 * @param {string} lang - 语言代码 (如 'zh-cn', 'en')
 * @returns {(key: string) => string} 返回一个根据键值获取翻译文字的函数
 */
export function useTranslations(lang: string) {
  const dictKey = langMap[lang] || lang;
  const dictionary = ui[dictKey as keyof typeof ui] || ui["zh-hk"];

  /**
   * @param {string} key - 字典中的键路径，支持点语法 (例如 'common.menu.about')
   */
  return function t(key: string): string {
    const value = key.split(".").reduce((o: any, i) => o?.[i], dictionary);
    return value || key; // 如果找不到，返回键名本身作为回退
  };
}

/**
 * 静态路由生成配置，用于 [...lang] 目录下的页面
 * 确保默认语言 (zh-hk) 路径为空，从而实现无前缀访问
 */
export const i18nPaths = [
  { params: { lang: undefined } }, // 对应 /
  { params: { lang: "cn" } }, // 对应 /cn
];

/**
 * 获取适配当前语言环境的本地化链接
 * @param {string} href - 目标路径 (可以是 '/about' 或已经带前缀的 '/cn/about')
 * @param {string} lang - 目标语言代码 (如 'zh-cn', 'en', 'zh-hk')
 * @returns {string} 带有正确语言前缀的格式化路径
 */
export function getLocalizedHref(href: string, lang: string): string {
  // 1. 外部链接、协议链接、纯锚点或纯查询参数直接返回
  if (/^(https?:|tel:|mailto:|javascript:|#|\?)/i.test(href)) {
    return href;
  }

  // 2. 分离路径主体与 ?query / #hash 后缀
  const suffixIndex = href.search(/[?#]/);
  const pathPart = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);

  // 3. 剥离路径中可能已存在的语言前缀 (/cn 或 /en)
  const basePath = pathPart.replace(/^\/(cn|en)(?=\/|$)/, "") || "/";

  // 4. 规范化路径，确保以单斜杠开头
  const cleanPath = basePath.startsWith("/") ? basePath : `/${basePath}`;

  // 5. 查找对应的路由前缀 (例如 zh-cn 对应 cn)
  const prefix = Object.keys(langMap).find((key) => langMap[key] === lang);

  // 6. 组合语言前缀并折叠重复斜杠
  let fullPath =
    !prefix || prefix === "zh-hk"
      ? cleanPath
      : `/${prefix}${cleanPath}`;
  fullPath = fullPath.replace(/\/+/g, "/");

  // 7. 对非静态资源后缀的内部页面路由统一补齐尾斜杠 (对齐 trailingSlash: "always")
  if (!fullPath.endsWith("/") && !/\.[a-z0-9]+$/i.test(fullPath)) {
    fullPath = `${fullPath}/`;
  }

  return `${fullPath}${suffix}`;
}
export function useI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const dict = ui[lang as keyof typeof ui] || ui["zh-hk"];
  return { lang, t, dict };
}
