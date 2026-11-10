/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/feeData.ts
 * @Description: 收費詳情頁面數據字典 (100% 官方真值對齊 + 繁簡雙語 + W-14 追蹤)
 */

export interface FeeData {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    category: string;
    title: string;
    tip: string;
  };
  table1: {
    originNote: string;
    headers: {
      pro1Care: string;
      pro1: string;
      pro2Care: string;
      pro2: string;
      iclV4c: string;
      iclV5: string;
      smile: string;
      lasik: string;
    };
    rows: {
      priceTitle: string;
      pro1CarePrice: string;
      pro1Price: string;
      pro2CarePrice: string;
      pro2Price: string;
      iclV4cPrice: string;
      iclV5Price: string;
      smilePrice: string;
      lasikPrice: string;
      examTitle: string;
      examPrice100: string;
      examPrice500: string;
      hydrationTitle: string;
      hydrationTimes: string;
      iplTitle: string;
      iplTimes: string;
      doctorExamTitle: string;
      followupTitle: string;
      followupDoctorNote: string;
      followupTimes5: string;
      followupTimes3: string;
      followupTimes6Icl: string;
      enhancementTitle: string;
      optometryTitle: string;
      smileXtraTitle: string;
      singleEye: string;
      bothEyes: string;
      xtraSinglePrice: string;
      xtraBothPrice: string;
    };
  };
  table2: {
    title: string;
    cmerClear: {
      title: string;
      noAstigmatism: string;
      withAstigmatism: string;
      singleFocalTitle: string;
      singleFocalPriceNoAst: string;
      singleFocalPriceAst: string;
      multiFocalTitle: string;
      multiFocalPriceNoAst: string;
      multiFocalPriceAst: string;
      examTitle: string;
      examPrice: string;
    };
    lbv: {
      title: string;
      priceTitle: string;
      priceStandard: string;
      priceEps: string;
      examTitle: string;
      examPrice: string;
      hydrationTitle: string;
      hydrationTimes: string;
      iplTitle: string;
      iplTimes: string;
      doctorExamTitle: string;
      followupTitle: string;
      followupDoctorNote: string;
      followupTimes: string;
      enhancementTitle: string;
      optometryTitle: string;
    };
    iclViva: {
      title: string;
      priceTitle: string;
      price: string;
      examTitle: string;
      examPrice: string;
    };
  };
  cta: {
    btnText: string;
    whatsappUrl: string;
  };
  footnotes: {
    text1: string;
    text2: string;
    text2_1: string;
    text2_2: string;
    text2_3: string;
    text3: string;
    text3_1: string;
    text3_2: string;
    text3_3: string;
    text3_4: string;
    text3_5: string;
    text3_6: string;
    text3_7: string;
    text4: string;
    text5: string;
    text6: string;
  };
}

