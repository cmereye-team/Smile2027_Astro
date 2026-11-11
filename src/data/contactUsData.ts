/**
 * 聯絡我們專頁數據字典 (100% 對齊線上官網逐字文案、電話與地圖連結)
 * 對應舊版：smile2024/pages/new-page/contact-us.vue + lang/zhHK.js + lang/zhCN.js
 */

export interface HotlineRow {
  center: string;
  phone: string;
  whatsapp: string;
}

export interface ClinicMapItem {
  id: number;
  title: string[];
  address: string[];
  src: string;
}

export interface ContactUsContent {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    subtitle: string;
  };
  hotline: {
    title: string;
    headers: {
      center: string;
      phone: string;
      whatsapp: string;
    };
    rows: HotlineRow[];
  };
  maps: {
    iframeTitle: string;
    tabs: {
      smile: string;
      eye: string;
    };
    smileList: ClinicMapItem[];
    eyeList: ClinicMapItem[];
  };
}

const SMILE_MAP_SRC_CENTRAL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.914943384991!2d114.15266089678956!3d22.281211600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064e98df11d%3A0x56ad3d7801270f90!2z5biM55Gq5b6u56yR55-v6KaW5Lit5b-DIENtZXIgU01JTEUgUmVmcmFjdGl2ZSBDZW50cmUg5Lit55Kw6Ki65omA!5e0!3m2!1szh-CN!2sus!4v1714981663044!5m2!1szh-CN!2sus";

const SMILE_MAP_SRC_MONGKOK =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.4693074412746!2d114.1687243589092!3d22.3181611945183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401f0afd81927%3A0xa2a84e559299307!2z5biM55Gq5b6u56yR55-v6KaW5omL6KGT5Lit5b-DIENtZXIgU01JTEUgUmVmcmFjdGl2ZSBTdXJnZXJ5IENlbnRyZSAtIOaXuuinkuWIhuW6lw!5e0!3m2!1sen!2stw!4v1718257266902!5m2!1sen!2stw";

