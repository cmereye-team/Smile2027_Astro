/*
 * @Author: Antigravity AI
 * @Date: 2026-11-11
 * @FilePath: /src/data/patientInfoData.ts
 * @Description: 診症須知專頁真值數據字典 (100% 精確對齊線上官網 https://smile.hkcmereye.com/patient-info 與 /cn/patient-info)
 */

export interface PatientInfoTab {
  label: string;
  id: "beforeJiaoShi" | "inJiaoShi" | "afterJiaoShi";
}

export interface PreCorrectionStep {
  img: string;
  textHtml: string;
  icon: string;
}

export interface NoticeCard {
  title: string;
  extraClass?: string;
  items: Array<{
    img: string;
    textHtml: string;
  }>;
}

export interface FollowUpItem {
  img: string;
  alt: string;
  label: string;
  note?: string;
}

export interface CareCard {
  title: string;
  groups: Array<{
    titleHtml: string;
    items: Array<{
      num: string;
      text: string;
    }>;
  }>;
}

export interface PatientInfoData {
  banner: {
    imgPc: string;
    imgMb: string;
    tagHtml: string;
    title: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
  tabs: PatientInfoTab[];
  checkEye: {
    title: string;
    subtitleHtml: string;
    dateLabel: string;
    images: string[];
  };
  correctedVisionBefore: {
    icon: string;
    iframeTitle: string;
    iframeSrc: string;
    processTitle: string;
    steps: PreCorrectionStep[];
    lineImg: string;
    suitable: {
      unsuitableTitle: string;
      unsuitableDesc: string;
      suitableTitle: string;
      suitableDesc: string;
    };
    cta: {
      text: string;
      whatsappUrl: string;
    };
    notes: {
      title: string;
      items: Array<{
        num: string;
        html: string;
      }>;
    };
  };
  visionProcess: {
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      labelHtml: string;
    }>;
    noticeIcon: string;
    noticeTitle: string;
    cards: NoticeCard[];
  };
  afterJiaoShi: {
    title: string;
    followUpItems: FollowUpItem[];
    noteTitle: string;
    noteText: string;
    careVideoTitle: string;
    careVideoSrc: string;
    careIcon: string;
    careTitle: string;
    careCards: CareCard[];
    emergencyNote: string;
  };
}

