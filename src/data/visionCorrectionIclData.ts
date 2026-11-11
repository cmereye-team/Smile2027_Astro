/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/visionCorrectionIclData.ts
 * @Description: ICL 植入式隱形眼鏡數據字典 (100% 官方真值對齊 + 繁簡雙語支援)
 */
import type { RelexSmileShareItem } from "@/data/relexSmileData";

export interface IclStep {
  number: string;
  imagePc: string;
  image: string;
  text: string;
}

export interface IclGoodItem {
  icon: string;
  title: string;
  text: string[];
}

export interface IclPeculiarityItem {
  tag: string;
  title: string;
  boxImg: string;
  boxTitleText: string[];
  boxDes: string[];
  footerNum: string;
}

export interface IclPriceCard {
  title: string;
  currency: string;
  price: string;
  extra?: string;
}

export interface IclCheckItem {
  number: string;
  desc: string;
  isNew?: boolean;
}

export interface IclSuitableItem {
  desc: string[];
  image: string;
  subtitle?: string;
}

export interface IclVideoItem {
  src: string;
  title: string;
}

export interface IclData {
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  banner: {
    tag: string;
    title: string;
    subtitle: string;
    tipTitle: string;
    tipItems: string[];
    imgPc: string;
    imgMb: string;
  };
  center: {
    title: string;
    p1: {
      text1: string;
      text2: string;
    };
    p2: {
      italic1: string;
      span1: string;
      text2: string;
      italic2: string;
      span2: string;
      text3: string;
    };
  };
  whyChoose: {
    title: string;
    imgPc: string;
    imgMb: string;
    one: {
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
      text6: string;
      text7: string;
      text8: string;
    };
    features: Array<{
      title: string;
      badge: string;
      desc: string;
    }>;
    btn: string;
    whatsappUrl: string;
  };
  fee: {
    title: string;
    cards: IclPriceCard[];
    btn: string;
    notes: string[];
  };
  modelComparison: {
    titlePrefix: string;
    titleSuffix: string;
    project: string;
    cols: string[];
    range: {
      title: string;
      v4c: { strong1: string; strong2: string; prefix: string; mid: string; suffix: string };
      v5: string;
      v6: { p1: string; p2: string };
    };
    tech: {
      title: string;
      v4c: string;
      v5: string;
      v6: string;
    };
    materials: {
      title: string;
      v4c: string;
      intro: string;
    };
    audience: {
      title: string;
      v4c: string;
      v5: string;
      v6: { p1: string; p2: string };
    };
    night: {
      title: string;
      v4c: string;
      intro: string;
    };
    reversibility: {
      title: string;
      intro: string;
    };
  };
  good: {
    tag: string;
    title: string;
    items: IclGoodItem[];
  };
  peculiarity: {
    tag: string;
    title: string;
    desc: string;
    items: IclPeculiarityItem[];
  };
  steps: {
    titlePrefix: string;
    titleSuffix: string;
    list: IclStep[];
  };
  videos: {
    tag: string;
    title: string;
    list: IclVideoItem[];
  };
  suitable: {
    title: string;
    items: IclSuitableItem[];
  };
  check: {
    title: string;
    sub: string;
    items: IclCheckItem[];
    btn: string;
    whatsappUrl: string;
  };
  shareTitle: string;
  shareSub: string;
  latestNews: {
    badge: string;
    i: string;
    span: string;
    title: string;
    desc: string;
    btn: string;
    href: string;
  };
  socialShareTitle: string;
  news: {
    title: string;
    subtitle: string;
  };
}

// 官方客服 WhatsApp W-13 轉化追蹤鏈接 (嚴格遵循 docs/WHATSAPP_TRACKING_MATRIX.md)
const WHATSAPP_W13_URL =
  "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-13)%20ICL%E6%A4%8D%E5%85%A5%E5%BC%8F%E9%9A%B1%E5%BD%A2%E7%9C%BC%E9%8F%A1%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2";

