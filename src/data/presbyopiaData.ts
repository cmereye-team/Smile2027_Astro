/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/presbyopiaData.ts
 * @Description: 老花矯視專頁數據字典 (100% 官方真值對齊 + 繁簡雙語支援)
 */

export interface PresbyopiaSchemeItem {
  id?: string;
  targetId?: string;
  imgWp?: string;
  imgJpg?: string;
  imgAlt?: string;
  suitTag?: string;
  suitList?: string[];
  title: string;
  descHtml?: string;
  isSimple?: boolean;
}

export interface PresbyopiaBattleItem {
  title: string;
  points: string[];
}

export interface PresbyopiaModelTable {
  title: string;
  projectHeader: string;
  modelHeader: string;
  rangeLabel: string;
  rangeContent: string;
  techLabel: string;
  techContent: string;
  materialLabel: string;
  materialContent: string;
  audienceLabel: string;
  audienceContent: string;
  nightLabel: string;
  nightContent: string;
  reversibilityLabel: string;
  reversibilityContent: string;
}

export interface PresbyopiaComparisonCol {
  title: string;
  bgClass: string;
}

export interface PresbyopiaComparisonRow {
  label: string;
  col1Html: string;
  col2Html: string;
  col3Html: string;
  isBadgeRow?: boolean;
  col1Badge?: { success: boolean; text?: string };
  col2Badge?: { success: boolean; text?: string };
  col3Badge?: { success: boolean; text?: string };
}

export interface PresbyopiaSlide {
  title: string;
  img: string;
  alt: string;
}

export interface PresbyopiaSuitItem {
  icon: string;
  html: string;
}

export interface PresbyopiaFaqItem {
  id: string;
  qNum: string;
  question: string;
  answer: string;
}

export interface PresbyopiaFeeItem {
  title: string;
  prices: string[];
  note1?: string;
  note2?: string;
}

export interface PresbyopiaFeeGroup {
  pillTitle: string;
  items: PresbyopiaFeeItem[];
}

export interface PresbyopiaFeeSection {
  title: string;
  groups: PresbyopiaFeeGroup[];
  btnText: string;
  btnLink: string;
  footnotes: string[];
}

export interface PresbyopiaData {
  breadcrumb: {
    home: string;
    service: string;
    current: string;
  };
  banner: {
    smallTag: string;
    smallTagLink: string;
    h1: string;
    p1: string;
    p2Part1: string;
    p2Link1Text: string;
    p2Link1Href: string;
    p2And: string;
    p2Link2Text: string;
    p2Link2Href: string;
    p3: string;
    imgPc: string;
    imgMb: string;
    imgAlt: string;
    badgeSpan1: string;
    badgeSpan2: string;
    tags: string[];
  };
  whatIs: {
    title: string;
    p1Html: string;
    p2Html: string;
  };
  schemes: {
    title: string;
    showImgPc: string;
    showImgMb: string;
    bgMb: string;
    items: PresbyopiaSchemeItem[];
    ctaBtnText: string;
    whatsappUrl: string;
  };
  fee: PresbyopiaFeeSection;
  battle: {
    title: string;
    bgPc: string;
    bgMb: string;
    items: PresbyopiaBattleItem[];
  };
  modelTable: PresbyopiaModelTable;
  comparison: {
    title: string;
    columns: PresbyopiaComparisonCol[];
    rows: PresbyopiaComparisonRow[];
  };
  preview: {
    title: string;
    slides: PresbyopiaSlide[];
  };
  appointment: {
    lectureText: string;
    lectureHref: string;
    lectureIcon: string;
    consultText: string;
    consultHref: string;
    consultIcon: string;
  };
  suitable: {
    title: string;
    subtitleHtml: string;
    bgRightPc: string;
    bgRightMb: string;
    bgLeft1: string;
    bgLeft2: string;
    items: PresbyopiaSuitItem[];
    feeBtnText: string;
    feeBtnHref: string;
  };
  faq: {
    title: string;
    items: PresbyopiaFaqItem[];
  };
  share: {
    title: string;
  };
}