const PATIENT_INFO_VERBATIM: PatientInfoData = {
  banner: {
    imgPc: "https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerPc.avif",
    imgMb: "https://statichk.cmermedical.com/smile/patient-info/patient-info-BannerMb.avif",
    tagHtml: "Information<br />\n        Notes",
    title: "診症須知",
  },
  breadcrumb: {
    home: "主頁",
    current: "診症須知",
  },
  tabs: [
    { label: "矯視前", id: "beforeJiaoShi" },
    { label: "矯視流程", id: "inJiaoShi" },
    { label: "矯視後", id: "afterJiaoShi" },
  ],
  checkEye: {
    title: "眼睛檢查及矯視前",
    subtitleHtml:
      '由於隱形眼鏡有機會把角膜擠壓，令量度出來的數據不準確，<br class="d-none d-lg-block" />故進行眼睛檢查及矯視前，請提前停止佩戴。',
    dateLabel: "以下為不同隱形眼鏡的停止佩戴日數：",
    images: [
      "https://statichk.cmermedical.com/smile/patient-info/check-eye-list1.png",
      "https://statichk.cmermedical.com/smile/patient-info/check-eye-list2.png",
      "https://statichk.cmermedical.com/smile/patient-info/check-eye-list3.png",
      "https://statichk.cmermedical.com/smile/patient-info/check-eye-list4.png",
    ],
  },
  correctedVisionBefore: {
    icon: "https://statichk.cmermedical.com/smile/patient-info/LightBulb.svg",
    iframeTitle: "矯視前停con知多啲",
    iframeSrc: "https://www.youtube.com/embed/chqX2VLCqio?si=EMeTCDqYcPEMdsrL",
    processTitle: "矯視前檢查流程",
    steps: [
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img1.svg",
        textHtml: "前台登記及<br />初步眼睛檢查",
        icon: "https://statichk.cmermedical.com/smile/patient-info/01.png",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img2.svg",
        textHtml: "詳細屈光檢查",
        icon: "https://statichk.cmermedical.com/smile/patient-info/02.png",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img4.svg",
        textHtml: "全面眼底檢查",
        icon: "https://statichk.cmermedical.com/smile/patient-info/04.png",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-Process-img3.svg",
        textHtml: "散曈",
        icon: "https://statichk.cmermedical.com/smile/patient-info/03.png",
      },
    ],
    lineImg: "https://statichk.cmermedical.com/smile/patient-info/CorrectedVisionBefore-line.png",
    suitable: {
      unsuitableTitle: "不合適",
      unsuitableDesc: "應盡快接受相關治療",
      suitableTitle: "合適",
      suitableDesc: "預約第二次檢查及同日矯視",
    },
    cta: {
      text: "預約矯視前檢查",
      whatsappUrl:
        "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-16)%E7%9F%AF%E8%A6%96%E5%89%8D%E6%AA%A2%E6%9F%A5",
    },
    notes: {
      title: "備註:",
      items: [
        {
          num: "1.",
          html: "基本檢查包括：屈光檢查、電腦驗光、 眼壓、角膜厚度等",
        },
        {
          num: "2.",
          html: "SMILE/ SMILE Pro 2.0微笑激光矯視的詳細眼底檢查包括：淚水分泌測試、瞳孔測量、角膜地形掃描及像差、雙眼內皮細胞分析、散瞳眼底檢查、光學相干斷層掃描(如需要)、掃描激光眼底檢查(如需要); ICL植入式隱形眼鏡的眼底檢查額外包括: 內皮細胞的密度測量及眼科超聲生物顯微鏡",
        },
        {
          num: "3.",
          html: "散瞳/ 放大瞳孔後：<br />·觀看近物時視野變得模糊<br />·有輕微畏光情況，可帶備太陽眼鏡<br />·切勿駕駛<br /><b>·放大瞳孔的效果一般會在4至6小時後消失</b>",
        },
      ],
    },
  },
  visionProcess: {
    title: "矯視流程",
    subtitle:
      "經過詳細的眼睛檢查和診症，醫護人員會告知客人是否適合矯視，才進行矯視程序。",
    steps: [
      { step: "Step 1", labelHtml: "屈光檢查" },
      { step: "Step 2", labelHtml: "術前準備" },
      { step: "Step 3", labelHtml: "預約翌日覆診" },
      { step: "Step 4", labelHtml: "取藥及講解術後<br />藥水用法" },
      { step: "Step 5", labelHtml: "矯視療程" },
    ],
    noticeIcon: "https://statichk.cmermedical.com/smile/patient-info/yellowWarning.svg",
    noticeTitle: "矯視當日注意事項",
    cards: [
      {
        title: "矯視前",
        items: [
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item1-1.avif",
            textHtml: "預先洗頭<br />避免術後雙眼入水",
          },
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item1-2.avif",
            textHtml: "穿著寬鬆、開扣的<br />衣服,避免術後換衣服<br />會觸碰雙眼",
          },
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item1-3.avif",
            textHtml: "建議矯視當日由親友陪同",
          },
        ],
      },
      {
        title: "矯視過程中",
        extraClass: "visionProcess-Notice-Card-section2",
        items: [
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item2-1.avif",
            textHtml: "不要郁動和說話",
          },
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item2-2.avif",
            textHtml: "請遵照醫生指示",
          },
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item2-3.avif",
            textHtml: "放鬆心情，不要緊張",
          },
        ],
      },
      {
        title: "請勿使用",
        extraClass: "visionProcess-Notice-Card-section3",
        items: [
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item3-1.avif",
            textHtml: "眼部化妝品",
          },
          {
            img: "https://statichk.cmermedical.com/smile/patient-info/Notice-item3-2.avif",
            textHtml: "任何香水、香薰或<br />揮發性用品",
          },
        ],
      },
    ],
  },
  afterJiaoShi: {
    title: "矯視後覆診",
    followUpItems: [
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/section-last-img1.avif",
        alt: "翌日",
        label: "翌日",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/section-last-img2.avif",
        alt: "一星期",
        label: "一星期",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/section-last-img3.avif",
        alt: "一個月",
        label: "一個月",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/section-last-img4.avif",
        alt: "三個月 ",
        label: "三個月",
      },
      {
        img: "https://statichk.cmermedical.com/smile/patient-info/section-last-img5.avif",
        alt: "六個月",
        label: "六個月",
        note: "（或按醫生之需要覆診指示）",
      },
    ],
    noteTitle: "備註：",
    noteText:
      "已包含的覆診次數因不同矯視服務及不同矯視套餐而有所不同，詳情可參考收費詳情頁或聯絡查詢",
    careVideoTitle: "矯視後護理及注意事項",
    careVideoSrc: "https://www.youtube.com/embed/xqyN2Scg_OA?si=ZCNws4P2XJgDv2EM",
    careIcon: "https://statichk.cmermedical.com/smile/patient-info/section-last-3-title.avif",
    careTitle: "矯視後護理",
    careCards: [
      {
        title: "完成SMILE/SMILE Pro 2.0矯視後",
        groups: [
          {
            titleHtml: "矯視後<span>當天內</span>",
            items: [
              {
                num: "1",
                text: "矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少",
              },
              {
                num: "2",
                text: "按醫生指示定時服藥或滴眼藥水，維持四星期",
              },
              {
                num: "3",
                text: "避免揉擦眼睛",
              },
            ],
          },
          {
            titleHtml: "矯視後<span>一星期內</span>",
            items: [
              {
                num: "1",
                text: "避免使用眼部化妝品",
              },
            ],
          },
          {
            titleHtml: "矯視後<span>兩星期內</span>",
            items: [
              {
                num: "1",
                text: "避免梘水、自來水或污水進入眼睛",
              },
            ],
          },
          {
            titleHtml: "矯視後<span>一個月內</span>",
            items: [
              {
                num: "1",
                text: "如有需要可配戴太陽眼鏡以防止紫外線的刺激或沙塵入眼",
              },
              {
                num: "2",
                text: "不可進行水上活動或浸熱水浴",
              },
              {
                num: "3",
                text: "不可進行碰撞性運動，如足球、籃球等",
              },
            ],
          },
        ],
      },
      {
        title: "完成ICL矯視後",
        groups: [
          {
            titleHtml: "矯視後<span>當天內</span>",
            items: [
              {
                num: "1",
                text: "矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少",
              },
              {
                num: "2",
                text: "避免梘水、自來水或污水進入眼睛",
              },
              {
                num: "3",
                text: "按醫生指示定時服藥或滴眼藥水",
              },
              {
                num: "4",
                text: "避免揉擦眼睛",
              },
            ],
          },
          {
            titleHtml: "矯視後<span>一星期內</span>",
            items: [
              {
                num: "1",
                text: "避免使用眼部化妝品",
              },
              {
                num: "2",
                text: "睡覺時可佩戴眼罩(如有需要)",
              },
            ],
          },
          {
            titleHtml: "矯視後<span>一個月內</span>",
            items: [
              {
                num: "1",
                text: "不可游泳或進行劇烈運動",
              },
              {
                num: "2",
                text: "外出時可配戴太陽眼鏡(如有需要)",
              },
            ],
          },
        ],
      },
    ],
    emergencyNote: "*任何時候若眼睛突然出現劇痛或視力明顯下降等情況，必須盡快求醫。",
  },
};

export const PATIENT_INFO_ZH_HK: PatientInfoData = PATIENT_INFO_VERBATIM;

// 線上 /cn/patient-info 頁面可見文案與繁體線上完全一致，保留逐字真值對齊
export const PATIENT_INFO_ZH_CN: PatientInfoData = PATIENT_INFO_VERBATIM;
