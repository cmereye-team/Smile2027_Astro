/*
 * @Author: Antigravity AI
 * @Date: 2026-11-09
 * @FilePath: /src/data/smileProData.ts
 * @Description: SMILE Pro 2.0 微笑激光矯視數據字典 (100% 官方真值對齊 + 繁簡雙語支援)
 */
import type { ShareItem } from "@/data/shareData";

export interface SmileProStep {
  image: string;
  text: string;
}

export interface SmileProFourFeatureItem {
  number: string;
  title: string;
  desc: string;
  sub: string;
}

export interface SmileProPriceCard {
  header: string;
  title1: string;
  title2: string;
  price: string;
  careTitle: string;
  carePrice: string;
  epsTitle: string;
  epsPrice: string;
  careLink?: string;
  careLinkText?: string;
  upgrades?: Array<{
    icon: string;
    text: string;
    badge: string;
  }>;
  preCheckTitle: string;
  preCheckPrice: string;
  feeLink: string;
  feeLinkText: string;
}

export interface SmileProDifferenceRow {
  title: string;
  iconType: string;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  colAll?: string;
}

export interface SmileProUserRating {
  name: string;
  occupation: string;
  review: string;
}

export interface SmileProData {
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  banner: {
    noticeImgPc: string;
    noticeImgMb: string;
    noticeMarqueeImg: string;
    heroImgPc: string;
    heroImgMb: string;
    heroAlt: string;
    heroTitle: string;
    tipTitle: string;
    tipItem1: string;
    tipItem2: string;
  };
  summary: {
    titlePrefix: string;
    titleStrong: string;
    fullUpgradedImg: string;
    p1: {
      text1: string;
      strong1: string;
      text2: string;
      strong2: string;
      text3: string;
      strong3: string;
      text4: string;
      strong4: string;
      text5: string;
      strong5: string;
      text6: string;
      strong6: string;
      text7: string;
    };
    p2: {
      text8: string;
      strong7: string;
      text9: string;
      strong8: string;
      text10: string;
    };
    introImgPc: string;
    introImgMb: string;
    videoUrl: string;
  };
  pro2Intro: {
    logoImg: string;
    certText: string;
    title: string;
    desc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
  };
  whyChoose: {
    title: string;
    img: string;
    imgMobile: string;
    alt: string;
    p1Text1: string;
    p1Span: string;
    p1Text2: string;
    p2Text1: string;
    p2Span1: string;
    p2Text2: string;
    p2Span2: string;
    p2Text3: string;
    p2Span3: string;
    p2Text4: string;
    btn: string;
    whatsappUrl: string;
  };
  fourFeature: {
    titlePrefix: string;
    title: string;
    smallTitle: string;
    items: SmileProFourFeatureItem[];
  };
  price: {
    title: string;
    card2: SmileProPriceCard;
    card1: SmileProPriceCard;
    notes: string[];
  };
  difference: {
    title: string;
    columns: string[];
    rows: SmileProDifferenceRow[];
    btn: string;
    whatsappUrl: string;
  };
  steps2: {
    title: string;
    list: SmileProStep[];
  };
  steps1: {
    title: string;
    list: SmileProStep[];
  };
  suitable: {
    title: string;
    imgPc: string;
    imgMb: string;
    items: string[];
  };
  userRating: {
    title: string;
    list: SmileProUserRating[];
    btn: string;
    whatsappUrl: string;
  };
}

