/*
 * @FilePath: /src/data/flowOfVisionCorrectionData.ts
 * @Description: 矯視流程專頁真值數據字典 (100% 精確對齊舊站 pages/flow-of-vision-correction/index.vue 及 Notice/techProcess 組件)
 */

export interface FlowStepItem {
  img: string;
  textHtml: string;
}

export interface RegardItem {
  img: string;
  textHtml: string;
  imgClass?: string;
}

export interface RegardBox {
  title: string;
  items: RegardItem[];
}

export interface FlowOfVisionCorrectionData {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    bgDesktop: string;
    bgMobile: string;
  };
  process: {
    title: string;
    intro: string;
    steps: FlowStepItem[];
  };
  regard: {
    title: string;
    topCards: RegardBox[];
    bottomCard: RegardBox;
  };
  cta: {
    whatsappUrl: string;
    icon: string;
    label: string;
    phone: string;
  };
}

export const FLOW_ZH_HK: FlowOfVisionCorrectionData = {
  breadcrumb: {
    home: "主頁",
    current: "矯視流程",
  },
  banner: {
    title: "矯視流程",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/03/f749408bdb90b101.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/03/8a339705a6d7abed.jpg",
  },
  process: {
    title: "矯視流程",
    intro:
      "經過詳細的眼睛檢查和診症，醫護人員會告知客人是否適合矯視，才進行矯視程序。",
    steps: [
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/06d8dc6309843ceb.png",
        textHtml: "屈光檢查",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/720c63a2c77fa1fd.png",
        textHtml: "術前準備",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/8783c894fe4331d9.png",
        textHtml: "預約翌日覆診",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/02280dc75fddbd20.png",
        textHtml: "矯視療程",
      },
    ],
  },
  regard: {
    title: "注意事項",
    topCards: [
      {
        title: "矯視前",
        items: [
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/5281757b67f8c8b9.png",
            textHtml: "預先洗頭<br />避免術後雙眼入水",
            imgClass: "ml-3",
          },
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/be6d0ef7eff09012.png",
            textHtml: "穿著寬鬆、開扣的襯衫<br />避免術後換衣服會觸碰雙眼",
          },
        ],
      },
      {
        title: "請勿使用",
        items: [
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/57500ed5756e8c2b.png",
            textHtml: "眼部化妝品",
          },
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/5b456df938a879c8.png",
            textHtml: "任何香水、香薰或<br />揮發性用品",
          },
        ],
      },
    ],
    bottomCard: {
      title: "矯視過程中",
      items: [
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/0db6827e5b69e9fb.png",
          textHtml: "不要郁動和說話",
          imgClass: "ml-3",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/8ef325fa917c3496.png",
          textHtml: "放鬆心情，不要緊張",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/368b6b768066c0eb.png",
          textHtml: "請遵照醫生指示",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/eb4f9240aa44c41f.png",
          textHtml: "建議由親友陪同",
        },
      ],
    },
  },
  cta: {
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即預約/查詢",
    phone: "6940 8569",
  },
};

export const FLOW_ZH_CN: FlowOfVisionCorrectionData = {
  breadcrumb: {
    home: "主页",
    current: "矫视流程",
  },
  banner: {
    title: "矫视流程",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/03/f749408bdb90b101.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/03/8a339705a6d7abed.jpg",
  },
  process: {
    title: "矫视流程",
    intro:
      "经过详细的眼睛检查和诊症，医护人员会告知客人是否适合矫视，才进行矫视程序。",
    steps: [
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/06d8dc6309843ceb.png",
        textHtml: "屈光检查",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/720c63a2c77fa1fd.png",
        textHtml: "术前准备",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/8783c894fe4331d9.png",
        textHtml: "预约翌日覆诊",
      },
      {
        img: "https://statichk.cmermedical.com/imgs/2022/12/02280dc75fddbd20.png",
        textHtml: "矫视疗程",
      },
    ],
  },
  regard: {
    title: "注意事项",
    topCards: [
      {
        title: "矫视前",
        items: [
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/5281757b67f8c8b9.png",
            textHtml: "预先洗头<br />避免术后双眼入水",
            imgClass: "ml-3",
          },
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/be6d0ef7eff09012.png",
            textHtml: "穿着宽松、开扣的衬衫<br />避免术后换衣服会触碰双眼",
          },
        ],
      },
      {
        title: "请勿使用",
        items: [
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/57500ed5756e8c2b.png",
            textHtml: "眼部化妆品",
          },
          {
            img: "https://statichk.cmermedical.com/imgs/2022/12/5b456df938a879c8.png",
            textHtml: "任何香水、香薰或<br />挥发性用品",
          },
        ],
      },
    ],
    bottomCard: {
      title: "矫视过程中",
      items: [
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/0db6827e5b69e9fb.png",
          textHtml: "不要郁动和说话",
          imgClass: "ml-3",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/8ef325fa917c3496.png",
          textHtml: "放松心情，不要紧张",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/368b6b768066c0eb.png",
          textHtml: "请遵照医生指示",
        },
        {
          img: "https://statichk.cmermedical.com/imgs/2022/12/eb4f9240aa44c41f.png",
          textHtml: "建议由亲友陪同",
        },
      ],
    },
  },
  cta: {
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即预约/查询",
    phone: "6940 8569",
  },
};
