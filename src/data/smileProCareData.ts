/*
 * @FilePath: /src/data/smileProCareData.ts
 * @Description: SMILE Pro Care 1.0/2.0 專頁真值數據字典 (100% 對齊舊站 pages/smileProCare/index.vue 與線上官網文案及 WhatsApp 追蹤埋點)
 */

export interface ComparisonRow {
  serviceHtml: string;
  standardHtml: string;
  careHtml: string;
}

export interface BenefitItem {
  nameHtml: string;
  times: string;
}

export interface SmileProCareData {
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  procedureSchema: {
    name: string;
    description: string;
  };
  banner: {
    title: string;
    subtitleHtml: string;
    ctaLine1: string;
    ctaLine2: string;
    ctaUrl: string;
    scrollHint: string;
  };
  intro: {
    titleParts: [string, string, string];
    p1Html: string;
    p2Html: string;
    p3Html: string;
  };
  comparison: {
    titleLine1: string;
    titleLine2: string;
    headers: {
      service: string;
      standardHtml: string;
      crownLabel: string;
      careHtml: string;
    };
    rows: ComparisonRow[];
    upgradeNoteHtml: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  choose: {
    title: string;
    descHtml: string;
    ctaText: string;
    ctaUrl: string;
  };
}

const SHARED_CONTENT: Omit<SmileProCareData, "breadcrumb"> = {
  procedureSchema: {
    name: "SMILE Pro Care 1.0/2.0 微笑激光矯視",
    description:
      "升級 SMILE® Pro Care 1.0 / 2.0，享受更完善的全面照護！為您提供1 次術後眼部彩光護理，及5次的術後覆診。",
  },
  banner: {
    title: "SMILE Pro Care 1.0/2.0",
    subtitleHtml:
      '希瑪專屬全方位矯視保障，為您<br class="block md:hidden" />帶來更極致、安心的體驗。',
    ctaLine1: "立即了解",
    ctaLine2: "SMILE Pro 2.0 Care",
    ctaUrl:
      "https://api.whatsapp.com/send/?phone=85297962992&text=%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3(WSPC-2025)%20%E5%B8%8C%E7%91%AASMILE%20Pro%20Care%E7%9F%AF%E8%A6%96%E7%A6%AE%E5%93%81%E8%A8%88%E5%8A%83",
    scrollHint: "了解計劃詳情",
  },
  intro: {
    titleParts: ["SMILE Pro Care", "1.0 / 2.0", "微笑激光矯視"],
    p1Html:
      '升級 SMILE® Pro Care 1.0 / 2.0，<br class="block lg:hidden" />享受更完善的全面照護！',
    p2Html:
      '為您提供<strong class="text-care lg:text-xl font-bold">1 次術後眼部彩光護理</strong>，<br class="block lg:hidden" />及<strong class="text-care lg:text-xl font-bold">5次的術後覆診</strong>。',
    p3Html:
      '讓每一個細節都被照顧，<br class="block lg:hidden" />矯視體驗自然更安心！',
  },
  comparison: {
    titleLine1: "SMILE Pro Care 1.0/2.0與",
    titleLine2: "SMILE Pro 1.0/2.0有什麼分別？",
    headers: {
      service: "服務項目",
      standardHtml: "SMILE Pro 1.0/2.0<br />微笑激光矯視",
      crownLabel: "熱門首選",
      careHtml: "SMILE Pro Care 1.0/2.0<br />微笑激光矯視",
    },
    rows: [
      {
        serviceHtml: '術後覆診<br class="block lg:hidden" />（一年內）',
        standardHtml: "3 次",
        careHtml: "5 次",
      },
      {
        serviceHtml: '眼睛<br class="block lg:hidden" />水潤護理',
        standardHtml: "1 次",
        careHtml: "1 次",
      },
      {
        serviceHtml: "術後眼部<br />彩光護理",
        standardHtml: "/",
        careHtml: "1 次 (價值HK$4000✨)",
      },
      {
        serviceHtml: "眼科專科<br />醫生檢查",
        standardHtml: "包含",
        careHtml: "包含",
      },
      {
        serviceHtml: "增進手術",
        standardHtml: "包含",
        careHtml: "包含",
      },
      {
        serviceHtml: '無限<br class="block lg:hidden" />視光檢查',
        standardHtml: "包含",
        careHtml: "包含",
      },
      {
        serviceHtml: "價錢",
        standardHtml: '<small class="text-[11px]">$</small>24,600',
        careHtml: '<small class="text-[11px]">$</small>26,350',
      },
    ],
    upgradeNoteHtml:
      '現時只需加\n<strong class="font-black text-[13px] lg:text-2xl">HK$1,750</strong>\n，<br class="block lg:hidden" />即可由\n<strong class="text-sm lg:text-[26px]">SMILE® Pro 升級至 SMILE® Pro Care！</strong>',
  },
  benefits: {
    title: "SMILE Pro Care 1.0/2.0 專享福利",
    subtitle: "選擇升級護理服務，即享兩重額外福利，為您的矯視體驗加分！",
    items: [
      {
        nameHtml: "術後眼部<br />彩光護理",
        times: "1",
      },
      {
        nameHtml: "術後覆診",
        times: "5",
      },
    ],
  },
  choose: {
    title: "如何選擇？",
    descHtml:
      'SMILE Pro Care微笑激光矯視最適合<strong class="font-bold">重視矯視體驗</strong>，又希望一個價錢有更長遠的保障，讓眼睛享受更多的你。',
    ctaText: "立即預約SMILE Pro Care",
    ctaUrl:
      "https://api.whatsapp.com/send/?phone=85297962992&text=我想預約(WSPC-01) 希瑪SMILE Pro Care矯視",
  },
};

export const SMILE_PRO_CARE_ZH_HK: SmileProCareData = {
  breadcrumb: {
    home: "主頁",
    service: "矯視服務",
    current: "SMILE Pro Care 1.0/2.0",
  },
  ...SHARED_CONTENT,
};

export const SMILE_PRO_CARE_ZH_CN: SmileProCareData = {
  breadcrumb: {
    home: "主页",
    service: "矫视服务",
    current: "SMILE Pro Care 1.0/2.0",
  },
  ...SHARED_CONTENT,
};