export const PRESBYOPIA_ZH_HK: PresbyopiaData = {
  breadcrumb: {
    home: "首頁",
    service: "矯視服務",
    current: "老花矯視",
  },
  banner: {
    smallTag: "Presbyopia Treatments",
    smallTagLink: "#CorrectionProgram",
    h1: "老花矯視",
    p1: "希瑪微笑矯視中心主要提供三種可矯正老花的矯視服務",
    p2Part1: "",
    p2Link1Text: "PRESBYOND Laser Blended Vision、CMER CLEAR-Vision",
    p2Link1Href: "#CorrectionProgram",
    p2And: "及",
    p2Link2Text: "ICL Viva V6",
    p2Link2Href: "#CorrectionProgram",
    p3: "如你正受以下老花問題困擾，可參考本頁有關老花矯視服務的詳盡介紹。",
    imgPc: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/ClearVisionBanner-bg-pc1.avif",
    imgMb: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/ClearVisionBanner-bg-mb.webp",
    imgAlt: "香港希瑪微笑矯視中心 - 老花矯視服務、症狀與方案介紹",
    badgeSpan1: "<i>「</i>6<i>」</i>字同<i>「</i> 8<i>」</i>字",
    badgeSpan2: "不能夠一眼分清？",
    tags: [
      "頻繁眨眼/搓眼睛以嘗試改善焦點",
      "難以看清電子屏幕細小文字",
      "需將物件拉遠才能看清",
      "老花眼鏡難以配合穿搭",
      "工作時不便戴老花眼鏡",
    ],
  },
  whatIs: {
    title: "什麼是老花？",
    p1Html: "隨著年紀增長，人們可能會遇到老花的問題，這是一種影響近視力的視力狀況。由於在眼睛中的晶狀體彈性降低，使眼睛調節焦距的能力下降，導致<span>看近處物體時會出現視覺模糊</span>。",
    p2Html: "老花並非疾病，而是隨著年齡增長而自然出現的現象。一般在40歲開始出現，到60歲時會達到較為穩定的狀態。為了改善老花帶來的視力問題，人們可以選擇配戴老花眼鏡、使用隱形眼鏡或接受老花矯視手術等方式，這些方法都可幫助改善近距離的視力，使日常生活中的閱讀和近距離工作變得更加容易，而進行<span>老花矯視更是受大眾歡迎的選項</span>。",
  },
  schemes: {
    title: "老花矯視方案",
    showImgPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif",
    showImgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif",
    bgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mbBg.avif",
    items: [
      {
        id: "scheme-01",
        targetId: "CorrectionProgramTwo",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clear-solution-01-v1.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clear-solution-01-v1.jpg",
        imgAlt: "PRESBYOND LBV 视觉融合老花激光手术设备 - 蔡司 MEL 90",
        suitTag: "適合",
        suitList: ["• 39歲以上有老花", "• 未有白內障"],
        title: "PRESBYOND Laser <br /> Blended Vision <br /> 視覺融合老花激光手術",
        descHtml: "又名視覺融合老花激光手術，是一項個性化的<span>全距離視力</span>老花矯視方案；透過結合Zeiss蔡司系統及準分子激光技術<span>矯正老花、近視、遠視、散光</span>。希瑪更使用蔡司最新技術進行，縮短激光打磨所需時間，準確度更高。",
      },
      {
        id: "scheme-02",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image22.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image22.webp",
        imgAlt: "CMER CLEAR-Vision 人工晶体置换术 - 白内障与老花矫正人工晶体",
        suitTag: "適合",
        suitList: ["• 39歲以上有老花", "• 同時有近視/遠視/散光問題"],
        title: "CMER CLEAR-Vision <br />人工晶體置換術",
        descHtml: "坊間稱之為<span>人工晶體置換術</span>。透過更換人工晶體，致力為客人視野帶來煥然一新的感覺，<span>一次過解決近視、遠視、散光、老花</span>等問題。希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，度身訂造矯視方案；諮詢過後，眼科專科醫生按客人視力需求選取及植入合適之人工晶體，以替代原有已老化和混濁的晶體。",
      },
      {
        id: "scheme-03",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image23.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image23.webp",
        imgAlt: "ICL Viva V6 延展景深 EDoF 植入式隐形眼镜老花矫视",
        suitTag: "適合",
        suitList: ["• 39歲或以上有老花", "• 1,000度以下近視", "• 未有白內障"],
        title: "ICL Viva V6<br />植入式隱形眼鏡",
        descHtml: "是有晶體眼後房型植入式隱形眼鏡植入手術的一種，而ICL Viva (ICL V6) 則是一種<span>擴展景深</span>，專為矯正老花而設的<span>植入式隱形眼鏡，適合未有白內障</span>，而正受近視及老花困擾的人士。",
      },
      {
        isSimple: true,
        title: "Monovision <br /> (SMILE/SMILE Pro/LASIK/PRK)<br /> 單眼視力矯正術",
      },
      {
        isSimple: true,
        title: "Cataract Surgery <br /> 白內障手術",
      },
      {
        isSimple: true,
        title: "藥物方案（暫時性）",
      },
    ],
    ctaBtnText: "預約諮詢合適矯視方案",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  fee: {
    title: "老花矯視費用",
    groups: [
      {
        pillTitle: "人工晶體費用",
        items: [
          {
            title: "單焦點人工晶體(單眼)<br />不帶散光",
            prices: ["港幣$25,000-", "港幣$28,000"],
          },
          {
            title: "單焦點人工晶體(單眼)<br />帶散光",
            prices: ["港幣$30,000-", "港幣$35,000"],
          },
          {
            title: "EDOF /多焦點人工晶體<br />(單眼)不帶散光",
            prices: ["港幣$35,000-", "港幣$45,000"],
          },
          {
            title: "EDOF /多焦點人工晶體<br />(單眼)帶散光",
            prices: ["港幣$43,000-", "港幣$51,000"],
          },
          {
            title: "術前檢查費用",
            prices: ["港幣$680"],
          },
        ],
      },
      {
        pillTitle: "Presbyond LBV費用",
        items: [
          {
            title: "Presbyond LBV<br class=\"block sm:hidden\" />（雙眼）",
            prices: ["港幣$48,000*"],
            note1: "指定信用卡（東亞/渣打/滙豐）<br class=\"block sm:hidden\" />可享6/12/18/24/36個月免息分期",
            note2: "EPS用戶港幣$47,500<sup>#</sup>",
          },
          {
            title: "術前檢查費用",
            prices: ["港幣$100"],
          },
        ],
      },
      {
        pillTitle: "ICL Viva V6費用",
        items: [
          {
            title: "ICL Viva V6（雙眼）",
            prices: ["港幣$80,000"],
          },
          {
            title: "術前檢查費用",
            prices: ["港幣$500"],
          },
        ],
      },
    ],
    btnText: "查看矯視費用詳情",
    btnLink: "/fee#table1",
    footnotes: [
      "此為香港價錢",
      "矯視費用已包括術前檢查費用港幣$100（若沒有預約進行矯視，需另外繳付術前檢查費用）",
      "免責聲明：受條款及細則約束。優惠僅適用於以 EPS 全數支付之客戶。如有任何爭議，希瑪眼科將保留最終決定權。",
    ],
  },
  battle: {
    title: "老花矯視技術好處對比",
    bgPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif",
    bgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif",
    items: [
      {
        title: "PRESBYOND <br /> Laser Blended Vision <br /> 視覺融合老花激光手術",
        points: [
          "同時矯正老花、近視、遠視、散光",
          "提供遠、中、近「全距離高清視覺」",
          "保留良好立體視覺",
          "保留天然晶體",
          "準確度提升: 激光打磨速度升至<br />500Hz，比上一代提高一倍",
          "根據個人眼睛實際狀況和生活需要，度<br />身訂造治療方案",
          "將來進行白內障手術亦不影響效果",
        ],
      },
      {
        title: "CMER CLEAR-Vision <br /> 人工晶體置換術",
        points: [
          "不需依賴眼鏡/隱形眼鏡",
          "同時矯正老花及深近視",
          "晶體物料具生物兼容性",
          "預防白內障 ",
          "根據個人眼睛實際狀況和生活需要，<br />度身訂造治療方案",
          "術後復原快: 最快術後一天可如常生活或工作",
          "手術時間短: 大約15至20分鐘完成",
          "有不同人工晶體可供選擇，包括多焦距人工<br />晶體、單焦距人工晶體、散光多焦距人工<br class=\"hidden md:block\" />晶體等",
        ],
      },
      {
        title: "ICL Viva V6 <br /> 植入式隱形眼鏡",
        points: [
          "不需依賴眼鏡/隱形眼鏡",
          "同時矯正老花及1800度近視",
          "無須切削角膜，不會導致乾眼症",
          "有需要可逆轉",
        ],
      },
    ],
  },
  modelTable: {
    title: "EVO ICL 產品系列介紹 — V6",
    projectHeader: "項目",
    modelHeader: "V6",
    rangeLabel: "矯正範圍",
    rangeContent: "近視50-1000度/散光 ≤ 300度<span class=\"hidden lg:inline\">&nbsp;</span><br class=\"block md:hidden\" />附加：老花矯視",
    techLabel: "核心技術",
    techContent: "EDoF 延展景深技術",
    materialLabel: "材質",
    materialContent: "Collamer®生物相容材質納米抗沉積塗層",
    audienceLabel: "適用人群",
    audienceContent: "40 歲以上需同時處理近視與老花",
    nightLabel: "夜間視覺",
    nightContent: "顯著提升夜間視覺，減少眩光與光暈干擾",
    reversibilityLabel: "可逆性",
    reversibilityContent: "可逆轉，可按需取出晶體",
  },
  comparison: {
    title: "LBV/CLEAR-Vision/ICL Viva V6<br class=\"d-lg-none\" /> 大不同",
    columns: [
      {
        title: "PRESB<br class=\"d-lg-none\" /> YOND <br class=\"d-lg-none\" /> LBV<br />視覺融合<br class=\"d-lg-none\" />老花激光<br class=\"d-lg-none\" />手術",
        bgClass: "bg-e5f9ff",
      },
      {
        title: "CMER <br class=\"d-lg-none\" /> CLEAR<br class=\"d-lg-none\" /> Vision<br /> 人工晶體<br class=\"d-lg-none\" /> 置換術<br class=\"d-lg-none\" />",
        bgClass: "bg-f8eeff",
      },
      {
        title: "ICL Viva<br class=\"d-lg-none\" /> V6<br />植入式<br class=\"d-lg-none\" />隱形眼鏡",
        bgClass: "bg-e8fdf4",
      },
    ],
    rows: [
      {
        label: "技術<br class=\"d-lg-none\" />類型",
        col1Html: "準分子激光 + <br /> 全飛秒激光<br class=\"d-lg-none\" />混合式老花<br class=\"d-lg-none\" />矯視<br />(Laser<br class=\"d-lg-none\" /> Blended<br class=\"d-lg-none\" /> Vision)",
        col2Html: "人工<br class=\"d-lg-none\" />晶體置換",
        col3Html: "植入式延伸<br class=\"d-lg-none\" />景深(EDOF)<br /> 隱形眼鏡<br class=\"d-lg-none\" />(非激光)",
      },
      {
        label: "可矯正<br class=\"d-lg-none\" />範圍",
        col1Html: "主要針對老花<br class=\"d-lg-none\" />+近視1,200度/<br />遠視600度<br class=\"d-lg-none\" />/散光500度",
        col2Html: "主要針對<br class=\"d-lg-none\" />老花 + <br class=\"hidden md:block\" /> 近視/<br class=\"d-lg-none\" />遠視/散光",
        col3Html: "主要針對矯正<br />1,000度以下<br class=\"block sm:hidden\" />近視",
      },
      {
        label: "保留<br class=\"d-lg-none\" />天然晶體?",
        isBadgeRow: true,
        col1Badge: { success: true, text: "保留" },
        col2Badge: { success: false, text: "不保留" },
        col3Badge: { success: true, text: "保留" },
        col1Html: "",
        col2Html: "",
        col3Html: "",
      },
      {
        label: "視力效果",
        col1Html: "提供遠、<br class=\"d-lg-none\" />中、近<br /> 「全距離高<br class=\"d-lg-none\" />清視覺」<br /> <span class=\"text-[#73CE93] font-black\">保留良好立<br class=\"d-lg-none\" />體視覺</span>",
        col2Html: "視乎人工晶體<br class=\"d-lg-none\" />選擇, <br class=\"hidden md:block\" /> 單焦距<br class=\"d-lg-none\" />人工晶體用<br class=\"d-lg-none\" />Mono-Vision<br class=\"d-lg-none\" />方式能提供遠/<br class=\"d-lg-none\" />近距離高清<br class=\"d-lg-none\" />視力; <br class=\"hidden md:block\" /> 多焦距或<br class=\"d-lg-none\" />延伸景深的<br class=\"d-lg-none\" />人工晶體則能<br class=\"d-lg-none\" />提供遠/中/近<br class=\"d-lg-none\" />距離高清視力",
        col3Html: "提供遠/中/近<br class=\"d-lg-none\" />距離高清視力，<br /> 特別加強中近<br class=\"d-lg-none\" />距離 EDOF 視力",
      },
      {
        label: "可逆轉?",
        isBadgeRow: true,
        col1Badge: { success: false },
        col2Badge: { success: false },
        col3Badge: { success: true, text: "可逆轉（晶體可取出）" },
        col1Html: "",
        col2Html: "",
        col3Html: "",
      },
    ],
  },
  preview: {
    title: "第一視角預覽",
    slides: [
      {
        title: "室外",
        img: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/banner2.webp",
        alt: "老花矯視術後室外遠中近全距離視力效果模擬預覽",
      },
      {
        title: "室內",
        img: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/banner3.webp",
        alt: "老花矯視術後室內閱讀與辦公視力效果模擬預覽",
      },
    ],
  },
  appointment: {
    lectureText: "預約老花講座",
    lectureHref: "/ophthalmicInfo/AppointForm",
    lectureIcon: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clearAppointment/laohua.svg",
    consultText: "預約諮詢",
    consultHref: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
    consultIcon: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clearAppointment/zixun.svg",
  },
  suitable: {
    title: "合適對象",
    subtitleHtml: "無論追求效率還是悠閒自在，<br class=\"d-none d-lg-block\" />老花矯視都讓你清楚見證<br class=\"d-none d-lg-block\" />往後每一刻。",
    bgRightPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg",
    bgRightMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg",
    bgLeft1: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft1.svg",
    bgLeft2: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft2.svg",
    items: [
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-10.svg",
        html: "39歲以上",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-2.svg",
        html: "熱愛運動",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-3.svg",
        html: "佩戴多副矯正度數眼鏡<br /><span>(近視、遠視、<br />散光、老花)</span>",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-4.svg",
        html: "不愛佩戴眼鏡<br />或隱形眼鏡",
      },
    ],
    feeBtnText: "了解老花矯視價格",
    feeBtnHref: "/fee",
  },
  faq: {
    title: "常見問題",
    items: [
      {
        id: "collapseOne",
        qNum: "Q1",
        question: "如何判斷哪種老花矯視方式適合我？",
        answer: "醫生會為你進行全面的檢查與溝通，來評估何種老花矯視是否適合你。",
      },
      {
        id: "collapseTwo",
        qNum: "Q2",
        question: "有近視就不會出現老花？",
        answer: "老花是眼睛機能衰退的自然現象，由於眼睛晶體逐漸硬化及眼內肌肉老化令晶體的變焦功能衰退所致，令人看近物時難以聚焦，模糊視野。一般人約在40至50歲左右就會開始出現老花症狀，故有近視的人也會有老花。",
      },
      {
        id: "collapseThree",
        qNum: "Q3",
        question: "何時做三焦晶體植入術比較好？",
        answer: "三焦晶體主要用於40至50歲老花眼人群。如客人覺得老花眼已經影響正常生活或閱讀，需配戴老花眼鏡，此時，三焦晶體便是矯正遠中近視力的不錯選擇。而最合適自己的老花矯視方案，還是需由醫生進行全面檢查後制定。",
      },
      {
        id: "collapseFour",
        qNum: "Q4",
        question: "老花等於遠視嗎？",
        answer: "在光學上，老花是遠視的一種，但它們的成因不同。遠視主要成因是眼球過短，令景物聚焦了在視網膜後面。至於老花，則是由於晶體退化變硬，失去彈性及連繫著晶狀體的韌帶老化，令晶體的偏置功能下降，使看近物時難以聚焦，出現模糊感。",
      },
      {
        id: "collapseFive",
        qNum: "Q5",
        question: "老花可以預防嗎？",
        answer: "現時尚未有有效的方法去防止其出現或惡化，但保持良好的用眼習慣有助減輕老花的徵狀和所造成的困擾。",
      },
      {
        id: "collapseSix",
        qNum: "Q6",
        question: "術後視力多久可以恢復？",
        answer: "治療完成後第二天你就可以獲得良好的近距離視力，不戴老花鏡也可以輕鬆閱讀。中、遠距離的視力恢復通常在術後一週達到。之後經過數周，你的視力將會進一步改善，並逐步適應多焦視覺狀態。",
      },
    ],
  },
  share: {
    title: "同朋友分享一下啦！",
  },
};