export const FEE_ZH_HK: FeeData = {
  breadcrumb: {
    home: "主頁",
    current: "收費詳情",
  },
  banner: {
    category: "PRICE",
    title: "收費詳情",
    tip: "本診所絕無其他額外收費",
  },
  table1: {
    originNote: "此為<br class=\"d-lg-none\" />香港價錢",
    headers: {
      pro1Care: "<span>SMILE Pro 1.0</span><br /><span>Care</span><br />微笑激光<br class=\"d-lg-none\" />矯視",
      pro1: "<span>SMILE </span><br class=\"d-lg-none\" /><span>Pro 1.0</span><br />微笑激光<br class=\"d-lg-none\" />矯視",
      pro2Care: "<span>SMILE Pro 2.0</span><br /><span>Care</span><br />微笑激光<br class=\"d-lg-none\" />矯視",
      pro2: "<span>SMILE </span><br class=\"block lg:hidden\" /><span>Pro 2.0</span><br />微笑激光<br class=\"d-lg-none\" />矯視",
      iclV4c: "<span>ICL V4C</span><br />植入式<br class=\"d-lg-none\" />隱形<br class=\"hidden lg:block\" />眼鏡",
      iclV5: "<span>ICL V5</span><br />植入式<br class=\"d-lg-none\" />隱形<br class=\"hidden lg:block\" />眼鏡",
      smile: "<span>SMILE</span><br />微笑激光<br class=\"d-lg-none\" />矯視",
      lasik: "<span>LASIK</span><br class=\"d-lg-none\" />激光矯視/<br /><span>TPRK</span><br class=\"d-lg-none\" />經上皮<br class=\"d-lg-none\" />激光<br class=\"d-none d-lg-block\" />角膜<br class=\"d-lg-none\" />切削手術",
    },
    rows: {
      priceTitle: "價錢(雙眼)",
      pro1CarePrice: "<span class=\"block pb-2\">HK$23,500<sup>^</sup></span><span class=\"block bt-d0d0d0 pt-1 lg:pt-2\">EPS用戶<br />HK$23,000<sup>*</sup></span>",
      pro1Price: "HK$21,750<sup>^</sup>",
      pro2CarePrice: "<span class=\"block pb-2\">HK$26,350<sup>^</sup></span><span class=\"block bt-d0d0d0 pt-1 lg:pt-2\">EPS用戶<br />HK$25,850<sup>*</sup></span>",
      pro2Price: "HK$24,600<sup>^</sup>",
      iclV4cPrice: "HK$53,600<sup>^^</sup><br /><span class=\"whitespace-nowrap\">(散光+$5,000)</span>",
      iclV5Price: "HK$63,600<sup>^^</sup><br /><span class=\"whitespace-nowrap\">(散光+$5,000)</span>",
      smilePrice: "HK$17,500<sup>^</sup>",
      lasikPrice: "HK$19,000<sup>^</sup>",
      examTitle: "術前檢查<br class=\"d-lg-block\" />費用",
      examPrice100: "HK$100",
      examPrice500: "HK$500",
      hydrationTitle: "眼睛水潤<br class=\"d-lg-block\" />護理",
      hydrationTimes: "1次",
      iplTitle: "術後眼部<br />彩光護理",
      iplTimes: "1次",
      doctorExamTitle: "眼科專科<br />醫生檢查",
      followupTitle: "一年內<br class=\"block md:hidden\" />免費覆診",
      followupDoctorNote: "由醫生進行",
      followupTimes5: "5次<sup>#</sup>",
      followupTimes3: "3次<sup>#</sup>",
      followupTimes6Icl: "6次<sup>##</sup><br /><span class=\"text-desc text-xs lg:text-base font-normal\">延長至一年半內</span>",
      enhancementTitle: "增進手術",
      optometryTitle: "無限視光<br class=\"d-lg-block\" />檢查",
      smileXtraTitle: "SMILE XTRA<br class=\"d-none d-lg-block\" />角膜膠原交聯術",
      singleEye: "單眼",
      bothEyes: "雙眼",
      xtraSinglePrice: "HK$3,000",
      xtraBothPrice: "HK$5,000",
    },
  },
  table2: {
    title: "老花矯視",
    cmerClear: {
      title: "CMER CLEAR-Vision<br />人工晶體置換術",
      noAstigmatism: "不帶散光",
      withAstigmatism: "帶散光",
      singleFocalTitle: "單焦點<br class=\"d-lg-none\" />人工晶體<br />(單眼)",
      singleFocalPriceNoAst: "HK$25,000 - $28,000",
      singleFocalPriceAst: "HK$30,000 - $35,000",
      multiFocalTitle: "多焦點<br class=\"d-lg-none\" />人工晶體<br />(單眼)",
      multiFocalPriceNoAst: "HK$35,000 - $45,000",
      multiFocalPriceAst: "HK$43,000 - $51,000",
      examTitle: "術前檢查<br class=\"d-lg-none\" />費用",
      examPrice: "HK$680",
    },
    lbv: {
      title: "Presbyond LBV<br />視覺融合老花激光手術",
      priceTitle: "價錢<br class=\"d-lg-none\" />(雙眼)",
      priceStandard: "HK$48,000<sup class=\"text-xs ml-0.5\">※</sup>",
      priceEps: "EPS用戶<br />HK$47,500<sup>*</sup>",
      examTitle: "術前檢查<br class=\"d-lg-none\" />費用",
      examPrice: "HK$100",
      hydrationTitle: "眼睛水潤<br class=\"d-lg-none\" />護理",
      hydrationTimes: "1次",
      iplTitle: "術後眼部<br />彩光護理",
      iplTimes: "1次",
      doctorExamTitle: "眼科專科<br />醫生檢查",
      followupTitle: "半年內<br class=\"block md:hidden\" />免費覆診",
      followupDoctorNote: "由醫生進行",
      followupTimes: "5次<sup class=\"text-xs ml-0.5\">###</sup>",
      enhancementTitle: "增進手術",
      optometryTitle: "無限視光<br class=\"d-lg-none\" />檢查",
    },
    iclViva: {
      title: "ICL Viva V6<br />植入式隱形眼鏡",
      priceTitle: "價錢<br class=\"d-lg-none\" />(雙眼)",
      price: "HK$80,000",
      examTitle: "術前檢查<br class=\"d-lg-none\" />費用",
      examPrice: "HK$500",
    },
  },
  cta: {
    btnText: "立即預約",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-14)%E5%B8%8C%E7%91%AA%E7%9F%AF%E8%A6%96",
  },
  footnotes: {
    text1: "以上為非指定醫生價錢",
    text2: "指定信用卡（中銀/東亞/滙豐/渣打）可享6/12個月免息分期",
    text2_1: "矯視費用已包括術前檢查費用",
    text2_2: "港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text2_3: "免責聲明：受條款及細則約束，僅適用於以EPS全數支付之客戶。如有任何爭議，希瑪眼科將保留最終決定權。",
    text3: "指定信用卡（中銀/東亞/滙豐/渣打）可享6/12/18/24/36個月免息分期",
    text3_1: "矯視費用已包括術前檢查費用",
    text3_2: "港幣$500 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text3_3: "需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費",
    text3_4: "需要術後一年半內完成。如超過一年半，需另作預約，診金按正常（非矯視套餐）收費",
    text3_5: "矯視費用已包括術前檢查費用港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text3_6: "需要術後半年內完成。如超過半年，需另作預約，診金按正常（非矯視套餐）收費",
    text3_7: "需要術後半年內完成。如超過半年，需另作預約，診金按正常（非矯視套餐）收費",
    text4: "SMILE、SMILE Pro 1.0 / 2.0、SMILE Pro 1.0 / 2.0 Care微笑激光矯視及LASIK激光矯視/TPRK經上皮激光角膜切削手術的增進手術需要術後兩年內完成。如超過兩年，需另作預約，診金按正常（非矯視套餐）收費。LBV視覺融合老花激光手術的增進手術需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費。",
    text5: "SMILE微笑激光矯視、LASIK激光矯視/TPRK經上皮激光角膜切削手術、ICL植入式隱形眼鏡及LBV視覺融合老花激光手術的無限視光檢查需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費；SMILE Pro 1.0 / 2.0微笑激光矯視及SMILE Pro 1.0 / 2.0 Care微笑激光矯視無限視光檢查需要術後兩年內完成。如超過兩年，需另作預約，診金按正常（非矯視套餐）收費。",
    text6: "SMILE、SMILE Pro 1.0 / 2.0微笑激光矯視、ICL植入式隱形眼鏡及LASIK激光矯視/TPRK經上皮激光角膜切削手術當日藥費已包括在矯視套餐收費內。",
  },
};

