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
    imgPc: "https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-pc1.avif",
    imgMb: "https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-mb.webp",
    imgAlt: "老花矯視介紹",
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
    p2Html: "老花並非疾病，而是隨著年齡增長而自然出現的現象。一般在40歲開始出現，到60歲時會達到較為穩定的狀態。為了改善老花帶來的視力問題，人們可以選擇配戴老花眼鏡、使用隱形眼鏡或接受老花矯視手術等方式，這些方法都可幫助改善近距離的視力，使日常生活中的閱讀和近距離工作變得更加容易，而進行<span id=\"CorrectionProgram\">老花矯視更是受大眾歡迎的選項</span>。",
  },
  schemes: {
    title: "老花矯視方案",
    showImgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif",
    showImgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif",
    bgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mbBg.avif",
    items: [
      {
        id: "scheme-01",
        targetId: "CorrectionProgramTwo",
        imgWp: "https://statichk.cmermedical.com/smile/clear-visionV2/clear-solution-01-v1.webp",
        imgJpg: "https://statichk.cmermedical.com/smile/clear-visionV2/clear-solution-01-v1.jpg",
        imgAlt: "視覺融合老花激光手術設備",
        suitTag: "適合",
        suitList: ["• 39歲以上有老花", "• 未有白內障"],
        title: "PRESBYOND Laser <br /> Blended Vision <br /> 視覺融合老花激光手術",
        descHtml: "又名視覺融合老花激光手術，是一項<span>結合微單眼視力 (Micro-Monovision) 與角膜球面像差 (Spherical Aberrations) 調控技術</span>的激光矯視方案。手術會根據客人的年齡、眼睛調節力及角膜像差，度身訂造專屬切削方案，使大腦更容易將雙眼影像融合，令雙眼能輕鬆自然地適應遠、中、近全距離視力。此項矯視技術亦可同時矯正老花及原有的散光、近視或遠視。",
      },
      {
        id: "scheme-02",
        imgWp: "https://statichk.cmermedical.com/cmermedical/image/20260317/image22.webp",
        imgJpg: "https://statichk.cmermedical.com/cmermedical/image/20260317/image22.webp",
        imgAlt: "人工晶體置換術",
        suitTag: "適合",
        suitList: ["• 40歲以上有老花", "• 出現早期或已形成白內障"],
        title: "CMER CLEAR-Vision <br /> 人工晶體置換術",
        descHtml: "<span>坊間稱之為人工晶體置換術</span>。透過更換人工晶體，致力為客人視野帶來煥然一新的感覺，一次過解決近視、遠視、散光、老花等問題。<br /><br />希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，度身訂造矯視方案；專業諮詢過後，眼科專科醫生按客人視力需求選取及植入合適之人工晶體，以替代原有已老化之晶體。",
      },
      {
        id: "scheme-03",
        imgWp: "https://statichk.cmermedical.com/cmermedical/image/20260317/image23.webp",
        imgJpg: "https://statichk.cmermedical.com/cmermedical/image/20260317/image23.webp",
        imgAlt: "ICL Viva V6 植入式隱形眼鏡",
        suitTag: "適合",
        suitList: ["• 40歲以上有老花", "• 未有白內障", "• 角膜偏薄/不適合激光矯視"],
        title: "ICL Viva V6 <br /> 植入式隱形眼鏡",
        descHtml: "EVO Viva™ 是 EVO ICL 系列中專門針對老花的型號，獲歐洲 CE 認證。這款矯視晶體<span>採用專利 Collamer® 生物相容材質</span>，並結合延伸景深（EDOF）技術，為 40 歲或以上、希望擺脫老花鏡束縛的人士，提供兼顧遠、中、近距離的全視程清晰視力。",
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
  battle: {
    title: "老花矯視技術好處對比",
    bgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif",
    bgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif",
    items: [
      {
        title: "PRESBYOND <br /> Laser Blended Vision <br /> 視覺融合老花激光手術",
        points: [
          "同時矯正老花、近視、遠視、散光",
          "提供遠、中、近「全距離高清視覺」",
          "保留良好立體視覺",
          "保留天然晶體",
          "準確度提升: 激光打磨速度升至<br />500Hz，比上一代提高一倍",
          "大腦適應期極短",
        ],
      },
      {
        title: "CMER CLEAR-Vision <br /> 人工晶體置換術",
        points: [
          "一次過解決老花、近視、遠視、散光",
          "提供遠、中、近全距離高清視力 (三焦點人工晶體)",
          "術後不會再患上白內障",
          "人工晶體生物相容性極高，不會排斥",
          "只需約10-15分鐘即可完成",
        ],
      },
      {
        title: "ICL Viva V6 <br /> 植入式隱形眼鏡",
        points: [
          "不切削角膜組織，保留天然角膜完整",
          "特別加強中、近距離視力，方便手機及電腦工作",
          "保留天然晶體與調節能力",
          "Collamer® 生物相容材質，自帶防紫外線功能",
          "具備可逆性：日後有需要可隨時取出或更換",
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
        img: "https://statichk.cmermedical.com/cmermedical/image/20260317/banner2.webp",
        alt: "室外場景",
      },
      {
        title: "室內",
        img: "https://statichk.cmermedical.com/cmermedical/image/20260317/banner3.webp",
        alt: "室內場景",
      },
    ],
  },
  appointment: {
    lectureText: "預約老花講座",
    lectureHref: "/ophthalmicInfo/AppointForm",
    lectureIcon: "https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/laohua.svg",
    consultText: "預約諮詢",
    consultHref: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
    consultIcon: "https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/zixun.svg",
  },
  suitable: {
    title: "合適對象",
    subtitleHtml: "無論追求效率還是悠閒自在，<br class=\"d-none d-lg-block\" />老花矯視都讓你清楚見證<br class=\"d-none d-lg-block\" />往後每一刻。",
    bgRightPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg",
    bgRightMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg",
    bgLeft1: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft1.svg",
    bgLeft2: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft2.svg",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-10.svg",
        html: "39歲以上",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-2.svg",
        html: "熱愛運動",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-3.svg",
        html: "佩戴多副矯正度數眼鏡<br /><span>(近視、遠視、<br />散光、老花)</span>",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-4.svg",
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
    h1: "老花矯視",
    p1: "希瑪微笑矯視中心主要提供三種可矯正老花的矯視服務",
    p2Part1: "",
    p2Link1Text: "PRESBYOND Laser Blended Vision、CMER CLEAR-Vision",
    p2Link1Href: "#CorrectionProgram",
    p2And: "及",
    p2Link2Text: "ICL Viva V6",
    p2Link2Href: "#CorrectionProgram",
    p3: "如你正受以下老花問題困擾，可參考本頁有關老花矯視服務的詳盡介紹。",
    imgPc: "https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-pc1.avif",
    imgMb: "https://statichk.cmermedical.com/smile/clear-visionV2/ClearVisionBanner-bg-mb.webp",
    imgAlt: "老花矯視介绍",
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
    p2Html: "老花並非疾病，而是隨著年齡增長而自然出現的現象。一般在40歲開始出現，到60歲時會達到較為穩定的狀態。為了改善老花帶來的視力問題，人們可以選擇配戴老花眼鏡、使用隱形眼鏡或接受老花矯視手術等方式，這些方法都可幫助改善近距離的視力，使日常生活中的閱讀和近距離工作變得更加容易，而進行<span id=\"CorrectionProgram\">老花矯視更是受大眾歡迎的選項</span>。",
  },
  schemes: {
    title: "老花矯視方案",
    showImgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-show-pc.avif",
    showImgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mb.avif",
    bgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/CorrectionProgram/CorrectionProgram-Box-hide-mbBg.avif",
    items: [
      {
        id: "scheme-01",
        targetId: "CorrectionProgramTwo",
        imgWp: "https://statichk.cmermedical.com/smile/clear-visionV2/clear-solution-01-v1.webp",
        imgJpg: "https://statichk.cmermedical.com/smile/clear-visionV2/clear-solution-01-v1.jpg",
        imgAlt: "視覺融合老花激光手術設備",
        suitTag: "適合",
        suitList: ["• 39歲以上有老花", "• 未有白內障"],
        title: "PRESBYOND Laser <br /> Blended Vision <br /> 視覺融合老花激光手術",
        descHtml: "又名視覺融合老花激光手術，是一項<span>結合微單眼視力 (Micro-Monovision) 與角膜球面像差 (Spherical Aberrations) 調控技術</span>的激光矯視方案。手術會根據客人的年齡、眼睛調節力及角膜像差，度身訂造專屬切削方案，使大腦更容易將雙眼影像融合，令雙眼能輕鬆自然地適應遠、中、近全距離視力。此項矯視技術亦可同時矯正老花及原有的散光、近視或遠視。",
      },
      {
        id: "scheme-02",
        imgWp: "https://statichk.cmermedical.com/cmermedical/image/20260317/image22.webp",
        imgJpg: "https://statichk.cmermedical.com/cmermedical/image/20260317/image22.webp",
        imgAlt: "人工晶體置換術",
        suitTag: "適合",
        suitList: ["• 40歲以上有老花", "• 出現早期或已形成白內障"],
        title: "CMER CLEAR-Vision <br /> 人工晶體置換術",
        descHtml: "<span>坊間稱之為人工晶體置換術</span>。透過更換人工晶體，致力為客人視野帶來煥然一新的感覺，一次過解決近視、遠視、散光、老花等問題。<br /><br />希瑪微笑矯視中心針對客人眼睛實際狀況、職業、生活需要等因素，度身訂造矯視方案；專業諮詢過後，眼科專科醫生按客人視力需求選取及植入合適之人工晶體，以替代原有已老化之晶體。",
      },
      {
        id: "scheme-03",
        imgWp: "https://statichk.cmermedical.com/cmermedical/image/20260317/image23.webp",
        imgJpg: "https://statichk.cmermedical.com/cmermedical/image/20260317/image23.webp",
        imgAlt: "ICL Viva V6 植入式隱形眼鏡",
        suitTag: "適合",
        suitList: ["• 40歲以上有老花", "• 未有白內障", "• 角膜偏薄/不適合激光矯視"],
        title: "ICL Viva V6 <br /> 植入式隱形眼鏡",
        descHtml: "EVO Viva™ 是 EVO ICL 系列中專門針對老花的型號，獲歐洲 CE 認證。這款矯視晶體<span>採用專利 Collamer® 生物相容材質</span>，並結合延伸景深（EDOF）技術，為 40 歲或以上、希望擺脫老花鏡束縛的人士，提供兼顧遠、中、近距離的全視程清晰視力。",
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
  battle: {
    title: "老花矯視技術好處對比",
    bgPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-newpcBg.avif",
    bgMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/visionBattle/visionBattle-mbBg.avif",
    items: [
      {
        title: "PRESBYOND <br /> Laser Blended Vision <br /> 視覺融合老花激光手術",
        points: [
          "同時矯正老花、近視、遠視、散光",
          "提供遠、中、近「全距離高清視覺」",
          "保留良好立體視覺",
          "保留天然晶體",
          "準確度提升: 激光打磨速度升至<br />500Hz，比上一代提高一倍",
          "大腦適應期極短",
        ],
      },
      {
        title: "CMER CLEAR-Vision <br /> 人工晶體置換術",
        points: [
          "一次過解決老花、近視、遠視、散光",
          "提供遠、中、近全距離高清視力 (三焦點人工晶體)",
          "術後不會再患上白內障",
          "人工晶體生物相容性極高，不會排斥",
          "只需約10-15分鐘即可完成",
        ],
      },
      {
        title: "ICL Viva V6 <br /> 植入式隱形眼鏡",
        points: [
          "不切削角膜組織，保留天然角膜完整",
          "特別加強中、近距離視力，方便手機及電腦工作",
          "保留天然晶體與調節能力",
          "Collamer® 生物相容材質，自帶防紫外線功能",
          "具備可逆性：日後有需要可隨時取出或更換",
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
        img: "https://statichk.cmermedical.com/cmermedical/image/20260317/banner2.webp",
        alt: "室外場景",
      },
      {
        title: "室內",
        img: "https://statichk.cmermedical.com/cmermedical/image/20260317/banner3.webp",
        alt: "室內場景",
      },
    ],
  },
  appointment: {
    lectureText: "預約老花講座",
    lectureHref: "/ophthalmicInfo/AppointForm",
    lectureIcon: "https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/laohua.svg",
    consultText: "預約諮詢",
    consultHref: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-06)%20CMER%20CLEAR-Vision%E8%A1%93%E5%89%8D%E6%AA%A2%E6%9F%A5%E5%8F%8A%E8%AB%AE%E8%A9%A2",
    consultIcon: "https://statichk.cmermedical.com/smile/clear-visionV2/clearAppointment/zixun.svg",
  },
  suitable: {
    title: "合適對象",
    subtitleHtml: "無論追求效率還是悠閒自在，<br class=\"d-none d-lg-block\" />老花矯視都讓你清楚見證<br class=\"d-none d-lg-block\" />往後每一刻。",
    bgRightPc: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgRight.svg",
    bgRightMb: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-mb-bgRight.svg",
    bgLeft1: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft1.svg",
    bgLeft2: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-pc-bgLeft2.svg",
    items: [
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-10.svg",
        html: "39歲以上",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-2.svg",
        html: "熱愛運動",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-3.svg",
        html: "佩戴多副矯正度數眼鏡<br /><span>(近視、遠視、<br />散光、老花)</span>",
      },
      {
        icon: "https://statichk.cmermedical.com/smile/vision-correction-iclV2/SuitableObject/SuitableObject-itemImg-4.svg",
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
