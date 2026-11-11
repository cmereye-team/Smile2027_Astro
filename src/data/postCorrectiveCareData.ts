/*
 * @FilePath: /src/data/postCorrectiveCareData.ts
 * @Description: 術後護理專頁真值數據字典 (100% 精確對齊舊站 pages/post-corrective-care/index.vue 及 Notice/Followdiag 組件)
 */

export interface FollowUpStep {
  key: "one" | "two" | "three" | "four" | "five";
  labelHtml: string;
}

export interface PostCorrectiveCareData {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    bgDesktop: string;
    bgMobile: string;
  };
  followUp: {
    title: string;
    steps: FollowUpStep[];
  };
  precautions: {
    videoTitle: string;
    videoSrc: string;
    videoIframeTitle: string;
    careTitle: string;
    detailHtml: string;
  };
  cta: {
    whatsappUrl: string;
    icon: string;
    label: string;
    phone: string;
  };
}

export const POST_CARE_ZH_HK: PostCorrectiveCareData = {
  breadcrumb: {
    home: "主頁",
    current: "術後護理",
  },
  banner: {
    title: "矯視後覆診",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/04/8f47623cd90f0a16.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/04/8fa6057ae84f4a7d.jpg",
  },
  followUp: {
    title: "矯視後覆診",
    steps: [
      { key: "one", labelHtml: "翌日" },
      { key: "two", labelHtml: "一星期" },
      { key: "three", labelHtml: "一個月" },
      { key: "four", labelHtml: "三個月" },
      {
        key: "five",
        labelHtml: "六個月<br />（或按醫生之需要覆診指示）",
      },
    ],
  },
  precautions: {
    videoTitle: "視後護理及注意事項",
    videoSrc: "https://www.youtube.com/embed/xqyN2Scg_OA",
    videoIframeTitle: "矯視後護理及注意事項💡💡💡",
    careTitle: "矯視後護理",
    detailHtml: `<strong>矯視後當天內：</strong>
      <p>
        ·矯視後流眼水或少許異物感等不適是正常現象，不適感覺在兩至三小時後逐漸減少。
      </p>
      <p>·按醫生指示定時服藥或滴眼藥水，維持四星期。</p>
      <p>·避免揉擦眼睛</p>
      <br />
      <strong>矯視後一星期內：</strong>
      <p>·避免梘水、自來水或污水進入眼睛</p>
      <p>·避免使用眼部化妝品</p>
      <br />
      <strong>矯視後一個月內：</strong>
      <p>如有需要可配戴太陽眼鏡以防止紫外線的刺激或沙塵入眼</p>
      <p>不可進行水上活動或浸熱水浴</p>
      <p>不可進行碰撞性運動，如足球、籃球等</p>
      <br />
      <p>*任何時候若眼睛突然出現劇痛或視力明顯下降等情況，必須盡快求醫。</p>`,
  },
  cta: {
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即預約/查詢",
    phone: "6940 8569",
  },
};

export const POST_CARE_ZH_CN: PostCorrectiveCareData = {
  breadcrumb: {
    home: "主页",
    current: "术后护理",
  },
  banner: {
    title: "矫视后覆诊",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/04/8f47623cd90f0a16.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/04/8fa6057ae84f4a7d.jpg",
  },
  followUp: {
    title: "矫视后覆诊",
    steps: [
      { key: "one", labelHtml: "翌日" },
      { key: "two", labelHtml: "一星期" },
      { key: "three", labelHtml: "一个月" },
      { key: "four", labelHtml: "三个月" },
      {
        key: "five",
        labelHtml: "六个月<br />（或按医生之需要覆诊指示）",
      },
    ],
  },
  precautions: {
    videoTitle: "视后护理及注意事项",
    videoSrc: "https://www.youtube.com/embed/xqyN2Scg_OA",
    videoIframeTitle: "矯視後護理及注意事項💡💡💡",
    careTitle: "矫视后护理",
    detailHtml: `<strong>矫视后当天内：</strong>
      <p>
        ·矫视后流眼水或少许异物感等不适是正常现象，不适感觉在两至三小时后逐渐减少。
      </p>
      <p>·按医生指示定时服药或滴眼药水，维持四星期。</p>
      <p>·避免揉擦眼睛</p>
      <br />
      <strong>矫视后一星期内：</strong>
      <p>·避免枧水、自来水或污水进入眼睛</p>
      <p>·避免使用眼部化妆品</p>
      <br />
      <strong>矫视后一个月内：</strong>
      <p>如有需要可配戴太阳眼镜以防止紫外线的刺激或沙尘入眼</p>
      <p>不可进行水上活动或浸热水浴</p>
      <p>不可进行碰撞性运动，如足球、篮球等</p>
      <br />
      <p>*任何时候若眼睛突然出现剧痛或视力明显下降等情况，必须尽快求医。</p>`,
  },
  cta: {
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即预约/查询",
    phone: "6940 8569",
  },
};
