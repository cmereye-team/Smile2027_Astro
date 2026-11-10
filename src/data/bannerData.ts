/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/bannerData.ts
 * @Description: 全站焦點 Banner 與最新情報輪播數據模組 (共享 CMS 官方接口 + 離線靜態回退)
 */
import { getLocalizedHref } from "@/i18n/utils";

const NEW_CMS_URL = "https://cms.cmermedical.com.hk";

const gidMap: Record<string, string> = {
  "zh-hk": "1",
  "zh-cn": "2",
  en: "3",
};

export interface RawSlideItem {
  id: number | string;
  pic?: string;
  pic_mobile?: string;
  mobilepic?: string;
  link?: string;
  title?: string;
  subtitle?: string;
}

export interface BannerItem {
  id: string;
  pcImg: string;
  mbImg: string;
  link: string;
  title: string;
  subtitle: string;
  isExternal: boolean;
}

function sanitizeUrl(rawUrl?: string): string {
  if (!rawUrl) return "";
  return rawUrl.replace(/&amp;/g, "&").trim();
}

function checkIsExternal(url: string): boolean {
  if (!url || url.startsWith("#")) return false;
  return (
    /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ||
    url.startsWith("//") ||
    url.startsWith("tel:") ||
    url.startsWith("mailto:") ||
    url.startsWith("whatsapp:")
  );
}

export const DEFAULT_FALLBACK_BANNERS: Record<string, BannerItem[]> = {
  "zh-hk": [
    {
      id: "banner-1",
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/08/31/9s12gfge_lQDPIuFj--eZ3_vNAtDNB4CwyGa7sxxGxiMKY2i9X8PoAA_192.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/09/04/htz2tnr2_lQDPIvIWm-BlvsfNBV_NBV-wyXVYMLkfUrIKa08qQ1ivAA_137.webp",
      link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-G01)%20%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5/%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7",
      title: "微笑激光矯視秋日最新價格",
      subtitle: "SMILE/SMILE PRO微笑激光矯視秋日最新價格",
      isExternal: true,
    },
    {
      id: "banner-2",
      pcImg: "https://admin.hkcmereye.com/static/upload/other/20260713/1783936990582077.webp",
      mbImg: "https://admin.hkcmereye.com/static/upload/other/20260713/1783936995639528.webp",
      link: "/smilePro",
      title: "SMILE PRO 2.0",
      subtitle: "SMILE PRO 2.0",
      isExternal: false,
    },
    {
      id: "banner-3",
      pcImg: "https://admin.hkcmereye.com/static/upload/other/20260520/1779262943233589.webp",
      mbImg: "https://admin.hkcmereye.com/static/upload/other/20260520/1779262954715708.webp",
      link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-G01)%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5/%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7",
      title: "ICL植入式隱形眼鏡",
      subtitle: "立即預約ICL術前評估",
      isExternal: true,
    },
  ],
  "zh-cn": [
    {
      id: "banner-1",
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/08/31/9s12gfge_lQDPIuFj--eZ3_vNAtDNB4CwyGa7sxxGxiMKY2i9X8PoAA_192.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/09/04/htz2tnr2_lQDPIvIWm-BlvsfNBV_NBV-wyXVYMLkfUrIKa08qQ1ivAA_137.webp",
      link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-G01)%20%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5/%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7",
      title: "微笑激光矫视秋日最新价格",
      subtitle: "SMILE/SMILE PRO微笑激光矫视秋日最新价格",
      isExternal: true,
    },
    {
      id: "banner-2",
      pcImg: "https://admin.hkcmereye.com/static/upload/other/20260713/1783936990582077.webp",
      mbImg: "https://admin.hkcmereye.com/static/upload/other/20260713/1783936995639528.webp",
      link: "/cn/smilePro",
      title: "SMILE PRO 2.0",
      subtitle: "SMILE PRO 2.0",
      isExternal: false,
    },
    {
      id: "banner-3",
      pcImg: "https://admin.hkcmereye.com/static/upload/other/20260520/1779262943233589.webp",
      mbImg: "https://admin.hkcmereye.com/static/upload/other/20260520/1779262954715708.webp",
      link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-G01)%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5/%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7",
      title: "ICL植入式隐形眼镜",
      subtitle: "立即预约ICL术前评估",
      isExternal: true,
    },
  ],
};

export const SMILE2024_STATIC_BANNERS: BannerItem[] = [
  {
    id: "static-1",
    pcImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-01.avif",
    mbImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-01.avif",
    link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7/%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5",
    title: "微笑激光矯視秋日最新價格",
    subtitle: "最新情報",
    isExternal: true,
  },
  {
    id: "static-2",
    pcImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-02.avif",
    mbImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-02.avif",
    link: "/smilePro",
    title: "SMILE PRO 2.0",
    subtitle: "最新情報",
    isExternal: false,
  },
  {
    id: "static-3",
    pcImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-03.avif",
    mbImg: "https://statichk.cmermedical.com/smile/smileV2/smile-swiper-03.avif",
    link: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%E7%9F%AF%E8%A6%96%E8%AC%9B%E5%BA%A7/%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5",
    title: "ICL植入式隱形眼鏡",
    subtitle: "最新情報",
    isExternal: true,
  },
];

export async function getBanners(lang: string = "zh-hk"): Promise<BannerItem[]> {
  const gid = gidMap[lang] || "1";
  try {
    const newApiUrl = `${NEW_CMS_URL}/api/v1/slides?gid=${gid}&pageSize=10`;
    const response = await fetch(newApiUrl, {
      headers: { "X-Site-Id": "smile" },
      signal: AbortSignal.timeout(4000),
    });
    if (response.ok) {
      const resData = await response.json();
      if (resData && resData.code === 0 && Array.isArray(resData.data) && resData.data.length > 0) {
        return resData.data.map((item: RawSlideItem, idx: number) => {
          const cleanLink = sanitizeUrl(item.link);
          const isExt = checkIsExternal(cleanLink);
          const pc = item.pic || "";
          const mb = item.pic_mobile || item.mobilepic || pc;
          const pcUrl = pc.startsWith("http") ? pc : `${NEW_CMS_URL}${pc}`;
          const mbUrl = mb.startsWith("http") ? mb : `${NEW_CMS_URL}${mb}`;
          const defaultTitle = `香港希瑪微笑矯視中心 - 矯視優惠服務 ${idx + 1}`;

          return {
            id: String(item.id || `banner-${idx}`),
            pcImg: pcUrl,
            mbImg: mbUrl,
            link: isExt ? cleanLink : getLocalizedHref(cleanLink || "#", lang),
            title: item.title || item.subtitle || defaultTitle,
            subtitle: item.subtitle || defaultTitle,
            isExternal: isExt,
          };
        });
      }
    }
  } catch (_e) {
    // 接口超時或離線時進入靜態回退
  }

  return DEFAULT_FALLBACK_BANNERS[lang] || DEFAULT_FALLBACK_BANNERS["zh-hk"] || SMILE2024_STATIC_BANNERS;
}
