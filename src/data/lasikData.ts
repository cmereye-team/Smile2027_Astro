/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/lasikData.ts
 * @Description: LASIK 激光矯視專頁數據字典 (100% 官方真值對齊 + 繁簡雙語)
 */

export interface LasikBenefitItem {
  img: string;
  title: string;
  text: string;
}

export interface LasikSuitableItem {
  img: string;
  text: string[];
  mbText?: string[];
}

export interface LasikData {
  banner: {
    title: string;
    subtitle: string;
    imgPc: string;
    imgMb: string;
  };
  laserTechnology: {
    title: string;
    desc: string;
  };
  principle: {
    icon: string;
    iconAlt: string;
    title: string;
    images: string[];
    desc: string;
  };
  benefits: {
    title: string;
    items: LasikBenefitItem[];
  };
  suitable: {
    icon: string;
    title: string;
    items: LasikSuitableItem[];
  };
  appointment: {
    btn: string;
    whatsappUrl: string;
  };
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
}

export const LASIK_ZH_HK: LasikData = {
  banner: {
    title: "激光矯視",
    subtitle: "Laser-Assisted in Situ Keratomileusis",
    imgPc: "https://statichk.cmermedical.com/imgs/2024/04/8764882bb5d61bd6.webp",
    imgMb: "https://statichk.cmermedical.com/imgs/2024/04/6fdcba3b3d5247bc.webp",
  },
  laserTechnology: {
    title: "激光技術",
    desc: "超過20年的歷史，也是流行的矯視方式；利用激光技術，重塑角膜弧度以改善眼睛折射光線能力，從而矯正視力，減低客人對眼鏡和隱形眼鏡的依賴。",
  },
  principle: {
    icon: "/images/service/lasik/lasik-teyory.svg",
    iconAlt: "LASIK激光矯視原理",
    title: "激光矯視原理",
    images: [
      "https://statichk.cmermedical.com/imgs/2024/05/1f20b33e3e858609.png",
      "https://statichk.cmermedical.com/imgs/2024/04/334db04651a8d12d.png",
      "https://statichk.cmermedical.com/imgs/2024/04/e3237ebb2e10ea1c.png",
      "https://statichk.cmermedical.com/imgs/2024/04/8dd12144f4354a10.png",
    ],
    desc: "LASIK (Laser-Assisted in Situ Keratomileusis)是準分子激光原位角膜磨鑲術，通過激光「打磨」角膜，改變角膜弧度，從而矯正視力。過程中，醫生會先用飛秒激光製作角膜瓣；掀開角膜瓣後，用準分子激光進行角膜切削，再把角膜瓣復位，從而矯正視力。",
  },
  benefits: {
    title: "LASIK激光矯視的好處",
    items: [
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/71f07f2e49ae92d7.png",
        title: "術後恢復快",
        text: "最快術後數天可如常生活、工作",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/c8c583239e65a1a7.png",
        title: "手術時間短",
        text: "大約20至30分鐘完成",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/515c3b6fb8d3871d.png",
        title: "矯視過程輕鬆",
        text: "快捷、安全少有不適",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/a200f81d4d1872a1.png",
        title: "效果穩定",
        text: "視力改善滿意度高",
      },
    ],
  },
  suitable: {
    icon: "https://statichk.cmermedical.com/imgs/2024/04/8e745e91012fcd70.png",
    title: "合適對象",
    items: [
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/1acfa98b56345500.png",
        text: ["近視1,400度以下", "遠視/散光600度以下"],
        mbText: ["近視1,400度以下", "遠視/散光600度", "以下"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/2c2272ff6b7052c6.png",
        text: ["投考或從事紀律部隊/", "航空業界人士"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/56f73174b86b2288.png",
        text: ["熱愛運動"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/9f4ca0776e175624.png",
        text: ["不愛戴隱形眼鏡", "或眼鏡人士"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/7a55c233d701d0eb.png",
        text: ["擔心長期配戴隱形眼鏡", "影響眼睛健康人士"],
        mbText: ["擔心長期配戴", "隱形眼鏡影響眼睛", "健康人士"],
      },
    ],
  },
  appointment: {
    btn: "預約諮詢",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-07)%20LASIK%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  breadcrumb: {
    home: "首頁",
    service: "矯視服務",
    current: "LASIK激光矯視",
  },
};

export const LASIK_ZH_CN: LasikData = {
  banner: {
    title: "激光矫视",
    subtitle: "Laser-Assisted in Situ Keratomileusis",
    imgPc: "https://statichk.cmermedical.com/imgs/2024/04/8764882bb5d61bd6.webp",
    imgMb: "https://statichk.cmermedical.com/imgs/2024/04/6fdcba3b3d5247bc.webp",
  },
  laserTechnology: {
    title: "激光技术",
    desc: "超过20年的历史，也是流行的矫视方式；利用激光技术，重塑角膜弧度以改善眼睛折射光线能力，从而矫正视力，减低客人对眼镜和隐形眼镜的依赖。",
  },
  principle: {
    icon: "/images/service/lasik/lasik-teyory.svg",
    iconAlt: "LASIK激光矯視原理",
    title: "激光矫视原理",
    images: [
      "https://statichk.cmermedical.com/imgs/2024/05/1f20b33e3e858609.png",
      "https://statichk.cmermedical.com/imgs/2024/04/334db04651a8d12d.png",
      "https://statichk.cmermedical.com/imgs/2024/04/e3237ebb2e10ea1c.png",
      "https://statichk.cmermedical.com/imgs/2024/04/8dd12144f4354a10.png",
    ],
    desc: "LASIK (Laser-Assisted in Situ Keratomileusis)是准分子激光原位角膜磨镶术，通过激光「打磨」角膜，改变角膜弧度，从而矫正视力。过程中，医生会先用飞秒激光制作角膜瓣；掀开角膜瓣后，用准分子激光进行角膜切削，再把角膜瓣复位，从而矫正视力。",
  },
  benefits: {
    title: "LASIK激光矫视的好处",
    items: [
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/71f07f2e49ae92d7.png",
        title: "术后恢复快",
        text: "最快术后数天可如常生活、工作",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/c8c583239e65a1a7.png",
        title: "手术时间短",
        text: "大约20至30分钟完成",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/515c3b6fb8d3871d.png",
        title: "矫视过程轻松",
        text: "快捷、安全少有不适",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/a200f81d4d1872a1.png",
        title: "效果稳定",
        text: "视力改善满意度高",
      },
    ],
  },
  suitable: {
    icon: "https://statichk.cmermedical.com/imgs/2024/04/8e745e91012fcd70.png",
    title: "合适对象",
    items: [
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/1acfa98b56345500.png",
        text: ["近视1,400度以下", "远视/散光600度以下"],
        mbText: ["近视1,400度以下", "远视/散光600度", "以下"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/2c2272ff6b7052c6.png",
        text: ["投考或从事纪律部队/", "航空业界人士"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/56f73174b86b2288.png",
        text: ["热爱运动"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/9f4ca0776e175624.png",
        text: ["不爱戴隐形眼镜", "或眼镜人士"],
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2024/04/7a55c233d701d0eb.png",
        text: ["担心长期配戴隐形眼镜", "影响眼睛健康人士"],
        mbText: ["担心长期配戴", "隐形眼镜影响眼睛", "健康人士"],
      },
    ],
  },
  appointment: {
    btn: "预约咨询",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-07)%20LASIK%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  breadcrumb: {
    home: "首页",
    service: "矫视服务",
    current: "LASIK激光矫视",
  },
};
