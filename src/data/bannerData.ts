/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/bannerData.ts
 * @Description: 全站焦點 Banner 與最新情報輪播數據模組 (共享 CMS 官方接口 + 離線靜態回退)
 */
import { getLocalizedHref } from "@/i18n/utils";
import { buildWhatsAppUrl } from "@/utils/whatsapp";

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
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/gnjyyi02_iwEZAqNqcGcDAQTRBQAF0QHgBrDC7hFoTYc2XwrCvXZrxcoBB9.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/trqms04n_iwEZAqNqcGcDAQTRAUsF0QFLBrBoxJln_el2TgrCvXZrxcoAB9.webp",
      link: buildWhatsAppUrl("我想預約(W-G01) 術前檢查/矯視講座"),
      title: "微笑激光矯視冬日最新價格",
      subtitle: "SMILE/SMILE PRO微笑激光矯視冬日最新價格",
      isExternal: true,
    },
    {
      id: "banner-2",
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/18/08jmcjkr_lR3PIur7npSXHinNAtDNB4Cw0UEdpCVHoGAKzMe1tesvAA_192.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/18/6tocmu7m_lR3PItzFpAF9HinNA-jNA-iwcuVXGShR_lMKzMe1tesvAQ_100.webp",
      link: "/ophthalmicInfo/AppointForm",
      title: "希瑪老花LBV專場矯視講座",
      subtitle: "LBV專場：12月7日-12月19日",
      isExternal: false,
    },
  ],
  "zh-cn": [
    {
      id: "banner-1",
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/gnjyyi02_iwEZAqNqcGcDAQTRBQAF0QHgBrDC7hFoTYc2XwrCvXZrxcoBB9.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/trqms04n_iwEZAqNqcGcDAQTRAUsF0QFLBrBoxJln_el2TgrCvXZrxcoAB9.webp",
      link: buildWhatsAppUrl("我想預約(W-G01) 術前檢查/矯視講座"),
      title: "微笑激光矫视冬日最新价格",
      subtitle: "SMILE/SMILE PRO微笑激光矫视冬日最新价格",
      isExternal: true,
    },
    {
      id: "banner-2",
      pcImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/18/08jmcjkr_lR3PIur7npSXHinNAtDNB4Cw0UEdpCVHoGAKzMe1tesvAA_192.webp",
      mbImg: "https://static.cmermedical.com.hk/smile/uploads/2026/11/18/6tocmu7m_lR3PItzFpAF9HinNA-jNA-iwcuVXGShR_lMKzMe1tesvAQ_100.webp",
      link: "/cn/ophthalmicInfo/AppointForm",
      title: "希玛老花LBV专场矫视讲座",
      subtitle: "LBV专场：12月7日-12月19日",
      isExternal: false,
    },
  ],
};

export const SMILE2024_STATIC_BANNERS: BannerItem[] = [
  {
    id: "static-1",
    pcImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-01.avif",
    mbImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-01.avif",
    link: buildWhatsAppUrl("我想預約(W-05)矯視講座/術前檢查"),
    title: "微笑激光矯視冬日最新價格",
    subtitle: "最新情報",
    isExternal: true,
  },
  {
    id: "static-2",
    pcImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-02.avif",
    mbImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-02.avif",
    link: "/smilePro",
    title: "SMILE PRO 2.0",
    subtitle: "最新情報",
    isExternal: false,
  },
  {
    id: "static-3",
    pcImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-03.avif",
    mbImg: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-03.avif",
    link: buildWhatsAppUrl("我想預約(W-05)矯視講座/術前檢查"),
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
        const mapped: BannerItem[] = resData.data
          .map((item: RawSlideItem, idx: number) => {
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
          })
          .filter(
            (b: BannerItem) =>
              !b.pcImg.includes("admin.hkcmereye.com") &&
              !b.mbImg.includes("admin.hkcmereye.com")
          );
        if (mapped.length > 0) {
          return mapped;
        }
      }
    }
  } catch (_e) {
    // 接口超時或離線時進入靜態回退
  }

  return DEFAULT_FALLBACK_BANNERS[lang] || DEFAULT_FALLBACK_BANNERS["zh-hk"] || SMILE2024_STATIC_BANNERS;
}