export const PRESBYOPIA_ZH_CN: PresbyopiaData = {
  breadcrumb: {
    home: "首页",
    service: "矫视服务",
    current: "老花矫视",
  },
  banner: {
    smallTag: "Presbyopia Treatments",
    smallTagLink: "#CorrectionProgram",
    h1: "老花矫视",
    p1: "希玛微笑矫视中心主要提供三种可矫正老花的矫视服务",
    p2Part1: "",
    p2Link1Text: "PRESBYOND Laser Blended Vision、CMER CLEAR-Vision",
    p2Link1Href: "#CorrectionProgram",
    p2And: "及",
    p2Link2Text: "ICL Viva V6",
    p2Link2Href: "#CorrectionProgram",
    p3: "如你正受以下老花问题困扰，可参考本页有关老花矫视服务的详尽介绍。",
    imgPc: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/ClearVisionBanner-bg-pc1.avif",
    imgMb: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/ClearVisionBanner-bg-mb.webp",
    imgAlt: "香港希玛微笑矫视中心 - 老花矫视服务、症状与方案介绍",
    badgeSpan1: "<i>「</i>6<i>」</i>字同<i>「</i> 8<i>」</i>字",
    badgeSpan2: "不能够一眼分清？",
    tags: [
      "频繁眨眼/搓眼睛以尝试改善焦点",
      "难以看清电子屏幕细小文字",
      "需将物件拉远才能看清",
      "老花眼镜难以配合穿搭",
      "工作时不便戴老花眼镜",
    ],
  },
  whatIs: {
    title: "什么是老花？",
    p1Html: "随着年纪增长，人们可能会遇到老花的问题，这是一种影响近视力的视力状况。由于在眼睛中的晶状体弹性降低，使眼睛调节焦距的能力下降，导致<span>看近处物体时会出现视觉模糊</span>。",
    p2Html: "老花并非疾病，而是随着年龄增长而自然出现的现象。一般在40岁开始出现，到60岁时会达到较为稳定的状态。为了改善老花带来的视力问题，人们可以选择配戴老花眼镜、使用隐形眼镜或接受老花矫视手术等方式，这些方法都可帮助改善近距离的视力，使日常生活中的阅读和近距离工作变得更加容易，而进行<span>老花矫视更是受大众欢迎的选项</span>。",
  },
  schemes: {
    title: "老花矫视方案",
    showImgPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif",
    showImgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif",
    bgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mbBg.avif",
    items: [
      {
        id: "scheme-01",
        targetId: "CorrectionProgramTwo",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clear-solution-01-v1.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clear-solution-01-v1.jpg",
        imgAlt: "PRESBYOND LBV 视觉融合老花激光手术设备 - 蔡司 MEL 90",
        suitTag: "适合",
        suitList: ["• 39岁以上有老花", "• 未有白内障"],
        title: "PRESBYOND Laser <br /> Blended Vision <br /> 视觉融合老花激光手术",
        descHtml: "又名视觉融合老花激光手术，是一项个性化的<span>全距离视力</span>老花矫视方案；透过结合Zeiss蔡司系统及准分子激光技术<span>矫正老花、近视、远视、散光</span>。希玛更使用蔡司最新技术进行，缩短激光打磨所需时间，准确度更高。",
      },
      {
        id: "scheme-02",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image22.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image22.webp",
        imgAlt: "CMER CLEAR-Vision 人工晶体置换术 - 白内障与老花矫正人工晶体",
        suitTag: "适合",
        suitList: ["• 39岁以上有老花", "• 同时有近视/远视/散光问题"],
        title: "CMER CLEAR-Vision <br />人工晶体置换术",
        descHtml: "坊间称之为<span>人工晶体置换术</span>。透过更换人工晶体，致力为客人视野带来焕然一新的感觉，<span>一次过解决近视、远视、散光、老花</span>等问题。希玛微笑矫视中心针对客人眼睛实际状况、职业、生活需要等因素，量身订造矫视方案；咨询过后，眼科专科医生按客人视力需求选取及植入合适之人工晶体，以替代原有已老化和混浊的晶体。",
      },
      {
        id: "scheme-03",
        imgWp: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image23.webp",
        imgJpg: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/image23.webp",
        imgAlt: "ICL Viva V6 延展景深 EDoF 植入式隐形眼镜老花矫视",
        suitTag: "适合",
        suitList: ["• 39岁或以上有老花", "• 1,000度以下近视", "• 未有白内障"],
        title: "ICL Viva V6<br />植入式隐形眼镜",
        descHtml: "是有晶体眼后房型植入式隐形眼镜植入手术的一种，而ICL Viva (ICL V6) 则是一种<span>扩展景深</span>，专为矫正老花而设的<span>植入式隐形眼镜，适合未有白内障</span>，而正受近视及老花困扰的人士。",
      },
      {
        isSimple: true,
        title: "Monovision <br /> (SMILE/SMILE Pro/LASIK/PRK)<br /> 单眼视力矫正术",
      },
      {
        isSimple: true,
        title: "Cataract Surgery <br /> 白内障手术",
      },
      {
        isSimple: true,
        title: "药物方案（暂时性）",
      },
    ],
    ctaBtnText: "预约咨询合适矫视方案",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
  },
  fee: {
    title: "老花矫视费用",
    groups: [
      {
        pillTitle: "人工晶体费用",
        items: [
          {
            title: "单焦点人工晶体(单眼)<br />不带散光",
            prices: ["港币$25,000-", "港币$28,000"],
          },
          {
            title: "单焦点人工晶体(单眼)<br />带散光",
            prices: ["港币$30,000-", "港币$35,000"],
          },
          {
            title: "EDOF /多焦点人工晶体<br />(单眼)不带散光",
            prices: ["港币$35,000-", "港币$45,000"],
          },
          {
            title: "EDOF /多焦点人工晶体<br />(单眼)带散光",
            prices: ["港币$43,000-", "港币$51,000"],
          },
          {
            title: "术前检查费用",
            prices: ["港币$680"],
          },
        ],
      },
      {
        pillTitle: "Presbyond LBV费用",
        items: [
          {
            title: "Presbyond LBV<br class=\"block sm:hidden\" />（双眼）",
            prices: ["港币$48,000*"],
            note1: "指定信用卡（东亚/渣打/汇丰）<br class=\"block sm:hidden\" />可享6/12/18/24/36个月免息分期",
            note2: "EPS用户港币$47,500<sup>#</sup>",
          },
          {
            title: "术前检查费用",
            prices: ["港币$100"],
          },
        ],
      },
      {
        pillTitle: "ICL Viva V6费用",
        items: [
          {
            title: "ICL Viva V6（双眼）",
            prices: ["港币$80,000"],
          },
          {
            title: "术前检查费用",
            prices: ["港币$500"],
          },
        ],
      },
    ],
    btnText: "查看矫视费用详情",
    btnLink: "/cn/fee/#table1",
    footnotes: [
      "此为香港价钱",
      "矫视费用已包括术前检查费用港币$100（若没有预约进行矫视，需另外缴付术前检查费用）",
      "免责声明：受条款及细则约束。优惠仅适用于以 EPS 全数支付之客户。如有任何争议，希玛眼科将保留最终决定权。",
    ],
  },
  battle: {
    title: "老花矫视技术好处对比",
    bgPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif",
    bgMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif",
    items: [
      {
        title: "PRESBYOND <br /> Laser Blended Vision <br /> 视觉融合老花激光手术",
        points: [
          "同时矫正老花、近视、远视、散光",
          "提供远、中、近「全距离高清视觉」",
          "保留良好立体视觉",
          "保留天然晶体",
          "准确度提升: 激光打磨速度升至<br />500Hz，比上一代提高一倍",
          "根据个人眼睛实际状况和生活需要，量<br />身订造治疗方案",
          "将来进行白内障手术亦不影响效果",
        ],
      },
      {
        title: "CMER CLEAR-Vision <br /> 人工晶体置换术",
        points: [
          "不需依赖眼镜/隐形眼镜",
          "同时矫正老花及深近视",
          "晶体物料具生物兼容性",
          "预防白内障 ",
          "根据个人眼睛实际状况和生活需要，<br />量身订造治疗方案",
          "术后复原快: 最快术后一天可如常生活或工作",
          "手术时间短: 大约15至20分钟完成",
          "有不同人工晶体可供选择，包括多焦距人工<br />晶体、单焦距人工晶体、散光多焦距人工<br class=\"hidden md:block\" />晶体等",
        ],
      },
      {
        title: "ICL Viva V6 <br /> 植入式隐形眼镜",
        points: [
          "不需依赖眼镜/隐形眼镜",
          "同时矫正老花及1800度近视",
          "无须切削角膜，不会导致干眼症",
          "有需要可逆转",
        ],
      },
    ],
  },
  modelTable: {
    title: "EVO ICL 产品系列介绍 — V6",
    projectHeader: "项目",
    modelHeader: "V6",
    rangeLabel: "矫正范围",
    rangeContent: "近视50-1000度/散光 ≤ 300度<span class=\"hidden lg:inline\">&nbsp;</span><br class=\"block md:hidden\" />附加：老花矫正",
    techLabel: "核心技术",
    techContent: "EDoF 延展景深技术",
    materialLabel: "材质",
    materialContent: "Collamer®生物相容材质纳米抗积涂层",
    audienceLabel: "适用人群",
    audienceContent: "40 岁以上需同时处理近视与老花",
    nightLabel: "夜间视觉",
    nightContent: "显著提升夜间视觉，减少眩光与光晕干扰",
    reversibilityLabel: "可逆性",
    reversibilityContent: "可逆转，可按需取出晶体",
  },
  comparison: {
    title: "LBV/CLEAR-Vision/ICL Viva V6<br class=\"d-lg-none\" /> 大不同",
    columns: [
      {
        title: "PRESB<br class=\"d-lg-none\" /> YOND <br class=\"d-lg-none\" /> LBV<br />视觉融合<br class=\"d-lg-none\" />老花激光<br class=\"d-lg-none\" />手术",
        bgClass: "bg-e5f9ff",
      },
      {
        title: "CMER <br class=\"d-lg-none\" /> CLEAR<br class=\"d-lg-none\" /> Vision<br /> 人工晶体<br class=\"d-lg-none\" /> 置换术<br class=\"d-lg-none\" />",
        bgClass: "bg-f8eeff",
      },
      {
        title: "ICL Viva<br class=\"d-lg-none\" /> V6<br />植入式<br class=\"d-lg-none\" />隐形眼镜",
        bgClass: "bg-e8fdf4",
      },
    ],
    rows: [
      {
        label: "技术<br class=\"d-lg-none\" />类型",
        col1Html: "准分子激光 + <br /> 全飞秒激光<br class=\"d-lg-none\" />混合式老花<br class=\"d-lg-none\" />矫视<br />(Laser<br class=\"d-lg-none\" /> Blended<br class=\"d-lg-none\" /> Vision)",
        col2Html: "人工<br class=\"d-lg-none\" />晶体置换",
        col3Html: "植入式延伸<br class=\"d-lg-none\" />景深(EDOF)<br /> 隐形眼镜<br class=\"d-lg-none\" />(非激光)",
      },
      {
        label: "可矫正<br class=\"d-lg-none\" />范围",
        col1Html: "主要针对老花<br class=\"d-lg-none\" />+近视1,200度/<br />远视600度<br class=\"d-lg-none\" />/散光500度",
        col2Html: "主要针对<br class=\"d-lg-none\" />老花 + <br class=\"hidden md:block\" /> 近视/<br class=\"d-lg-none\" />远视/散光",
        col3Html: "主要针对矫正<br />1,000度以下<br class=\"block sm:hidden\" />近视",
      },
      {
        label: "保留<br class=\"d-lg-none\" />天然晶体?",
        isBadgeRow: true,
        col1Badge: { success: true, text: "保留" },
        col2Badge: { success: false, text: "不保留" },
        col3Badge: { success: true, text: "保留" },
        col1Html: "",
        col2Html: "",
        col3Html: "",
      },
      {
        label: "视力效果",
        col1Html: "提供远、<br class=\"d-lg-none\" />中、近<br /> 「全距离高<br class=\"d-lg-none\" />清视觉」<br /> <span class=\"text-[#73CE93] font-black\">保留良好立<br class=\"d-lg-none\" />体视觉</span>",
        col2Html: "视乎人工晶体<br class=\"d-lg-none\" />选择, <br class=\"hidden md:block\" /> 单焦距<br class=\"d-lg-none\" />人工晶体用<br class=\"d-lg-none\" />Mono-Vision<br class=\"d-lg-none\" />方式能提供远/<br class=\"d-lg-none\" />近距离高清<br class=\"d-lg-none\" />视力; <br class=\"hidden md:block\" /> 多焦距或<br class=\"d-lg-none\" />延伸景深的<br class=\"d-lg-none\" />人工晶体则能<br class=\"d-lg-none\" />提供远/中/近<br class=\"d-lg-none\" />距离高清视力",
        col3Html: "提供远/中/近<br class=\"d-lg-none\" />距离高清视力，<br /> 特别加强中近<br class=\"d-lg-none\" />距离 EDOF 视力",
      },
      {
        label: "可逆转?",
        isBadgeRow: true,
        col1Badge: { success: false },
        col2Badge: { success: false },
        col3Badge: { success: true, text: "可逆转（晶体可取出）" },
        col1Html: "",
        col2Html: "",
        col3Html: "",
      },
    ],
  },
  preview: {
    title: "第一视角预览",
    slides: [
      {
        title: "室外",
        img: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/banner2.webp",
        alt: "老花矫视术后室外远中近全距离视力效果模拟预览",
      },
      {
        title: "室内",
        img: "https://static.cmermedical.com.hk/smile/assets/cmermedical/image/20260317/banner3.webp",
        alt: "老花矫视术后室内阅读与办公视力效果模拟预览",
      },
    ],
  },
  appointment: {
    lectureText: "预约老花讲座",
    lectureHref: "/cn/ophthalmicInfo/AppointForm/",
    lectureIcon: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clearAppointment/laohua.svg",
    consultText: "预约咨询",
    consultHref: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
    consultIcon: "https://static.cmermedical.com.hk/smile/assets/clear-visionV2/clearAppointment/zixun.svg",
  },
  suitable: {
    title: "合适对象",
    subtitleHtml: "无论追求效率还是悠闲自在，<br class=\"d-none d-lg-block\" />老花矫视都让你清楚见证<br class=\"d-none d-lg-block\" />往后每一刻。",
    bgRightPc: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg",
    bgRightMb: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg",
    bgLeft1: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft1.svg",
    bgLeft2: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft2.svg",
    items: [
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-10.svg",
        html: "39岁以上",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-2.svg",
        html: "热爱运动",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-3.svg",
        html: "佩戴多副矫正度数眼镜<br /><span>(近视、远视、<br />散光、老花)</span>",
      },
      {
        icon: "https://static.cmermedical.com.hk/smile/assets/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-4.svg",
        html: "不爱佩戴眼镜<br />或隐形眼镜",
      },
    ],
    feeBtnText: "了解老花矫视价格",
    feeBtnHref: "/cn/fee/",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        id: "collapseOne",
        qNum: "Q1",
        question: "如何判断哪种老花矫视方式适合我？",
        answer: "医生会为你进行全面的检查与沟通，来评估何种老花矫视是否适合你。",
      },
      {
        id: "collapseTwo",
        qNum: "Q2",
        question: "有近视就不会出现老花？",
        answer: "老花是眼睛机能衰退的自然现象，由于眼睛晶体逐渐硬化及眼内肌肉老化令晶体的变焦功能衰退所致，令人看近物时难以聚焦，模糊视野。一般人约在40至50岁左右就会开始出现老花症状，故有近视的人也会有老花。",
      },
      {
        id: "collapseThree",
        qNum: "Q3",
        question: "何时做三焦晶体植入术比较好？",
        answer: "三焦晶体主要用于40至50岁老花眼人群。如客人觉得老花眼已经影响正常生活或阅读，需配戴老花眼镜，此时，三焦晶体便是矫正远中近视力的不错选择。而最合适自己的老花矫视方案，还是需由医生进行全面检查后制定。",
      },
      {
        id: "collapseFour",
        qNum: "Q4",
        question: "老花等于远视吗？",
        answer: "在光学上，老花是远视的一种，但它们的成因不同。远视主要成因是眼球过短，令景物聚焦了在视网膜后面。至于老花，则是由于晶体退化变硬，失去弹性及连系着晶状体的韧带老化，令晶体的偏置功能下降，使看近物时难以聚焦，出现模糊感。",
      },
      {
        id: "collapseFive",
        qNum: "Q5",
        question: "老花可以预防吗？",
        answer: "现时尚未有有效的方法去防止其出现或恶化，但保持良好的用眼习惯有助减轻老花的症状和所造成的困扰。",
      },
      {
        id: "collapseSix",
        qNum: "Q6",
        question: "术后视力多久可以恢复？",
        answer: "治疗完成后第二天你就可以获得良好的近距离视力，不戴老花镜也可以轻松阅读。中、远距离的视力恢复通常在术后一周达到。之后经过数周，你的视力将会进一步改善，并逐步适应多焦视觉状态。",
      },
    ],
  },
  share: {
    title: "同朋友分享一下啦！",
  },
};