export const ICL_SHARE_DATA: RelexSmileShareItem[] = [
  {
    type: "ICL",
    href: "https://youtu.be/NtULZl7qUEg",
    squareimg: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-027-v1.avif",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-027-v1.avif",
    text: ["真實用家共同見證", "「真實」自己"],
    nameEn: "",
    nameCn: "群星",
  },
  {
    type: "ICL",
    href: "https://youtu.be/M4-FA9U3VPo",
    squareimg: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-012-v1.avif",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-012-v1.avif",
    text: ["全天候高清視力", "我靠ICL!"],
    nameEn: "Celina",
    nameCn: "陳楨怡",
  },
  {
    type: "ICL",
    href: "https://youtu.be/D91jSXnpeNc",
    squareimg: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-011.avif",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-011.avif",
    text: ["ICL矯視過程講解及", "注意事項"],
    nameEn: "Ting Yan",
    nameCn: "梁庭欣",
  },
  {
    type: "ICL",
    href: "https://youtu.be/PmZk2TtrNBc",
    squareimg: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-010.avif",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-010.avif",
    text: ["一個「選擇」", "睇見自己嘅光芒"],
    nameEn: "Ting Yan",
    nameCn: "梁庭欣",
  },
  {
    type: "ICL",
    href: "https://youtu.be/fNSShYa7nKk",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem1.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem1.avif",
    text: ["依家一擘大眼就見到", "好清楚嘅世界，好立體"],
    nameEn: "Kathy",
    nameCn: "王頌茵",
  },
  {
    type: "ICL",
    href: "https://www.youtube.com/watch?v=T9g2qoFI9nU",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl1.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl1.avif",
    text: ["夜間高清視力對", "夜晚揸車好重要"],
    nameEn: "Lily",
    nameCn: "",
  },
  {
    type: "ICL",
    href: "https://youtu.be/I2sl4GWqg1w",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem4.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem4.avif",
    text: ["眼鏡由「必須品」", "變「奢侈品」"],
    nameEn: " ",
    nameCn: "麥沛東",
  },
  {
    type: "ICL",
    href: "https://www.youtube.com/watch?v=2t7JjTab4xA",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl2.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl2.avif",
    text: ["好Surprise 做完之後", "24小時都睇得咁清"],
    nameEn: "Phil",
    nameCn: "林奕匡",
  },
  {
    type: "ICL",
    href: "https://www.youtube.com/watch?v=5ihrzFvOy38",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl3.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl3.avif",
    text: ["每日起身唔洗戴Con", "慳好多時間 好方便"],
    nameEn: "Serene Lim ",
    nameCn: "林宣妤",
  },
  {
    type: "ICL",
    href: "https://www.youtube.com/watch?v=CEbbKFeFdnc",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl4.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl4.avif",
    text: ["眼鏡選擇多好多,", "世界限制少好多"],
    nameEn: "Kwan Gor",
    nameCn: "吳業坤",
  },
  {
    type: "ICL",
    href: "https://www.youtube.com/watch?v=e-c_qRuvWTA",
    squareimg: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl5.avif",
    img: "https://statichk.cmermedical.com/smile/VisionCorrectionCenter/userShare/boxShareItem-icl5.avif",
    text: ["做咗ICL 夜晚湊小朋友", "唔洗開燈都睇得清楚"],
    nameEn: "Tiffany Poon",
    nameCn: "",
  },
];

