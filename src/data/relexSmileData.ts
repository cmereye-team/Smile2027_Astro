export type { RelexSmileShareItem } from "@/data/videoData";

export interface RelexSmileStep {
  number: string;
  imagePc: string;
  image: string;
  text: string;
}

export interface RelexSmileBenefit {
  id: number;
  icon: string;
  title: string;
  desc: string;
  active: boolean;
  row: number;
}

export interface RelexSmileData {
  hero: {
    tag: string;
    title: string;
    subtitle: string;
  };
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  principles: {
    titlePrefix: string;
    titleSuffix: string;
    desc: string;
    btn: string;
    whatsappUrl: string;
  };
  steps: {
    titlePrefix: string;
    titleSuffix: string;
    list: RelexSmileStep[];
  };
  whyChoose: {
    title: string;
    img: string;
    alt: string;
    p1: string;
    p2: string;
    p3: string;
  };
  shareTitle: string;
  fee: {
    title: string;
    items: Array<{
      name: string;
      price: string;
    }>;
    btn: string;
    notes: string[];
  };
  benefit: {
    title: string;
    list: RelexSmileBenefit[];
  };
  condition: {
    titleHtml: string;
    items: string[];
    desc1: string;
    desc2: string;
    btn: string;
    whatsappUrl: string;
  };
  xtra: {
    title: string;
    subtitle: string;
    tag: string;
    card1TitleHtml: string;
    card1Text: string;
    card2TitleHtml: string;
    card2Text: string;
    btn: string;
    whatsappUrl: string;
  };
  exercise: {
    title: string;
    subtitle: string;
    img: string;
    alt: string;
    tips: string[];
  };
  news: {
    title: string;
    subtitle: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const RELEX_SMILE_ZH_HK: RelexSmileData = {
  hero: {
    tag: "SMILE",
    title: "微笑激光矯視",
    subtitle: "Small Incision Lenticule Extraction",
  },
  breadcrumb: {
    home: "主頁",
    service: "矯視服務",
    current: "SMILE微笑激光矯視",
  },
  principles: {
    titlePrefix: "SMILE",
    titleSuffix: "矯正原理",
    desc: "SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE 微笑矯視使用<span>Carl Zeiss VisuMax</span>激光最新2.0系統，原理是在<span>不用打開角膜瓣</span>的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人<span>矯正近視、散光及老花</span>問題，減低對眼鏡的依賴。",
    btn: "預約諮詢",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  steps: {
    titlePrefix: "SMILE",
    titleSuffix: " 矯正步驟",
    list: [
      {
        number: "01",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-1.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-1.webp",
        text: "以全飛秒激光直接切割角膜中層",
      },
      {
        number: "02",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-2.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-2.webp",
        text: "製作一個約2-2.5mm的小切口",
      },
      {
        number: "03",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-3.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-3.webp",
        text: "將切割了的角膜透鏡從切口抽出",
      },
    ],
  },
  whyChoose: {
    title: "為何選擇希瑪?",
    img: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-why.avif",
    alt: "為何選擇希瑪",
    p1: "希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲<span>Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》</span>認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。",
    p2: "中心採用已獲<span>美國FDA認證的Carl Zeiss Visumax</span>設備，結合德國蔡司光學技術與創新激光科技。",
    p3: "來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊<span>全程細心的跟進</span>，亦確保每位真實用家都能安心體驗矯視服務。",
  },
  shareTitle: "SMILE用家分享",
  fee: {
    title: "SMILE微笑激光矯視費用",
    items: [
      {
        name: "SMILE<br /><span class=\"\">微笑激光矯視</span>",
        price: "港幣$17,500",
      },
      {
        name: "術前檢查費用",
        price: "港幣$100",
      },
    ],
    btn: "查看矯視費用詳情",
    notes: [
      "此為香港價錢，雙眼價錢",
      "矯視費用已包括術前檢查費用港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    ],
  },
  benefit: {
    title: "SMILE微笑激光矯視的好處",
    list: [
      {
        id: 1,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-1.svg",
        title: "手術簡單",
        desc: "無需製造\n角膜瓣",
        active: false,
        row: 1,
      },
      {
        id: 2,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-2.svg",
        title: "術後復原快",
        desc: "最快術後翌日\n生活、工作",
        active: false,
        row: 1,
      },
      {
        id: 3,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-3.svg",
        title: "手術時間短",
        desc: "最快10-15分鐘\n完成",
        active: false,
        row: 1,
      },
      {
        id: 4,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-4.svg",
        title: "術後影響少",
        desc: "減低術後眼乾及\n感染的可能性",
        active: false,
        row: 2,
      },
      {
        id: 5,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-5.svg",
        title: "微創",
        desc: "傷口只有約\n2-2.5mm",
        active: true,
        row: 2,
      },
      {
        id: 6,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-6.svg",
        title: "效果穩定",
        desc: "視力改善\n顯著",
        active: false,
        row: 2,
      },
    ],
  },
  condition: {
    titleHtml: "你適合接受<br /><span class=\"font-en font-bold\">SMILE</span>微笑矯視嗎?",
    items: [
      "1,000 度以下近視",
      "500 度以下散光",
      "角膜厚度正常",
      "沒有患上眼疾，如青光眼或視網膜疾病",
      "發育成熟，近視度數穩定",
      "非懷孕或哺乳期間",
      "沒有患上自體免疫疾病，如風濕性關節炎或紅斑狼瘡",
      "不需要長期服用類固醇",
      "角膜沒受感染，例如發炎或曾受傷",
    ],
    desc1: "如以上條件都與你的情況相符，你已符合進行SMILE微笑矯視的基本條件。",
    desc2: "若不確定，歡迎預約諮詢。",
    btn: "預約諮詢",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  xtra: {
    title: "SMILE XTRA角膜膠原交聯術",
    subtitle: "Comeal Collagen Cross-Linking",
    tag: "可與SMILE微笑激光矯視同時進行",
    card1TitleHtml: "什麼是 <span>SMILE XTRA</span>？",
    card1Text: "透過在角膜局部加入維生素B2，再經紫外線V2照射，使角膜裡面的膠原蛋白緊扣，令角膜變得更加堅韌和穩定，降低角膜變形／反彈的可能",
    card2TitleHtml: "我需要接受 <span>SMILE XTRA</span>？",
    card2Text: "如果你的眼晴度數較深、角膜比較薄，希望強化角膜以減低角膜變形及度數反彈的機會，經評估後，醫生會作出判斷是否需要接受SMILE XTRA角膜膠原交聯術",
    btn: "了解更多",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%83%B3%E4%BA%86%E8%A7%A3SMILE%20XTRA%E8%A7%92%E8%86%9C%E8%86%A0%E5%8E%9F%E4%BA%A4%E8%81%AF%E8%A1%93",
  },
  exercise: {
    title: "SMILE微笑矯視前小練習",
    subtitle: "以下為模擬手術提示，矯視前可跟指示多進行注視練習",
    img: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-round.avif",
    alt: "SMILE微笑矯視前小練習",
    tips: [
      "①雙眼同時睜開，注視上圖綠點。",
      "②交替遮著左右眼，各邊30秒。注意被遮著的眼睛仍需保持睜開。",
    ],
  },
  news: {
    title: "最新情報",
    subtitle: "CATCH UP WITH US",
  },
  faqs: [
    {
      question: "SMILE矯正原理",
      answer: "SMILE微笑矯視是一項突破性的微創矯正技術。本中心的 SMILE 微笑矯視使用Carl Zeiss VisuMax激光最新2.0系統，原理是在不用打開角膜瓣的情況下，以全飛秒激光掃描製作角膜組織膜片，再通過2-2.5mm的小切口把膜片取出，以達到視力矯正的效果。此技術可以為客人矯正近視、散光及老花問題，減低對眼鏡的依賴。",
    },
    {
      question: "SMILE矯正步驟",
      answer: "以全飛秒激光直接切割角膜中層，製作一個約2-2.5mm的小切口，將切割了的角膜透鏡從切口抽出。",
    },
    {
      question: "為何選擇希瑪?",
      answer: "希瑪微笑矯視中心一直致力為客戶提供高效、安全的視力矯正方案。作為香港首間獲Zeiss蔡司頒發《全飛秒屈光手術 卓越手術中心》認證的矯視中心，希瑪在SMILE微笑矯視領域具備領先地位，深受信賴。中心採用已獲美國FDA認證的Carl Zeiss Visumax設備，結合德國蔡司光學技術與創新激光科技。來自不同行業及身份的SMILE真實用家均表示矯視後效果符合預期，恢復迅速，生活質素顯著提升；配合希瑪團隊全程細心的跟進，亦確保每位真實用家都能安心體驗矯視服務。",
    },
    {
      question: "SMILE微笑激光矯視的好處",
      answer: "手術簡單，無需製造角膜瓣；術後復原快，最快術後翌日生活、工作；手術時間短，最快10-15分鐘完成；術後影響少，減低術後眼乾及感染的可能性；微創，傷口只有約2-2.5mm；效果穩定，視力改善顯著。",
    },
    {
      question: "你適合接受SMILE微笑矯視嗎?",
      answer: "1,000 度以下近視；500 度以下散光；角膜厚度正常；沒有患上眼疾，如青光眼或視網膜疾病；發育成熟，近視度數穩定；非懷孕或哺乳期間；沒有患上自體免疫疾病，如風濕性關節炎或紅斑狼瘡；不需要長期服用類固醇；角膜沒受感染，例如發炎或曾受傷。",
    },
    {
      question: "什麼是 SMILE XTRA？",
      answer: "透過在角膜局部加入維生素B2，再經紫外線V2照射，使角膜裡面的膠原蛋白緊扣，令角膜變得更加堅韌和穩定，降低角膜變形／反彈的可能。",
    },
    {
      question: "我需要接受 SMILE XTRA？",
      answer: "如果你的眼晴度數較深、角膜比較薄，希望強化角膜以減低角膜變形及度數反彈的機會，經評估後，醫生會作出判斷是否需要接受SMILE XTRA角膜膠原交聯術。",
    },
  ],
};

export const RELEX_SMILE_ZH_CN: RelexSmileData = {
  hero: {
    tag: "SMILE",
    title: "微笑激光矫视",
    subtitle: "Small Incision Lenticule Extraction",
  },
  breadcrumb: {
    home: "主页",
    service: "矫视服务",
    current: "SMILE微笑激光矫视",
  },
  principles: {
    titlePrefix: "SMILE",
    titleSuffix: "矫正原理",
    desc: "SMILE微笑矫视是一项突破性的微创矫正技术。本中心的 SMILE 微笑矫视使用<span>Carl Zeiss VisuMax</span>激光最新2.0系统，原理是在<span>不用打开角膜瓣</span>的情况下，以全飞秒激光扫描制作角膜组织膜片，再通过2-2.5mm的小切口把膜片取出，以达到视力矫正的效果。此技术可以为客人<span>矫正近视、散光及老花</span>问题，减低对眼镜的依赖。",
    btn: "预约咨询",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  steps: {
    titlePrefix: "SMILE",
    titleSuffix: " 矫正步骤",
    list: [
      {
        number: "01",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-1.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-1.webp",
        text: "以全飞秒激光直接切割角膜中层",
      },
      {
        number: "02",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-2.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-2.webp",
        text: "制作一个约2-2.5mm的小切口",
      },
      {
        number: "03",
        imagePc: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-3.webp",
        image: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-swiper-3.webp",
        text: "将切割了的角膜透镜从切口抽出",
      },
    ],
  },
  whyChoose: {
    title: "为何选择希玛?",
    img: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-why.avif",
    alt: "为何选择希玛",
    p1: "希玛微笑矫视中心一直致力为客户提供高效、安全的视力矫正方案。作为香港首间获<span>Zeiss蔡司颁发《全飞秒屈光手术 卓越手术中心》</span>认证的矫视中心，希玛在SMILE微笑矫视领域具备领先地位，深受信赖。",
    p2: "中心采用已获<span>美国FDA认证的Carl Zeiss Visumax</span>设备，结合德国蔡司光学技术与创新激光科技。",
    p3: "来自不同行业及身份的SMILE真实用家均表示矫视后效果符合预期，恢复迅速，生活质素显著提升；配合希玛团队<span>全程细心的跟进</span>，亦确保每位真实用家都能安心体验矫视服务。",
  },
  shareTitle: "SMILE用家分享",
  fee: {
    title: "SMILE微笑激光矫视费用",
    items: [
      {
        name: "SMILE<br /><span class=\"\">微笑激光矫视</span>",
        price: "港币$17,500",
      },
      {
        name: "术前检查费用",
        price: "港币$100",
      },
    ],
    btn: "查看矫视费用详情",
    notes: [
      "此为香港价钱，双眼价钱",
      "矫视费用已包括术前检查费用港币$100 (若没有预约进行矫视，需另外缴付术前检查费用)",
    ],
  },
  benefit: {
    title: "SMILE微笑激光矫视的好处",
    list: [
      {
        id: 1,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-1.svg",
        title: "手术简单",
        desc: "无需制造\n角膜瓣",
        active: false,
        row: 1,
      },
      {
        id: 2,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-2.svg",
        title: "术后复原快",
        desc: "最快术后翌日\n生活、工作",
        active: false,
        row: 1,
      },
      {
        id: 3,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-3.svg",
        title: "手术时间短",
        desc: "最快10-15分钟\n完成",
        active: false,
        row: 1,
      },
      {
        id: 4,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-4.svg",
        title: "术后影响少",
        desc: "减低术后眼干及\n感染的可能性",
        active: false,
        row: 2,
      },
      {
        id: 5,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-5.svg",
        title: "微创",
        desc: "伤口只有约\n2-2.5mm",
        active: true,
        row: 2,
      },
      {
        id: 6,
        icon: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-benefit-6.svg",
        title: "效果稳定",
        desc: "视力改善\n显著",
        active: false,
        row: 2,
      },
    ],
  },
  condition: {
    titleHtml: "你适合接受<br /><span class=\"font-en font-bold\">SMILE</span>微笑矫视吗?",
    items: [
      "1,000 度以下近视",
      "500 度以下散光",
      "角膜厚度正常",
      "没有患上眼疾，如青光眼或视网膜疾病",
      "发育成熟，近视度数稳定",
      "非怀孕或哺乳期间",
      "没有患上自身免疫疾病，如风湿性关节炎或红斑狼疮",
      "不需要长期服用类固醇",
      "角膜没受感染，例如发炎或曾受伤",
    ],
    desc1: "如以上条件都与你的情况相符，你已符合进行SMILE微笑矫视的基本条件。",
    desc2: "若不确定，欢迎预约咨询。",
    btn: "预约咨询",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-04)%20SMILE%E7%9F%AF%E8%A6%96%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  xtra: {
    title: "SMILE XTRA角膜胶原交联术",
    subtitle: "Comeal Collagen Cross-Linking",
    tag: "可与SMILE微笑激光矫视同时进行",
    card1TitleHtml: "什么是 <span>SMILE XTRA</span>？",
    card1Text: "透过在角膜局部加入维生素B2，再经紫外线V2照射，使角膜里面的胶原蛋白紧扣，令角膜变得更加坚韧和稳定，降低角膜变形／反弹的可能",
    card2TitleHtml: "我需要接受 <span>SMILE XTRA</span>？",
    card2Text: "如果你的眼晴度数较深、角膜比较薄，希望强化角膜以减低角膜变形及度数反弹的机会，经评估后，医生会作出判断是否需要接受SMILE XTRA角膜胶原交联术",
    btn: "了解更多",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%83%B3%E4%BA%86%E8%A7%A3SMILE%20XTRA%E8%A7%92%E8%86%9C%E8%86%A0%E5%8E%9F%E4%BA%A4%E8%81%AF%E8%A1%93",
  },
  exercise: {
    title: "SMILE微笑矫视前小练习",
    subtitle: "以下为模拟手术提示，矫视前可跟指示多进行注视练习",
    img: "https://static.cmermedical.com.hk/smile/assets/smileV2/smile-round.avif",
    alt: "SMILE微笑矫视前小练习",
    tips: [
      "①双眼同时睁开，注视上图绿点。",
      "②交替遮着左右眼，各边30秒。注意被遮着的眼睛仍需保持睁开。",
    ],
  },
  news: {
    title: "最新情报",
    subtitle: "CATCH UP WITH US",
  },
  faqs: [
    {
      question: "SMILE矫正原理",
      answer: "SMILE微笑矫视是一项突破性的微创矫正技术。本中心的 SMILE 微笑矫视使用Carl Zeiss VisuMax激光最新2.0系统，原理是在不用打开角膜瓣的情况下，以全飞秒激光扫描制作角膜组织膜片，再通过2-2.5mm的小切口把膜片取出，以达到视力矫正的效果。此技术可以为客人矫正近视、散光及老花问题，减低对眼镜的依赖。",
    },
    {
      question: "SMILE矫正步骤",
      answer: "以全飞秒激光直接切割角膜中层，制作一个约2-2.5mm的小切口，将切割了的角膜透镜从切口抽出。",
    },
    {
      question: "为何选择希玛?",
      answer: "希玛微笑矫视中心一直致力为客户提供高效、安全的视力矫正方案。作为香港首间获Zeiss蔡司颁发《全飞秒屈光手术 卓越手术中心》认证的矫视中心，希玛在SMILE微笑矫视领域具备领先地位，深受信赖。中心采用已获美国FDA认证的Carl Zeiss Visumax设备，结合德国蔡司光学技术与创新激光科技。来自不同行业及身份的SMILE真实用家均表示矫视后效果符合预期，恢复迅速，生活质素显著提升；配合希玛团队全程细心的跟进，亦确保每位真实用家都能安心体验矫视服务。",
    },
    {
      question: "SMILE微笑激光矫视的好处",
      answer: "手术简单，无需制造角膜瓣；术后复原快，最快术后翌日生活、工作；手术时间短，最快10-15分钟完成；术后影响少，减低术后眼干及感染的可能性；微创，伤口只有约2-2.5mm；效果稳定，视力改善显著。",
    },
    {
      question: "你适合接受SMILE微笑矫视吗?",
      answer: "1,000 度以下近视；500 度以下散光；角膜厚度正常；没有患上眼疾，如青光眼或视网膜疾病；发育成熟，近视度数稳定；非怀孕或哺乳期间；没有患上自身免疫疾病，如风湿性关节炎或红斑狼疮；不需要长期服用类固醇；角膜没受感染，例如发炎或曾受伤。",
    },
    {
      question: "什么是 SMILE XTRA？",
      answer: "透过在角膜局部加入维生素B2，再经紫外线V2照射，使角膜里面的胶原蛋白紧扣，令角膜变得更加坚韧和稳定，降低角膜变形／反弹的可能。",
    },
    {
      question: "我需要接受 SMILE XTRA？",
      answer: "如果你的眼晴度数较深、角膜比较薄，希望强化角膜以减低角膜变形及度数反弹的机会，经评估后，医生会作出判断是否需要接受SMILE XTRA角膜胶原交联术。",
    },
  ],
};

export { SMILE_SHARE_DATA } from "@/data/videoData";