export const SMILE_PRO_SHARE_DATA: ShareItem[] = [
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/YAGjW1TSCqg",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-028-v1.avif",
    "text": [
      "同隱形眼鏡正式分手～"
    ],
    "nameEn": "Cathy",
    "nameCn": "王嘉慧"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/NtULZl7qUEg",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-027-v1.avif",
    "text": [
      "真實用家共同見證",
      "「真實」自己"
    ],
    "nameEn": "",
    "nameCn": "群星"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/LvVdc3l7XpE",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-026-v1.avif",
    "text": [
      "清楚咗 唱Live都放鬆咗"
    ],
    "nameEn": "Aerent",
    "nameCn": "文凱婷"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/kPM1KMcAwss",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-025-v1.avif",
    "text": [
      "做SMILE Pro梗係搵",
      "希瑪!"
    ],
    "nameEn": "GM",
    "nameCn": "曾展望"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/Z-jpOoOpMEg",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-024-v1.avif",
    "text": [
      "穿搭由眼睛開始自由"
    ],
    "nameEn": "Gi",
    "nameCn": "樊沛珈"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/iNu-uMliXNA",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-023-v1.avif",
    "text": [
      "唔使再忍受除戴Con嘅",
      "痛苦"
    ],
    "nameEn": "Nicholas",
    "nameCn": "阮浩棕"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/tcvQgB4IXDk",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-022-v1.avif",
    "text": [
      "做咗SMILE Pro 2年",
      "都仲睇得咁清楚"
    ],
    "nameEn": "Maggie",
    "nameCn": "米姬"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/Z5ut-9tIhmo",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-021.avif",
    "text": [
      "唔洗矇查查周圍搵眼鏡"
    ],
    "nameEn": "Sarah",
    "nameCn": "李蒨怡"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/857FwJQu7OA",
    "img": "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-020.avif",
    "text": [
      "無咗眼鏡都一樣做到唔",
      "同活動"
    ],
    "nameEn": "Jay",
    "nameCn": "沈以諾"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/TBI6J31JwJQ",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem2.avif",
    "text": [
      "做咗就可以好似我依家",
      "咁方便㗎喇"
    ],
    "nameEn": "Carmen",
    "nameCn": "倪嘉雯"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/vxeN1wXeZ5M",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem3.avif",
    "text": [
      "好舒服之下就完成咗成",
      "個過程"
    ],
    "nameEn": "Maggie",
    "nameCn": "米姬"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/10KYv_gGgWM",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem5.avif",
    "text": [
      "無哂Con帶嚟嘅麻煩，",
      "促進咗眼神交流"
    ],
    "nameEn": " ",
    "nameCn": "Anson Au"
  },
  {
    "type": "SMILE Pro",
    "href": "https://www.youtube.com/watch?v=1p5Qm_772jI",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem7.avif",
    "text": [
      "做完SMILE Pro",
      "上舞台都唔會驚光"
    ],
    "nameEn": " ",
    "nameCn": "細貓"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/kVEJ-PN4AJo",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem8.avif",
    "text": [
      "我問自己點解唔早啲做",
      "SMILE Pro呢!"
    ],
    "nameEn": " ",
    "nameCn": "Cindy Wong"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/VoGlE1dJPhc",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem9.avif",
    "text": [
      "做完幾個月視力都維持",
      "到非常之清"
    ],
    "nameEn": "Pinky",
    "nameCn": ""
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/1Ic0z7wiVv8",
    "img": "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem10.avif",
    "text": [
      "唔洗花時間戴Con，可",
      "以直接出門練習，非常",
      "方便"
    ],
    "nameEn": "Tiffany",
    "nameCn": "鄧伊程"
  }
];