export const VISION_CORRECTION_ICL_ZH_HK: IclData = {
  breadcrumb: {
    home: "主頁",
    service: "矯視服務",
    current: "ICL植入式隱形眼鏡",
  },
  banner: {
    tag: "ICL",
    title: "植入式隱形眼鏡",
    subtitle: "ICL Implantable Collamer Lens",
    tipTitle: "可矯正",
    tipItems: [
      "• 1,800度以下的近視",
      "• 1,000度以下的遠視",
      "• 600度以下的散光",
    ],
    imgPc: "https://statichk.cmermedical.com/smile/icl/banner-lens-pc-v1.webp",
    imgMb: "https://statichk.cmermedical.com/smile/icl/banner-lens-m-v1.webp",
  },
  center: {
    title: "植入式隱形眼鏡",
    p1: {
      text1: "植入式隱形眼鏡Implantable Collamer Lens (ICL)，又名有晶體眼後房型植入式隱形眼鏡植入手術，",
      text2: "專為深度近視、遠視、散光客人而設",
    },
    p2: {
      italic1: "手術過程",
      span1: "無須切削角膜",
      text2: "， 把ICL晶體植入",
      italic2: "眼內，便可獲取高清視力。植入式隱形眼鏡以",
      span2: "非激光原理",
      text3: "，用創新技術和具生物兼容特質、柔軟及具紫外線防護的晶體材料，矯正高度近視、遠視及散光。",
    },
  },
  whyChoose: {
    title: "為何選擇希瑪?",
    imgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif",
    imgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif",
    one: {
      text1: "希瑪自創辦以來與STAAR Surgical公司建立良好的合作關係",
      text2: "逾10年。",
      text3: "2023年，STAAR Surgical公司對希瑪眼科集團的",
      text4: "醫療技術、手術品質及服務作出認可",
      text5: "，宣佈將希瑪微笑矯視中心設立為",
      text6: "全港首間及唯一官方認證EVO ICL 國際培訓中心",
      text7: "。 希瑪微笑矯視中心往後會繼續致力於ICL方面發展，成為大眾選擇ICL植入式隱形眼鏡的首選!",
      text8: "希瑪微笑矯視中心在矯視技術領域不斷追求突破，近期我們在ICL植入式隱形眼鏡的術前檢查和矯視過程中引入了新的技術項目，以提升服務的質量和精準度。",
    },
    features: [
      {
        title: "UBM眼科檢查",
        badge: "NEW!",
        desc: "在ICL植入式隱形眼鏡術前檢查中，新增了UBM眼科檢查(眼科超聲生物顯微鏡檢查)。UBM檢查是一種非侵入性技術，主要用於檢查房角，具有較高分辨率和較深穿透範圍，能夠清楚地觀察到眼睛的細微結構，有效克服傳統房角鏡檢查的盲區，為客戶提供更準確的診斷資訊。",
      },
      {
        title: "Verion技術",
        badge: "NEW!",
        desc: "在ICL植入式隱形眼鏡矯視過程中則引入了Verion技術。該技術通過測量散光軸度，能夠更精準地計算和規劃人工晶體植入方案。Verion技術在手術顯微鏡下進行「動態追蹤定位」，進一步提升植入人工晶體過程的精準度，從而提高了矯視的安全性和效果。",
      },
    ],
    btn: "預約諮詢",
    whatsappUrl: WHATSAPP_W13_URL,
  },
  fee: {
    title: "ICL植入式隱形眼鏡費用",
    cards: [
      {
        title: "ICL植入式隱形眼鏡",
        currency: "港幣",
        price: "$63,600",
        extra: "(散光+$5,000)",
      },
      {
        title: "ICL植入式隱形眼鏡 V4C",
        currency: "港幣",
        price: "$53,600",
        extra: "(散光+$5,000)",
      },
      {
        title: "術前檢查費用",
        currency: "港幣",
        price: "$500",
      },
    ],
    btn: "查看矯視費用詳情",
    notes: [
      "此為香港價錢，雙眼價錢",
      "矯視費用已包括術前檢查費用港幣$500 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
      "*指定信用卡（東亞/渣打/滙豐）可享6/12/18/24/36個月免息分期",
    ],
  },
  modelComparison: {
    titlePrefix: "EVO ICL 產品系列介紹",
    titleSuffix: "V4C｜V5｜V6 型號比較",
    project: "項目",
    cols: ["V4C", "V5", "V6"],
    range: {
      title: "矯正範圍",
      v4c: {
        prefix: "近視",
        strong1: "50-",
        strong2: "1800度",
        mid: "/",
        suffix: "散光 ≤ 600度",
      },
      v5: "近視 50-1400度/ 散光 ≤ 600度",
      v6: {
        p1: "近視 50-1000度/ 散光 ≤ 300度",
        p2: "附加：老花矯視",
      },
    },
    tech: {
      title: "核心技術",
      v4c: "CentraFLOW® 專利技術",
      v5: "特大光學區",
      v6: "EDoF 延展 景深技術",
    },
    materials: {
      title: "材質",
      v4c: "Collamer® 生物相容材質",
      intro: "Collamer®生物相容材質 納米抗沉積塗層",
    },
    audience: {
      title: "適用人群",
      v4c: "尋求穩定的 視力方案",
      v5: "追求極致 視覺品質",
      v6: {
        p1: "40 歲以上，",
        p2: "需同時處理 近視與老花",
      },
    },
    night: {
      title: "夜間視覺",
      v4c: "提供穩定視覺",
      intro: "顯著提升夜間視覺， 減少眩光與光暈干擾",
    },
    reversibility: {
      title: "可逆性",
      intro: "可逆轉，可按需取出晶體",
    },
  },
  good: {
    tag: "ICL",
    title: "矯視的好處",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-1.svg",
        title: "術後復原快",
        text: ["手術以微創技術進行", "術後復原期短"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-2.svg",
        title: "手術時間短",
        text: ["最快20-30分鐘", "內完成矯視"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-3.svg",
        title: "為生活帶來便利",
        text: ["矯視後可減低對眼鏡", "或隱形眼鏡的依賴"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-4.svg",
        title: "物料安全",
        text: ["2005年已通過", "美國FDA認證"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-5.svg",
        title: "不會導致乾眼症",
        text: ["過程無須切削角膜", "因此不會導致乾眼症"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-6.svg",
        title: "度身訂造治療方案",
        text: ["是一項可還原技術，客人", "可按需要選擇取出ICL"],
      },
    ],
  },
  peculiarity: {
    tag: "EVO Visian ICL",
    title: "鏡片7大特色",
    desc: "EVO Visian ICL以STAAR Surgical 專用的生物相容Collamer專利材質製成。這種材質含有自然存在於體內的膠原蛋白。EVO Visian ICL Collamer 技術的獨特優勢使其成為視力矯正鏡片的理想材質，其中包含抗紫外線功能。",
    items: [
      {
        tag: "ICL",
        title: "夜間視力",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img1.avif",
        boxTitleText: ["夜間視力"],
        boxDes: ["提供絕佳夜間", "視力"],
        footerNum: "001",
      },
      {
        tag: "ICL",
        title: "可取出",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img2.avif",
        boxTitleText: ["可取出"],
        boxDes: ["可按需要", "選擇取出鏡片"],
        footerNum: "002",
      },
      {
        tag: "ICL",
        title: "生物相容性",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img3.avif",
        boxTitleText: ["生物相容性"],
        boxDes: ["ICL鏡片由含有", "膠原蛋白材質", "製成， 與眼球", "互相兼容"],
        footerNum: "003",
      },
      {
        tag: "ICL",
        title: "紫外線防護",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img4.avif",
        boxTitleText: ["紫外線防護"],
        boxDes: ["鏡片有紫外線", "防護功能"],
        footerNum: "004",
      },
      {
        tag: "ICL",
        title: "手術與恢復皆快速",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img5.avif",
        boxTitleText: ["手術與恢復", "皆快速"],
        boxDes: [
          "手術時間短 ",
          "復原期短，單邊眼",
          "睛手術過程最快只",
          "需20-30分鐘",
        ],
        footerNum: "005",
      },
      {
        tag: "ICL",
        title: "與時俱進的靈活度",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img6.avif",
        boxTitleText: ["與時俱進的", "靈活度"],
        boxDes: ["ICL鏡片既可", "永久存放眼內", "亦可還原"],
        footerNum: "006",
      },
      {
        tag: "ICL",
        title: "柔軟服貼",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img7.avif",
        boxTitleText: ["柔軟服貼"],
        boxDes: ["鏡片柔軟靈活", "易於植入"],
        footerNum: "007",
      },
    ],
  },
  steps: {
    titlePrefix: "植入式隱形眼鏡",
    titleSuffix: "植入過程",
    list: [
      {
        number: "01",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro1.webp",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-mobile-intro1.webp",
        text: "進行手術前，醫生先在客人眼睛上滴麻醉及放大瞳孔眼藥水。",
      },
      {
        number: "02",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
        text: "在角膜緣製作一個約3毫米的小開口，將摺疊的晶體植入眼球。",
      },
      {
        number: "03",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
        text: "植入晶體後，醫生會調整晶體的位置，確保在適宜的位置。",
      },
      {
        number: "04",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
        text: "手術結束後，需按醫生指示滴眼藥水。一般矯視後第二天已能恢復視力。",
      },
      {
        number: "05",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
        text: "完成手術後，需按指示定期覆診以追蹤視力。",
      },
    ],
  },
  videos: {
    tag: "ICL",
    title: "植入式隱形眼鏡介紹影片",
    list: [
      {
        src: "https://www.youtube.com/embed/0-mlyxrBaus",
        title: "【真正隱形嘅隱形眼鏡 - ICL🤩】",
      },
      {
        src: "https://www.youtube.com/embed/7_A3ae7q15E",
        title: "#邊款矯視適合您💡",
      },
    ],
  },
  suitable: {
    title: "合適對象",
    items: [
      {
        desc: ["高度近遠視", "或深度數", "散光人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc1.avif",
      },
      {
        desc: ["熱愛運動/", "注重儀表人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc2.avif",
      },
      {
        desc: ["因佩戴隱形眼", "鏡導致乾眼症", "人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc3.avif",
      },
      {
        desc: ["希望減低對眼", "鏡或隱形眼鏡", "依賴的人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc4.avif",
      },
      {
        desc: ["因角膜厚度", "偏薄/角膜形狀", "欠佳而不適合接", "受激光矯視人士"],
        subtitle: "ICL矯視",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc5.avif",
      },
    ],
  },
  check: {
    title: "全面術前眼睛檢查項目",
    sub: "包括",
    items: [
      { number: "1.", desc: "Verion 眼科超聲生物顯微鏡", isNew: true },
      { number: "2.", desc: "屈光檢查" },
      { number: "3.", desc: "Sirius：角膜結構及瞳孔測量" },
      { number: "4.", desc: "Pentacam：360全面角膜結構測量" },
      { number: "5.", desc: "淚水分泌測試" },
      { number: "6.", desc: "Specular Microscopy內皮細胞的密度測量" },
      { number: "7.", desc: "OCT：黃斑及視網膜掃瞄 (如有需要)" },
      { number: "8.", desc: "SLO：360全面眼底檢查" },
      { number: "9.", desc: "醫生會診：眼睛狀況評估及矯視方案建議" },
    ],
    btn: "預約諮詢",
    whatsappUrl: WHATSAPP_W13_URL,
  },
  shareTitle: "用家分享",
  shareSub: "聽聽各位真實用家親身感受",
  latestNews: {
    badge: "最新動態",
    i: "ICL Viva",
    span: "ICL V6",
    title: "老花矯視",
    desc: "ICL Viva (ICL V6) 是一種擴展景深，專為矯正老花而設的植入式隱形眼鏡，適合未有白內障，而正受近視及老花困擾的人士。",
    btn: "了解更多",
    href: "/vision-correction-presbyopia",
  },
  socialShareTitle: "同朋友分享一下啦！",
  news: {
    title: "最新情報",
    subtitle: "LATEST NEWS",
  },
};

export const VISION_CORRECTION_ICL_ZH_CN: IclData = {
  breadcrumb: {
    home: "主页",
    service: "矫视服务",
    current: "ICL植入式隐形眼镜",
  },
  banner: {
    tag: "ICL",
    title: "植入式隐形眼镜",
    subtitle: "ICL Implantable Collamer Lens",
    tipTitle: "可矫正",
    tipItems: [
      "• 1,800度以下的近视",
      "• 1,000度以下的远视",
      "• 600度以下的散光",
    ],
    imgPc: "https://statichk.cmermedical.com/smile/icl/banner-lens-pc-v1.webp",
    imgMb: "https://statichk.cmermedical.com/smile/icl/banner-lens-m-v1.webp",
  },
  center: {
    title: "植入式隐形眼镜",
    p1: {
      text1: "植入式隐形眼镜Implantable Collamer Lens (ICL)，又名有晶体眼后房型植入式隐形眼镜植入手术，",
      text2: "专为深度近视、远视、散光客人而设",
    },
    p2: {
      italic1: "手术过程",
      span1: "无须切削角膜",
      text2: "， 把ICL晶体植入",
      italic2: "眼内，便可获取高清视力。植入式隐形眼镜以",
      span2: "非激光原理",
      text3: "，用创新技术和具生物兼容特质、柔软及具紫外线防护的晶体材料，矫正高度近视、远视及散光。",
    },
  },
  whyChoose: {
    title: "为何选择希玛?",
    imgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-pc.avif",
    imgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/icl-why-mobile.avif",
    one: {
      text1: "希玛自创办以来与STAAR Surgical公司建立良好的合作关系",
      text2: "逾10年。",
      text3: "2023年，STAAR Surgical公司对希玛眼科集团的",
      text4: "医疗技术、手术品质及服务作出认可",
      text5: "，宣布将希玛微笑矫视中心设立为",
      text6: "全港首间及唯一官方认证EVO ICL 国际培训中心",
      text7: "。 希玛微笑矫视中心往后会继续致力于ICL方面发展，成为大众选择ICL植入式隐形眼镜的首选!",
      text8: "希玛微笑矫视中心在矫视技术领域不断追求突破，近期我们在ICL植入式隐形眼镜的术前检查和矫视过程中引入了新的技术项目，以提升服务的质量和精准度。",
    },
    features: [
      {
        title: "UBM眼科检查",
        badge: "NEW!",
        desc: "在ICL植入式隐形眼镜术前检查中，新增了UBM眼科检查(眼科超声生物显微镜检查)。UBM检查是一种非侵入性技术，主要用于检查房角，具有较高分辨率和较深穿透范围，能够清楚地观察到眼睛的细微结构，有效克服传统房角镜检查的盲区，为客户提供更准确的诊断资讯。",
      },
      {
        title: "Verion技术",
        badge: "NEW!",
        desc: "在ICL植入式隐形眼镜矫视过程中则引入了Verion技术。该技术通过测量散光轴度，能够更精准地计算和规划人工晶体植入方案。Verion技术在手术显微镜下进行「动态追踪定位」，进一步提升植入人工晶体过程的精准度，从而提高了矫视的安全性和效果。",
      },
    ],
    btn: "预约咨询",
    whatsappUrl: WHATSAPP_W13_URL,
  },
  fee: {
    title: "ICL植入式隱形眼鏡費用",
    cards: [
      {
        title: "ICL植入式隱形眼鏡",
        currency: "港幣",
        price: "$63,600",
        extra: "(散光+$5,000)",
      },
      {
        title: "ICL植入式隱形眼鏡 V4C",
        currency: "港幣",
        price: "$53,600",
        extra: "(散光+$5,000)",
      },
      {
        title: "術前檢查費用",
        currency: "港幣",
        price: "$500",
      },
    ],
    btn: "查看矯視費用詳情",
    notes: [
      "此為香港價錢，雙眼價錢",
      "矯視費用已包括術前檢查費用港幣$500 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
      "*指定信用卡（東亞/渣打/滙豐）可享6/12/18/24/36個月免息分期",
    ],
  },
  modelComparison: {
    titlePrefix: "EVO ICL 产品系列介绍",
    titleSuffix: "V4C｜V5｜V6 型号比较",
    project: "项目",
    cols: ["V4C", "V5", "V6"],
    range: {
      title: "矫正范围",
      v4c: {
        prefix: "近视",
        strong1: "50-",
        strong2: "1800度",
        mid: "/",
        suffix: "散光 ≤ 600度",
      },
      v5: "近视 50-1400度/ 散光 ≤ 600度",
      v6: {
        p1: "近视 50-1000度/ 散光 ≤ 300度",
        p2: "附加：老花矫视",
      },
    },
    tech: {
      title: "核心技术",
      v4c: "CentraFLOW® 专利技术",
      v5: "特大光学区",
      v6: "EDoF 延展 景深技术",
    },
    materials: {
      title: "材质",
      v4c: "Collamer® 生物相容材质",
      intro: "Collamer®生物相容材质 纳米抗沉积涂层",
    },
    audience: {
      title: "适用人群",
      v4c: "寻求稳定的 视力方案",
      v5: "追求极致 视觉品质",
      v6: {
        p1: "40 岁以上，",
        p2: "需同时处理 近视与老花",
      },
    },
    night: {
      title: "夜间视觉",
      v4c: "提供稳定视觉",
      intro: "显著提升夜间视觉， 减少眩光与光晕干扰",
    },
    reversibility: {
      title: "可逆性",
      intro: "可逆转，可按需取出晶体",
    },
  },
  good: {
    tag: "ICL",
    title: "矫视的好处",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-1.svg",
        title: "术后复原快",
        text: ["手术以微创技术进行", "术后复原期短"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-2.svg",
        title: "手术时间短",
        text: ["最快20-30分钟", "内完成矫视"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-3.svg",
        title: "为生活带来便利",
        text: ["矫视后可减低对眼镜", "或隐形眼镜的依赖"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-4.svg",
        title: "物料安全",
        text: ["2005年已通过", "美国FDA认证"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-5.svg",
        title: "不会导致干眼症",
        text: ["过程无须切削角膜", "因此不会导致干眼症"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/good/icl-good-6.svg",
        title: "量身订造治疗方案",
        text: ["是一项可还原技术，客人", "可按需要选择取出ICL"],
      },
    ],
  },
  peculiarity: {
    tag: "EVO Visian ICL",
    title: "镜片7大特色",
    desc: "EVO Visian ICL以STAAR Surgical 专用的生物相容Collamer专利材质制成。这种材质含有自然存在于体内的胶原蛋白。EVO Visian ICL Collamer 技术的独特优势使其成为视力矫正镜片的理想材质，其中包含抗紫外线功能。",
    items: [
      {
        tag: "ICL",
        title: "夜间视力",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img1.avif",
        boxTitleText: ["夜間視力"],
        boxDes: ["提供絕佳夜間", "視力"],
        footerNum: "001",
      },
      {
        tag: "ICL",
        title: "可取出",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img2.avif",
        boxTitleText: ["可取出"],
        boxDes: ["可按需要", "選擇取出鏡片"],
        footerNum: "002",
      },
      {
        tag: "ICL",
        title: "生物相容性",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img3.avif",
        boxTitleText: ["生物相容性"],
        boxDes: ["ICL鏡片由含有", "膠原蛋白材質", "製成， 與眼球", "互相兼容"],
        footerNum: "003",
      },
      {
        tag: "ICL",
        title: "紫外线防护",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img4.avif",
        boxTitleText: ["紫外線防護"],
        boxDes: ["鏡片有紫外線", "防護功能"],
        footerNum: "004",
      },
      {
        tag: "ICL",
        title: "手术与恢复皆快速",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img5.avif",
        boxTitleText: ["手術與恢復", "皆快速"],
        boxDes: [
          "手術時間短 ",
          "復原期短，單邊眼",
          "睛手術過程最快只",
          "需20-30分鐘",
        ],
        footerNum: "005",
      },
      {
        tag: "ICL",
        title: "与时俱进的灵活性",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img6.avif",
        boxTitleText: ["與時俱進的", "靈活度"],
        boxDes: ["ICL鏡片既可", "永久存放眼內", "亦可還原"],
        footerNum: "006",
      },
      {
        tag: "ICL",
        title: "柔软服贴",
        boxImg: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/peculiarity/icl-tese-img7.avif",
        boxTitleText: ["柔軟服貼"],
        boxDes: ["鏡片柔軟靈活", "易於植入"],
        footerNum: "007",
      },
    ],
  },
  steps: {
    titlePrefix: "植入式隐形眼镜",
    titleSuffix: "植入过程",
    list: [
      {
        number: "01",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro1.webp",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-mobile-intro1.webp",
        text: "进行手术前，医生先在客人眼睛上滴麻醉及放大瞳孔眼药水。",
      },
      {
        number: "02",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro2.avif",
        text: "在角膜缘制作一个约3毫米的小开口，将摺叠的晶体植入眼球。",
      },
      {
        number: "03",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro3.avif",
        text: "植入晶体后，医生会调整晶体的位置，确保在适宜的位置。",
      },
      {
        number: "04",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro4.avif",
        text: "手术结束后，需按医生指示滴眼药水。一般矫视后第二天已能恢复视力。",
      },
      {
        number: "05",
        imagePc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/intro/icl-pc-intro5.avif",
        text: "完成手术后，需按指示定期覆诊以追踪视力。",
      },
    ],
  },
  videos: {
    tag: "ICL",
    title: "植入式隐形眼镜介绍影片",
    list: [
      {
        src: "https://www.youtube.com/embed/0-mlyxrBaus",
        title: "【真正隐形嘅隐形眼镜 - ICL🤩】",
      },
      {
        src: "https://www.youtube.com/embed/7_A3ae7q15E",
        title: "#边款矫视适合您💡",
      },
    ],
  },
  suitable: {
    title: "合适对象",
    items: [
      {
        desc: ["高度近远视", "或深度数", "散光人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc1.avif",
      },
      {
        desc: ["热爱运动/", "注重仪表人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc2.avif",
      },
      {
        desc: ["因佩戴隐形眼", "镜导致干眼症", "人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc3.avif",
      },
      {
        desc: ["希望减低对眼", "镜或隐形眼镜", "依赖的人士"],
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc4.avif",
      },
      {
        desc: ["因角膜厚度", "偏薄/角膜形状", "欠佳而不适合接", "受激光矫视人士"],
        subtitle: "ICL矫视",
        image: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/hsdx/icl-heshiduixiang-pc5.avif",
      },
    ],
  },
  check: {
    title: "全面术前眼睛检查项目",
    sub: "包括",
    items: [
      { number: "1.", desc: "Verion 眼科超声生物显微镜", isNew: true },
      { number: "2.", desc: "屈光检查" },
      { number: "3.", desc: "Sirius：角膜结构及瞳孔测量" },
      { number: "4.", desc: "Pentacam：360全面角膜结构测量" },
      { number: "5.", desc: "泪水分泌测试" },
      { number: "6.", desc: "Specular Microscopy内皮细胞的密度测量" },
      { number: "7.", desc: "OCT：黄斑及视网膜扫描 (如有需要)" },
      { number: "8.", desc: "SLO：360全面眼底检查" },
      { number: "9.", desc: "医生会诊：眼睛状况评估及矫视方案建议" },
    ],
    btn: "预约咨询",
    whatsappUrl: WHATSAPP_W13_URL,
  },
  shareTitle: "用家分享",
  shareSub: "听听各位真实用家亲身感受",
  latestNews: {
    badge: "最新动态",
    i: "ICL Viva",
    span: "ICL V6",
    title: "老花矫视",
    desc: "ICL Viva (ICL V6) 是一种扩展景深，专为矫正老花而设的植入式隐形眼镜，适合未有白内障，而正受近视及老花困扰的人士。",
    btn: "了解更多",
    href: "/vision-correction-presbyopia",
  },
  socialShareTitle: "同朋友分享一下啦！",
  news: {
    title: "最新情报",
    subtitle: "LATEST NEWS",
  },
};
