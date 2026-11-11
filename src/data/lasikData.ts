/*
 * @Author: Antigravity AI
 * @Date: 2026-11-11
 * @FilePath: /src/data/lasikData.ts
 * @Description: LASIK 激光矯視 V2 專頁數據字典 (100% 對齊線上 vision-correction-lasikV2 真值文案與 W-07 埋點)
 */

export interface LasikPrincipleStep {
  num: string;
  img: string;
  alt: string;
  width: number;
  height: number;
}

export interface LasikBenefitItem {
  icon: string;
  title: string;
  lines: string[];
}

export interface LasikSuitableItem {
  icon: string;
  pcText: string[];
  mbText: string[];
}

export interface LasikData {
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  banner: {
    tag: string;
    title: string;
    subtitle: string;
  };
  conditions: {
    title: string;
    items: string[];
  };
  intro: {
    title: string;
    desc: string;
  };
  principle: {
    title: string;
    steps: LasikPrincipleStep[];
    desc: string;
  };
  benefits: {
    title: string;
    items: LasikBenefitItem[];
  };
  suitable: {
    title: string;
    desc: string;
    items: LasikSuitableItem[];
  };
  appointment: {
    btn: string;
    whatsappUrl: string;
  };
}

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-07)%20LASIK%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2";

export const LASIK_ZH_HK: LasikData = {
  breadcrumb: {
    home: "主頁",
    service: "矯視服務",
    current: "LASIK激光矯視",
  },
  banner: {
    tag: "LASIK",
    title: "激光矯視",
    subtitle: "Laser-Assisted in Situ Keratomileusis",
  },
  conditions: {
    title: "可矯正",
    items: [
      "1,400度以下的近視",
      "600度以下的遠視",
      "600度以下的散光",
    ],
  },
  intro: {
    title: "LASIK激光矯視",
    desc: "超過20年的歷史，也是流行的矯視方式；利用激光技術，重塑角膜弧度以改善眼睛折射光線能力，從而矯正視力，減低客人對眼鏡和隱形眼鏡的依賴。",
  },
  principle: {
    title: "LASIK激光矯視原理",
    steps: [
      {
        num: "01",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-01.svg",
        alt: "步驟1",
        width: 116,
        height: 116,
      },
      {
        num: "02",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-02.svg",
        alt: "步驟2",
        width: 116,
        height: 78,
      },
      {
        num: "03",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-03.svg",
        alt: "步驟3",
        width: 116,
        height: 116,
      },
      {
        num: "04",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-04.svg",
        alt: "步驟4",
        width: 119,
        height: 61,
      },
    ],
    desc: "LASlK(Laser-Assisted in Situ Keratomileusis)是準分子激光原位角膜鑲術，通過激光「打磨」角膜,改變角膜弧度,從而矯正視力。過程中，醫生會先用飛秒激光製作角膜瓣;掀開角膜瓣後，用準分子激光进行角膜切削，再把角膜瓣復位，從而矯正視力。",
  },
  benefits: {
    title: "LASIK激光矯視的好處",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-01.svg",
        title: "術後恢復快",
        lines: ["最快術後數天可如常", "生活、工作"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-02.svg",
        title: "手術時間短",
        lines: ["最快20-30分鐘", "內完成矯視"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-03.svg",
        title: "矯視過程輕鬆",
        lines: ["快捷、安全少有", "不適"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-04.svg",
        title: "效果穩定",
        lines: ["視力改善", "滿意度高"],
      },
    ],
  },
  suitable: {
    title: "合適對象",
    desc: "無論追求效率還是悠閒自在，\nLASIK激光矯視都讓你清楚\n見證往後每一刻。",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-01.svg",
        pcText: ["近視1,400度以下", "遠視/散光600度以下"],
        mbText: ["近視1,400度以下", "遠視/散光600度", "以下"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-02.svg",
        pcText: ["投考或從事紀律部隊/", "航空業界人士"],
        mbText: ["投考或從事", "紀律部隊/航", "空業界人士"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-03.svg",
        pcText: ["熱愛運動"],
        mbText: ["熱愛運動"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-04.svg",
        pcText: ["不愛戴隱形眼鏡", "或眼鏡人士"],
        mbText: ["不愛戴隱形眼鏡", "或眼鏡人士"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-05.svg",
        pcText: ["擔心長期配戴隱形眼鏡", "影響眼睛健康人士"],
        mbText: ["擔心長期配戴", "隱形眼鏡影響", "眼睛健康人士"],
      },
    ],
  },
  appointment: {
    btn: "預約諮詢",
    whatsappUrl: WHATSAPP_URL,
  },
};

export const LASIK_ZH_CN: LasikData = {
  breadcrumb: {
    home: "主页",
    service: "矫视服务",
    current: "LASIK激光矫视",
  },
  banner: {
    tag: "LASIK",
    title: "激光矫视",
    subtitle: "Laser-Assisted in Situ Keratomileusis",
  },
  conditions: {
    title: "可矫正",
    items: [
      "1,400度以下的近视",
      "600度以下的远视",
      "600度以下的散光",
    ],
  },
  intro: {
    title: "LASIK激光矫视",
    desc: "超过20年的历史，也是流行的矫视方式；利用激光技术，重塑角膜弧度以改善眼睛折射光线能力，从而矫正视力，减低客人对眼镜和隐形眼镜的依赖。",
  },
  principle: {
    title: "LASIK激光矫视原理",
    steps: [
      {
        num: "01",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-01.svg",
        alt: "步骤1",
        width: 116,
        height: 116,
      },
      {
        num: "02",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-02.svg",
        alt: "步骤2",
        width: 116,
        height: 78,
      },
      {
        num: "03",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-03.svg",
        alt: "步骤3",
        width: 116,
        height: 116,
      },
      {
        num: "04",
        img: "https://statichk.cmermedical.com/smile/lasik/lasik-principle-04.svg",
        alt: "步骤4",
        width: 119,
        height: 61,
      },
    ],
    desc: "LASlK(Laser-Assisted in Situ Keratomileusis)是准分子激光原位角膜镶术，通过激光「打磨」角膜,改变角膜弧度,从而矫正视力。过程中，医生会先用飞秒激光制作角膜瓣;掀开角膜瓣后，用准分子激光进行角膜切削，再把角膜瓣复位，从而矫正视力。",
  },
  benefits: {
    title: "LASIK激光矫视的好处",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-01.svg",
        title: "术后恢复快",
        lines: ["最快术后数天可如常", "生活、工作"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-02.svg",
        title: "手术时间短",
        lines: ["最快20-30分钟", "内完成矫视"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-03.svg",
        title: "矫视过程轻松",
        lines: ["快捷、安全少有", "不适"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-benefits-04.svg",
        title: "效果稳定",
        lines: ["视力改善", "满意度高"],
      },
    ],
  },
  suitable: {
    title: "适合对象",
    desc: "无论追求效率还是悠闲自在，\nLASIK激光矫视都让你清楚\n见证往后每一刻。",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-01.svg",
        pcText: ["近视1,400度以下", "远视/散光600度以下"],
        mbText: ["近视1,400度以下", "远视/散光600度", "以下"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-02.svg",
        pcText: ["投考或从事纪律部队/", "航空业界人士"],
        mbText: ["投考或从事", "纪律部队/航", "空业界人士"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-03.svg",
        pcText: ["热爱运动"],
        mbText: ["热爱运动"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-04.svg",
        pcText: ["不爱戴隐形眼镜", "或眼镜人士"],
        mbText: ["不爱戴隐形眼镜", "或眼镜人士"],
      },
      {
        icon: "https://statichk.cmermedical.com/smile/lasik/lasik-suitable-05.svg",
        pcText: ["担心长期配戴隐形眼镜", "影响眼睛健康人士"],
        mbText: ["担心长期配戴", "隐形眼镜影响", "眼睛健康人士"],
      },
    ],
  },
  appointment: {
    btn: "预约咨询",
    whatsappUrl: WHATSAPP_URL,
  },
};