const EYE_CLINIC_LIST: ClinicMapItem[] = [
  {
    id: 1,
    title: ["中環", "香港希瑪眼科中心"],
    address: ["畢打街1-3號中建大廈1515室"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.916441744428!2d114.15517681541506!3d22.28115484921899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064c2535f5f%3A0x4dea0a6fb9200b96!2z5Lit5bu65aSn5Y6m!5e0!3m2!1szh-CN!2shk!4v1655775720953!5m2!1szh-CN!2shk",
  },
  {
    id: 2,
    title: ["中環", "香港希瑪眼科中心"],
    address: ["皇后大道中33號萬邦行1908室"],
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.9428206110742!2d114.1559985!3d22.2823214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040064baa4a041%3A0x32d7f3fd9e2cf282!2z5Lit55Kw5pit6ZqG6KGXNi0xNuiZn-S4h-mCpuihjA!5e0!3m2!1szh-CN!2shk!4v1676968818229!5m2!1szh-CN!2shk",
  },
  {
    id: 3,
    title: ["旺角", "香港希瑪眼科中心"],
    address: ["彌敦道625及639號雅蘭中心", "一期1208室"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.943834766614!2d114.1694325!3d22.317963799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401acb8062ea5%3A0x570a84988a127e1f!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaXuuinkg!5e0!3m2!1szh-CN!2shk!4v1676968856537!5m2!1szh-CN!2shk",
  },
  {
    id: 5,
    title: ["銅鑼灣", "香港希瑪眼科中心"],
    address: ["百德新街2-20號恒隆中心1614-15室"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9429161793923!2d114.18601489999999!3d22.280152099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005423edff73%3A0x46b41406f44c9570!2z5biM55Gq55y856eR5Lit5b-DLemKhemRvOeBow!5e0!3m2!1szh-CN!2shk!4v1676969257334!5m2!1szh-CN!2shk",
  },
  {
    id: 6,
    title: ["觀塘", "香港希瑪眼科中心"],
    address: ["開源道79號鱷魚恤中心16樓1601室"],
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.1367811398727!2d114.225003!3d22.3106662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401d7e74ae007%3A0xc96f0bbd8b762dd4!2z6aaZ5riv5biM546b55y856eR5Lit5b-DLeinguWhmA!5e0!3m2!1szh-CN!2shk!4v1676969438657!5m2!1szh-CN!2shk",
  },
  {
    id: 7,
    title: ["沙田(百佳Fusion 側)", "香港希瑪眼科中心"],
    address: ["沙田正街11-17號偉華中心2樓5A號鋪"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.27146809291!2d114.1874026!3d22.3811213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340407ac4958e33b%3A0x449a54b4ca085085!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaymeeUsCjnrKzkuIDplpMp!5e0!3m2!1szh-CN!2shk!4v1676969477703!5m2!1szh-CN!2shk",
  },
  {
    id: 8,
    title: ["沙田", "香港希瑪眼科中心"],
    address: ["沙田正街11-17號偉華中心2樓1C—1E號鋪"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.27146809291!2d114.1874026!3d22.3811213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340407ac4958e33b%3A0x449a54b4ca085085!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeaymeeUsCjnrKzkuIDplpMp!5e0!3m2!1szh-CN!2shk!4v1676969531200!5m2!1szh-CN!2shk",
  },
  {
    id: 9,
    title: ["元朗", "香港希瑪眼科中心", "(恆香老餅家對面)"],
    address: ["元朗青山公路45及47號誠信商業大廈地鋪"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5847871717187!2d114.0305542!3d22.4446486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f0a0d1fbff7d%3A0xb0f89659853f4a58!2z6aaZ5riv5biM55Gq55y856eR5Lit5b-DLeWFg-aclw!5e0!3m2!1szh-CN!2shk!4v1676969589764!5m2!1szh-CN!2shk",
  },
  {
    id: 10,
    title: ["荃灣", "香港希瑪眼科中心"],
    address: ["荃灣沙咀道255號思源樓地下"],
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5639480653226!2d114.1162646!3d22.370087899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8ec4df07333%3A0xbf2aba680d839acf!2z5oCd5rqQ5qW8!5e0!3m2!1szh-CN!2shk!4v1676969619202!5m2!1szh-CN!2shk",
  },
  {
    id: 11,
    title: ["將軍澳", "香港希瑪眼科中心"],
    address: [
      "將軍澳運亨路1號新都城中心一期",
      "地下55-56號鋪（寶琳站B2出口）",
    ],
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.7127657451344!2d114.2569743!3d22.3214718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404040bda677991%3A0xbd229a46b24f56b5!2sMCP%20ONE!5e0!3m2!1szh-CN!2shk!4v1676969661037!5m2!1szh-CN!2shk",
  },
];

export const CONTACT_US_ZH_HK: ContactUsContent = {
  breadcrumb: {
    home: "首頁",
    current: "聯絡我們",
  },
  banner: {
    title: "聯絡我們",
    subtitle: "Contact us",
  },
  hotline: {
    title: "服務熱線",
    headers: {
      center: "服務中心",
      phone: "電話熱線",
      whatsapp: "WhatsApp",
    },
    rows: [
      {
        center: "希瑪眼科中心",
        phone: "3956 2026",
        whatsapp: "9345 1508",
      },
      {
        center: "希瑪微笑矯視中心",
        phone: "3892 5099",
        whatsapp: "6940 8569",
      },
      {
        center: "希瑪眼科視光中心",
        phone: "3892 5089",
        whatsapp: "6918 0511",
      },
    ],
  },
  maps: {
    iframeTitle: "希瑪微笑矯視中心及眼科診所位置地圖",
    tabs: {
      smile: "矯視中心",
      eye: "眼科診所",
    },
    smileList: [
      {
        id: 1,
        title: ["中環", "希瑪微笑矯視中心"],
        address: [
          "畢打街1-3號中建大廈1512室",
          "(港鐵站G出口，置地廣場樓上)",
        ],
        src: SMILE_MAP_SRC_CENTRAL,
      },
      {
        id: 2,
        title: ["旺角", "希瑪微笑矯視中心"],
        address: [
          "彌敦道625及639號雅蘭中心",
          "一期1725B室 (港鐵站E1出口)",
        ],
        src: SMILE_MAP_SRC_MONGKOK,
      },
    ],
    eyeList: EYE_CLINIC_LIST,
  },
};

export const CONTACT_US_ZH_CN: ContactUsContent = {
  breadcrumb: {
    home: "首页",
    current: "联系我们",
  },
  banner: {
    title: "联络我们",
    subtitle: "Contact us",
  },
  hotline: {
    title: "服务热线",
    headers: {
      center: "服务中心",
      phone: "电话热线",
      whatsapp: "WhatsApp",
    },
    rows: [
      {
        center: "希玛眼科中心",
        phone: "3956 2026",
        whatsapp: "9345 1508",
      },
      {
        center: "希玛微笑矫视中心",
        phone: "3892 5099",
        whatsapp: "6940 8569",
      },
      {
        center: "希玛眼科视光中心",
        phone: "3892 5089",
        whatsapp: "6918 0511",
      },
    ],
  },
  maps: {
    iframeTitle: "希玛微笑矫视中心及眼科诊所位置地图",
    tabs: {
      smile: "矫视中心",
      eye: "眼科诊所",
    },
    smileList: [
      {
        id: 1,
        title: ["中环", "希玛微笑矫视中心"],
        address: [
          "毕打街1-3号中建大厦1512室",
          "(港铁站G出口，置地广场楼上)",
        ],
        src: SMILE_MAP_SRC_CENTRAL,
      },
      {
        id: 2,
        title: ["旺角", "希玛微笑矫视中心"],
        address: [
          "弥敦道625及639号雅兰中心",
          "一期1725B室 (港铁站E1出口)",
        ],
        src: SMILE_MAP_SRC_MONGKOK,
      },
    ],
    eyeList: EYE_CLINIC_LIST,
  },
};