export const FEE_ZH_CN: FeeData = {
  breadcrumb: {
    home: "首頁",
    current: "收费详情",
  },
  banner: {
    category: "PRICE",
    title: "收费详情",
    tip: "本诊所绝无其他额外收费",
  },
  table1: {
    originNote: "此为<br class=\"d-lg-none\" />香港价钱",
    headers: {
      pro1Care: "<span>SMILE Pro 1.0</span><br /><span>Care</span><br />微笑激光<br class=\"d-lg-none\" />矫视",
      pro1: "<span>SMILE </span><br class=\"d-lg-none\" /><span>Pro 1.0</span><br />微笑激光<br class=\"d-lg-none\" />矫视",
      pro2Care: "<span>SMILE Pro 2.0</span><br /><span>Care</span><br />微笑激光<br class=\"d-lg-none\" />矫视",
      pro2: "<span>SMILE </span><br class=\"block lg:hidden\" /><span>Pro 2.0</span><br />微笑激光<br class=\"d-lg-none\" />矫视",
      iclV4c: "<span>ICL V4C</span><br />植入式<br class=\"d-lg-none\" />隐形<br class=\"hidden lg:block\" />眼镜",
      iclV5: "<span>ICL V5</span><br />植入式<br class=\"d-lg-none\" />隐形<br class=\"hidden lg:block\" />眼镜",
      smile: "<span>SMILE</span><br />微笑激光<br class=\"d-lg-none\" />矫视",
      lasik: "<span>LASIK</span><br class=\"d-lg-none\" />激光矫视/<br /><span>TPRK</span><br class=\"d-lg-none\" />经上皮<br class=\"d-lg-none\" />激光<br class=\"d-none d-lg-block\" />角膜<br class=\"d-lg-none\" />切削手术",
    },
    rows: {
      priceTitle: "价钱(双眼)",
      pro1CarePrice: "<span class=\"block pb-2\">HK$23,500<sup>^</sup></span><span class=\"block bt-d0d0d0 pt-1 lg:pt-2\">EPS用户<br />HK$23,000<sup>*</sup></span>",
      pro1Price: "HK$21,750<sup>^</sup>",
      pro2CarePrice: "<span class=\"block pb-2\">HK$26,350<sup>^</sup></span><span class=\"block bt-d0d0d0 pt-1 lg:pt-2\">EPS用户<br />HK$25,850<sup>*</sup></span>",
      pro2Price: "HK$24,600<sup>^</sup>",
      iclV4cPrice: "HK$53,600<sup>^^</sup><br /><span class=\"whitespace-nowrap\">(散光+$5,000)</span>",
      iclV5Price: "HK$63,600<sup>^^</sup><br /><span class=\"whitespace-nowrap\">(散光+$5,000)</span>",
      smilePrice: "HK$17,500<sup>^</sup>",
      lasikPrice: "HK$19,000<sup>^</sup>",
      examTitle: "术前检查<br class=\"d-lg-block\" />费用",
      examPrice100: "HK$100",
      examPrice500: "HK$500",
      hydrationTitle: "眼睛水润<br class=\"d-lg-block\" />护理",
      hydrationTimes: "1次",
      iplTitle: "术后眼部<br />彩光护理",
      iplTimes: "1次",
      doctorExamTitle: "眼科专科<br />医生检查",
      followupTitle: "一年内<br class=\"block md:hidden\" />免费覆诊",
      followupDoctorNote: "由医生进行",
      followupTimes5: "5次<sup>#</sup>",
      followupTimes3: "3次<sup>#</sup>",
      followupTimes6Icl: "6次<sup>##</sup><br /><span class=\"text-desc text-xs lg:text-base font-normal\">延长至一年半内</span>",
      enhancementTitle: "增进手术",
      optometryTitle: "无限视光<br class=\"d-lg-block\" />检查",
      smileXtraTitle: "SMILE XTRA<br class=\"d-none d-lg-block\" />角膜胶原交联术",
      singleEye: "单眼",
      bothEyes: "双眼",
      xtraSinglePrice: "HK$3,000",
      xtraBothPrice: "HK$5,000",
    },
  },
  table2: {
    title: "老花矫视",
    cmerClear: {
      title: "CMER CLEAR-Vision<br />人工晶体置换术",
      noAstigmatism: "不带散光",
      withAstigmatism: "带散光",
      singleFocalTitle: "单焦点<br class=\"d-lg-none\" />人工晶体<br />(单眼)",
      singleFocalPriceNoAst: "HK$25,000 - $28,000",
      singleFocalPriceAst: "HK$30,000 - $35,000",
      multiFocalTitle: "多焦点<br class=\"d-lg-none\" />人工晶体<br />(单眼)",
      multiFocalPriceNoAst: "HK$35,000 - $45,000",
      multiFocalPriceAst: "HK$43,000 - $51,000",
      examTitle: "术前检查<br class=\"d-lg-none\" />费用",
      examPrice: "HK$680",
    },
    lbv: {
      title: "Presbyond LBV<br />视觉融合老花激光手术",
      priceTitle: "价钱<br class=\"d-lg-none\" />(双眼)",
      priceStandard: "HK$48,000<sup class=\"text-xs ml-0.5\">※</sup>",
      priceEps: "EPS用户<br />HK$47,500<sup>*</sup>",
      examTitle: "术前检查<br class=\"d-lg-none\" />费用",
      examPrice: "HK$100",
      hydrationTitle: "眼睛水润<br class=\"d-lg-none\" />护理",
      hydrationTimes: "1次",
      iplTitle: "术后眼部<br />彩光护理",
      iplTimes: "1次",
      doctorExamTitle: "眼科专科<br />医生检查",
      followupTitle: "半年内<br class=\"block md:hidden\" />免费覆诊",
      followupDoctorNote: "由医生进行",
      followupTimes: "5次<sup class=\"text-xs ml-0.5\">###</sup>",
      enhancementTitle: "增进手术",
      optometryTitle: "无限视光<br class=\"d-lg-none\" />检查",
    },
    iclViva: {
      title: "ICL Viva V6<br />植入式隐形眼镜",
      priceTitle: "价钱<br class=\"d-lg-none\" />(双眼)",
      price: "HK$80,000",
      examTitle: "术前检查<br class=\"d-lg-none\" />费用",
      examPrice: "HK$500",
    },
  },
  cta: {
    btnText: "立即预约",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84(W-14)%E5%B8%8C%E7%91%AA%E7%9F%AF%E8%A6%96",
  },
  footnotes: {
    text1: "以上為非指定醫生價錢",
    text2: "指定信用卡（中銀/東亞/滙豐/渣打）可享6/12個月免息分期",
    text2_1: "矯視費用已包括術前檢查費用",
    text2_2: "港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text2_3: "免責聲明：受條款及細則約束，僅適用於以EPS全數支付之客戶。如有任何爭議，希瑪眼科將保留最終決定權。",
    text3: "指定信用卡（中銀/東亞/滙豐/渣打）可享6/12/18/24/36個月免息分期",
    text3_1: "矯視費用已包括術前檢查費用",
    text3_2: "港幣$500 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text3_3: "需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費",
    text3_4: "需要術後一年半內完成。如超過一年半，需另作預約，診金按正常（非矯視套餐）收費",
    text3_5: "矯視費用已包括術前檢查費用港幣$100 (若沒有預約進行矯視，需另外繳付術前檢查費用)",
    text3_6: "需要術後半年內完成。如超過半年，需另作預約，診金按正常（非矯視套餐）收費",
    text3_7: "需要術後半年內完成。如超過半年，需另作預約，診金按正常（非矯視套餐）收費",
    text4: "SMILE、SMILE Pro 1.0 / 2.0、SMILE Pro 1.0 / 2.0 Care微笑激光矯視及LASIK激光矯視/TPRK經上皮激光角膜切削手術的增進手術需要術後兩年內完成。如超過兩年，需另作預約，診金按正常（非矯視套餐）收費。LBV視覺融合老花激光手術的增進手術需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費。",
    text5: "SMILE微笑激光矯視、LASIK激光矯視/TPRK經上皮激光角膜切削手術、ICL植入式隱形眼鏡及LBV視覺融合老花激光手術的無限視光檢查需要術後一年內完成。如超過一年，需另作預約，診金按正常（非矯視套餐）收費；SMILE Pro 1.0 / 2.0微笑激光矯視及SMILE Pro 1.0 / 2.0 Care微笑激光矯視無限視光檢查需要術後兩年內完成。如超過兩年，需另作預約，診金按正常（非矯視套餐）收費。",
    text6: "SMILE、SMILE Pro 1.0 / 2.0微笑激光矯視、ICL植入式隱形眼鏡及LASIK激光矯視/TPRK經上皮激光角膜切削手術當日藥費已包括在矯視套餐收費內。",
  },
};