export const SMILE_PRO_ZH_HK: SmileProData = {
  breadcrumb: {
    home: "主頁",
    service: "矯視服務",
    current: "SMILE Pro 2.0 微笑激光矯視",
  },
  banner: {
    noticeImgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-03-pc-v1.webp",
    noticeImgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-03-mb-v1.webp",
    noticeMarqueeImg: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-03-v2.webp",
    heroImgPc: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/gnjyyi02_iwEZAqNqcGcDAQTRBQAF0QHgBrDC7hFoTYc2XwrCvXZrxcoBB9.webp",
    heroImgMb: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/trqms04n_iwEZAqNqcGcDAQTRAUsF0QFLBrBoxJln_el2TgrCvXZrxcoAB9.webp",
    heroAlt: "SMILE PRO 1.0/2.0 冬日最新價格",
    heroTitle: "秋日限定·睛采視界",
    tipTitle: "可矯正",
    tipItem1: "1,000度以下的近視",
    tipItem2: "500度以下的散光",
  },
  summary: {
    titlePrefix: "SMILE®Pro",
    titleStrong: "微笑激光矯視",
    fullUpgradedImg: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-full-upgraded-v2.svg",
    p1: {
      text1: "SMILE® Pro 微笑矯視為現時最新的",
      strong1: "微創",
      text2: "激光矯視技術。本中心採用德國",
      strong2: "ZEISS VISUMAX® 800",
      text3: "系統，",
      strong3: "無須打開角膜瓣",
      text4: "，僅透過約",
      strong4: "2-2.5mm",
      text5: "微創小切口取出角膜組織膜片，即可達到矯視效果。單眼激光時間僅需約 ",
      strong5: "10 秒",
      text6: "，能全方位覆蓋",
      strong6: "近視、散光及老花",
      text7: "需求，助您減輕對眼鏡的依賴。",
    },
    p2: {
      text8: "本中心推出 4 款專屬矯視方案： ",
      strong7: "SMILE® Pro 1.0/2.0",
      text9: " 與 ",
      strong8: "SMILE® Pro Care 1.0 / 2.0",
      text10: " 。全方位滿足不同需求，給您最安心的微創矯視體驗！ ",
    },
    introImgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-pc-v1.webp",
    introImgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-mb-v1.webp",
    videoUrl: "https://www.youtube.com/embed/IxvWmeOd18c",
  },
  pro2Intro: {
    logoImg: "https://statichk.cmermedical.com/smile/smileproV2/icon-smile-pro-2-v1.webp",
    certText: "蔡司ZEISS官方認證",
    title: "SMILE PRO 2.0 微笑激光矯視",
    desc: "為了給您更精準的視覺體驗，希瑪矯視作為蔡司官方夥伴，已全面升級引入 <strong class=\"font-bold text-primary\">SMILE® Pro 2.0</strong>！",
    feature1Title: "升級矯視數據平台",
    feature1Desc: "全新配置虹膜數據測量儀器，捕捉每雙眼睛獨一無二的虹膜紋路。透過新增的激光矯視數據平台，同步個人矯視參數至激光設備，簡化整體矯視流程，同時提升運作效率與數據精準度。",
    feature2Title: "虹膜辨識散光導航",
    feature2Desc: "激光設備的智能輔助系統同步升級，進⼀步強化散光矯正的精準度與穩定性。SMILE pro 2.0 可在術中實時識別虹膜狀態，與預存的專屬虹膜影像對比。倘若眼球產生細微轉動，系統亦能夠即時追蹤並自動校正散光軸向，減低對人工調校的依賴。",
  },
  whyChoose: {
    title: "為何選擇希瑪?",
    img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif",
    imgMobile: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif",
    alt: "希瑪眼科微笑矯視中心診所環境",
    p1Text1: "希瑪微笑矯視中心憑藉尖端科技與卓越的客戶體驗，成為大眾進行 SMILE® Pro 1.0/2.0 矯視的首選。作為",
    p1Span: "香港首間獲蔡司（ZEISS）頒發《全飛秒屈光手術 卓越手術中心》認證的矯視中心",
    p1Text2: "，我們始終秉持最高標準的醫療品質。",
    p2Text1: "中心引進已獲美國 FDA 認證的",
    p2Span1: "ZEISS VISUMAX® 800",
    p2Text2: "設備，結合德國蔡司光學與諾貝爾獎激光技術，為 SMILE® Pro 2.0 矯視服務帶來",
    p2Span2: "更高的精確度",
    p2Text3: "與",
    p2Span3: "安全保障",
    p2Text4: "。憑藉矯視中心與嚴謹護理，眾多客戶於術後獲得理想且穩定的視力效果，讓日常生活更輕鬆便利。",
    btn: "預約諮詢",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  fourFeature: {
    titlePrefix: "SMILE Pro 1.0/2.0",
    title: "四大特點",
    smallTitle: "ZEISS VISUMAX 800\n以德國蔡司光學與諾貝爾獎激光技術進行矯視",
    items: [
      {
        number: "01",
        title: "矯視過程短",
        desc: "激光時間最短約10秒",
        sub: "(單一眼睛)",
      },
      {
        number: "02",
        title: "精準度更高",
        desc: "具有視軸及散光軸",
        sub: "(輔助導航定位功能)",
      },
      {
        number: "03",
        title: "微創",
        desc: "約2MM的微創切口",
        sub: "",
      },
      {
        number: "04",
        title: "康復時間短",
        desc: "最快翌日可如常生活、工作",
        sub: "",
      },
    ],
  },
  price: {
    title: "SMILE Pro 微笑激光矯視冬日禮遇",
    card2: {
      header: "SMILE Pro 2.0 費用",
      title1: "SMILE Pro 2.0",
      title2: "微笑激光矯視",
      price: "HK$24,600",
      careTitle: "SMILE Pro 2.0 CARE",
      carePrice: "HK$26,350",
      epsTitle: "EPS用戶",
      epsPrice: "HK$25,850",
      careLink: "/smileProCare",
      careLinkText: "什麼是SMILE Pro 2.0 Care？",
      upgrades: [
        {
          icon: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-01-v2.svg",
          text: "自動追蹤",
          badge: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-02-v2.svg",
          text: "精準度提升",
          badge: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg",
        },
      ],
      preCheckTitle: "術前檢查費用",
      preCheckPrice: "HK$100",
      feeLink: "/fee#table1",
      feeLinkText: "查看矯視費用詳情",
    },
    card1: {
      header: "SMILE Pro 1.0 費用",
      title1: "SMILE Pro 1.0",
      title2: "微笑激光矯視",
      price: "HK$21,750",
      careTitle: "SMILE Pro 1.0 CARE",
      carePrice: "HK$23,500",
      epsTitle: "EPS用戶",
      epsPrice: "HK$23,000",
      preCheckTitle: "術前檢查費用",
      preCheckPrice: "HK$100",
      feeLink: "/fee#table1",
      feeLinkText: "查看矯視費用詳情",
    },
    notes: [
      "此為香港價錢，雙眼價錢",
      "矯視費用已包括術前檢查費用港幣$100（若沒有預約進行矯視，需另外繳付術前檢查費用）",
      "#免責聲明：受條款及細則約束。僅適用於以 EPS 全數支付之客戶。如有任何爭議，希瑪眼科將保留最終決定權。",
    ],
  },
  difference: {
    title: "SMILE/SMILE PRO/ICL 大不同",
    columns: ["SMILE", "SMILE PRO 1.0", "SMILE PRO 2.0", "ICL"],
    rows: [
      {
        title: "激光時間 (單一眼睛)",
        iconType: "laser",
        col1: "約23-25秒",
        col2: "約10秒",
        col3: "約10秒",
        col4: "不需使用激光\n（植入式）",
      },
      {
        title: "傷口大小",
        iconType: "wound",
        col1: "約2mm",
        col2: "約2mm",
        col3: "約2mm",
        col4: "約3mm",
      },
      {
        title: "術後眼乾情況",
        iconType: "dryeye",
        col1: "暫時性\n（輕微）",
        col2: "暫時性\n（輕微）",
        col3: "暫時性\n（輕微）",
        col4: "無",
      },
      {
        title: "定位追蹤\n技術",
        iconType: "nav",
        col1: "手動追蹤",
        col2: "手動追蹤",
        col3: "自動追蹤",
        col4: "自動追蹤",
      },
      {
        title: "康復時間",
        iconType: "recovery",
        colAll: "翌日",
      },
    ],
    btn: "預約諮詢",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  steps2: {
    title: "SMILE Pro 2.0 微笑激光矯視過程",
    list: [
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0201-v1.webp",
        text: "以「虹膜辨識」功能，即時追蹤並⾃動校正散光軸向",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0202-v1.webp",
        text: "全飛秒激光直接切割角膜中層",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
        text: "製作一個約 2-2.5mm 的小切口",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
        text: "將切割了的角膜 透鏡從切口抽出",
      },
    ],
  },
  steps1: {
    title: "SMILE Pro 1.0 微笑激光矯視過程",
    list: [
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0101-v1.webp",
        text: "以「視軸輔助導航」功能，精準輔助人手鎖定視軸中心點",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0102-v1.webp",
        text: "全飛秒激光直接切割角膜中層",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
        text: "製作一個約 2-2.5mm 的小切口",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
        text: "將切割了的角膜透鏡從切口抽出",
      },
    ],
  },
  suitable: {
    title: "你適合做SMILE Pro 1.0/2.0嗎?",
    imgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-pc.webp",
    imgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-mb.webp",
    items: [
      "①年滿<strong>二十一歲</strong>",
      "②暗室瞳孔直徑<strong>偏大</strong>",
      "③追求<strong>更佳</strong>手術體驗感",
      "④生活受<strong>近視</strong>或/及<strong>散光</strong>困擾",
      "⑤擔心矯視<strong>過程</strong>，眼睛無法對焦太久",
    ],
  },
  userRating: {
    title: "用家見證",
    list: [
      {
        name: "Macy",
        occupation: "文員",
        review: "做完SMILE Pro之後生活方便咗好多!好享受無需戴眼鏡的感覺，推薦！",
      },
      {
        name: "Ken",
        occupation: "行政人員",
        review: "完成SMILE Pro後，效果符合預期，係值得為自己做嘅投資",
      },
      {
        name: "Vivien",
        occupation: "家庭主婦",
        review: "本身好驚，但醫療團隊講解步驟好清楚，喺矯視過程溫柔又細心令我安心哂",
      },
      {
        name: "阿聲",
        occupation: "咖啡師",
        review: "終於唔洗成日帶con搞到眼乾眼紅!做完SMILE Pro之後發現呢個世界好靚",
      },
      {
        name: "Agnes",
        occupation: "店務員",
        review: "過程好快好安全，術後康復又快，眼睛兩三日後都已經清，感覺好神奇！",
      },
    ],
    btn: "預約諮詢",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
};

export const SMILE_PRO_ZH_CN: SmileProData = {
  breadcrumb: {
    home: "主页",
    service: "矫视服务",
    current: "SMILE Pro 2.0 微笑激光矫视",
  },
  banner: {
    noticeImgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-03-pc-v1.webp",
    noticeImgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-banner-03-mb-v1.webp",
    noticeMarqueeImg: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-notice-mb-03-v2.webp",
    heroImgPc: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/gnjyyi02_iwEZAqNqcGcDAQTRBQAF0QHgBrDC7hFoTYc2XwrCvXZrxcoBB9.webp",
    heroImgMb: "https://static.cmermedical.com.hk/smile/uploads/2026/11/11/trqms04n_iwEZAqNqcGcDAQTRAUsF0QFLBrBoxJln_el2TgrCvXZrxcoAB9.webp",
    heroAlt: "SMILE PRO 1.0/2.0 冬日最新价格",
    heroTitle: "秋日限定·睛采视界",
    tipTitle: "可矫正",
    tipItem1: "1,000度以下的近视",
    tipItem2: "500度以下的散光",
  },
  summary: {
    titlePrefix: "SMILE®Pro",
    titleStrong: "微笑激光矫视",
    fullUpgradedImg: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-full-upgraded-v2.svg",
    p1: {
      text1: "SMILE® Pro 微笑矫视为现时最新的",
      strong1: "微创",
      text2: "激光矫视技术。本中心采用德国",
      strong2: "ZEISS VISUMAX® 800",
      text3: "系统，",
      strong3: "无须打开角膜瓣",
      text4: "，仅透过约",
      strong4: "2-2.5mm",
      text5: "微创小切口取出角膜组织膜片，即可达到矫视效果。单眼激光时间仅需约 ",
      strong5: "10 秒",
      text6: "，能全方位覆盖",
      strong6: "近视、散光及老花",
      text7: "需求，助您减轻对眼镜的依赖。",
    },
    p2: {
      text8: "本中心推出 4 款专属矫视方案： ",
      strong7: "SMILE® Pro 1.0/2.0",
      text9: " 与 ",
      strong8: "SMILE® Pro Care 1.0 / 2.0",
      text10: " 。全方位满足不同需求，给您最安心的微创矫视体验！ ",
    },
    introImgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-pc-v1.webp",
    introImgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-intro-01-mb-v1.webp",
    videoUrl: "https://www.youtube.com/embed/IxvWmeOd18c",
  },
  pro2Intro: {
    logoImg: "https://statichk.cmermedical.com/smile/smileproV2/icon-smile-pro-2-v1.webp",
    certText: "蔡司ZEISS官方认证",
    title: "SMILE PRO 2.0 微笑激光矫视",
    desc: "为了给您更精准的视觉体验，希玛矫视作为蔡司官方伙伴，已全面升级引入 <strong class=\"font-bold text-primary\">SMILE® Pro 2.0</strong>！",
    feature1Title: "升级矫视数据平台",
    feature1Desc: "全新配置虹膜数据测量仪器，捕捉每双眼睛独一无二的虹膜纹路。透过新增的激光矫视数据平台，同步个人矫视参数至激光设备，简化整体矫视流程，同时提升运作效率与数据精准度。",
    feature2Title: "虹膜辨识散光导航",
    feature2Desc: "激光设备的智能辅助系统同步升级，进⼀步强化散光矫正的精准度与稳定性。SMILE pro 2.0 可在术中实时识别虹膜状态，与预存的专属虹膜影像对比。倘若眼球产生细微转动，系统亦能够即时追踪并自动校正散光轴向，减低对人工调校的依赖。",
  },
  whyChoose: {
    title: "为何选择希玛?",
    img: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif",
    imgMobile: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif",
    alt: "希玛眼科微笑矫视中心诊所环境",
    p1Text1: "希玛微笑矫视中心以尖端科技和卓越的客户体验；同时作为",
    p1Span: "首间获Zeiss蔡司颁发《全飞秒屈光手术 卓越手术中心》",
    p1Text2: "认证的香港矫视中心，成为了大众的SMILE Pro 2.0矫视首选。",
    p2Text1: "中心采用",
    p2Span1: "已获美国FDA认证",
    p2Text2: "的ZEISS VISUMAX 800 SMILE®pro 2.0设备，结合德国蔡司光学与诺贝尔奖激光技术，为SMILE Pro 2.0矫视服务带来更高的",
    p2Span2: "精确度",
    p2Text3: "与",
    p2Span3: "安全保障",
    p2Text4: "。此外，众多客户对术后效果表示满意，视力稳定，让日常生活更轻松便利。",
    btn: "预约咨询",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  fourFeature: {
    titlePrefix: "SMILE Pro 1.0/2.0",
    title: "四大特点",
    smallTitle: "ZEISS VISUMAX 800\n以德国蔡司光学与诺贝尔奖激光技术进行矫视",
    items: [
      {
        number: "01",
        title: "矫视过程短",
        desc: "激光时间最短约10-16秒",
        sub: "(单一眼睛)",
      },
      {
        number: "02",
        title: "精准度更高",
        desc: "具有视轴及散光轴",
        sub: "(辅助导航定位功能)",
      },
      {
        number: "03",
        title: "微创",
        desc: "约2MM的微创切口",
        sub: "",
      },
      {
        number: "04",
        title: "康复时间短",
        desc: "最快翌日可如常生活、工作",
        sub: "",
      },
    ],
  },
  price: {
    title: "SMILE Pro 微笑激光矫视冬日礼遇",
    card2: {
      header: "SMILE Pro 2.0 费用",
      title1: "SMILE Pro 2.0",
      title2: "微笑激光矫视",
      price: "HK$24,600",
      careTitle: "SMILE Pro 2.0 CARE",
      carePrice: "HK$26,350",
      epsTitle: "EPS用户",
      epsPrice: "HK$25,850",
      careLink: "/smileProCare",
      careLinkText: "什么是SMILE Pro 2.0 Care？",
      upgrades: [
        {
          icon: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-01-v2.svg",
          text: "自动追踪",
          badge: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg",
        },
        {
          icon: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-price-upgrade-02-v2.svg",
          text: "精准度提升",
          badge: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-upgrade.svg",
        },
      ],
      preCheckTitle: "术前检查费用",
      preCheckPrice: "HK$100",
      feeLink: "/fee#table1",
      feeLinkText: "查看矫视费用详情",
    },
    card1: {
      header: "SMILE Pro 1.0 费用",
      title1: "SMILE Pro 1.0",
      title2: "微笑激光矫视",
      price: "HK$21,750",
      careTitle: "SMILE Pro 1.0 CARE",
      carePrice: "HK$23,500",
      epsTitle: "EPS用户",
      epsPrice: "HK$23,000",
      preCheckTitle: "术前检查费用",
      preCheckPrice: "HK$100",
      feeLink: "/fee#table1",
      feeLinkText: "查看矫视费用详情",
    },
    notes: [
      "此为香港价钱，双眼价钱",
      "矫视费用已包括术前检查费用港币$100（若没有预约进行矫视，需另外缴付术前检查费用）",
      "#免责声明：受条款及细则约束。仅适用于以 EPS 全数支付之客户。如有任何争议，希玛眼科将保留最终决定权。",
    ],
  },
  difference: {
    title: "SMILE/SMILE PRO/ICL 大不同",
    columns: ["SMILE", "SMILE PRO 1.0", "SMILE PRO 2.0", "ICL"],
    rows: [
      {
        title: "激光时间 (单一眼睛)",
        iconType: "laser",
        col1: "约23-25秒",
        col2: "约10秒",
        col3: "约10秒",
        col4: "不需使用激光\n（植入式）",
      },
      {
        title: "伤口大小",
        iconType: "wound",
        col1: "约2mm",
        col2: "约2mm",
        col3: "约2mm",
        col4: "约3mm",
      },
      {
        title: "术后眼干情况",
        iconType: "dryeye",
        col1: "暂时性\n（轻微）",
        col2: "暂时性\n（轻微）",
        col3: "暂时性\n（轻微）",
        col4: "无",
      },
      {
        title: "定位追踪\n技术",
        iconType: "nav",
        col1: "手动追踪",
        col2: "手动追踪",
        col3: "自动追踪",
        col4: "自动追踪",
      },
      {
        title: "康复时间",
        iconType: "recovery",
        colAll: "翌日",
      },
    ],
    btn: "预约咨询",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  steps2: {
    title: "SMILE Pro 2.0 微笑激光矯視過程",
    list: [
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0201-v1.webp",
        text: "以「虹膜辨识」功能，即时追踪并自动校正散光轴向",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0202-v1.webp",
        text: "全飞秒激光直接切割角膜中层",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
        text: "制作一个约 2-2.5mm 的小切口",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
        text: "将切割了的角膜透镜从切口抽出",
      },
    ],
  },
  steps1: {
    title: "SMILE Pro 1.0 微笑激光矯視過程",
    list: [
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0101-v1.webp",
        text: "以「视轴辅助导航」功能，精准辅助人手锁定视轴中心点",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0102-v1.webp",
        text: "全飞秒激光直接切割角膜中层",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0103-v1.webp",
        text: "制作一个约 2-2.5mm 的小切口",
      },
      {
        image: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-step-0104-v1.webp",
        text: "将切割了的角膜透镜从切口抽出",
      },
    ],
  },
  suitable: {
    title: "你適合做SMILE Pro 1.0/2.0嗎?",
    imgPc: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-pc.webp",
    imgMb: "https://statichk.cmermedical.com/smile/smileproV2/smilepro-process-cover-mb.webp",
    items: [
      "①年满<strong>二十一岁</strong>",
      "②暗室瞳孔直径<strong>偏大</strong>",
      "③追求<strong>更佳</strong>手术体验感",
      "④生活受<strong>近视</strong>或/及<strong>散光</strong>困扰",
      "⑤担心矫视<strong>过程</strong>，眼睛无法对焦太久",
    ],
  },
  userRating: {
    title: "用家见证",
    list: [
      {
        name: "Macy",
        occupation: "文员",
        review: "做完SMILE Pro之后生活方便好多!好享受无需戴眼镜的感觉，推荐！",
      },
      {
        name: "Ken",
        occupation: "行政人员",
        review: "完成SMILE Pro后，效果符合预期，是值得为自己做的投资",
      },
      {
        name: "Vivien",
        occupation: "家庭主妇",
        review: "本身好担心，但医疗团队讲解步骤好清楚，在矫视过程温柔又细心令我完全安心",
      },
      {
        name: "阿声",
        occupation: "咖啡师",
        review: "终于不用整天戴隐形眼镜搞到眼干眼红!做完SMILE Pro之后发现这个世界好清晰",
      },
      {
        name: "Agnes",
        occupation: "店务员",
        review: "过程好快好安全，术后康复又快，眼睛两三日后都已经好清，感觉好神奇！",
      },
    ],
    btn: "预约咨询",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-05)%20SMILE%20Pro%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
};
