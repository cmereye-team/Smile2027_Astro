/*
 * @Author: Antigravity AI
 * @Date: 2026-11-10
 * @FilePath: /src/data/bookingData.ts
 * @Description: 預約服務與預約講座表單真值數據字典 (100% 精確對齊線上真值與舊站 Nuxt 原型)
 */

export interface ScheduleItem {
  id: number;
  service_type: string;
  service_type_label: string;
  location: string;
  location_label: string;
  booking_date: string;
  weekday: string;
  time_slot: string;
  time_slot_display: string;
  is_special: string;
  special_label: string;
  name: string;
}

export interface CalendarItem {
  id: number;
  pic: string;
  title: string;
  sorting: number;
}

export interface BookingData {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    bgMobile: string;
    bgDesktop: string;
  };
  serve: {
    lectureTitle: string;
    lectureIcon: string;
    examTitle: string;
    examIcon: string;
    whatsappCta: string;
    whatsappPhone: string;
    whatsappIcon: string;
    whatsappUrl: string;
  };
  appointForm: {
    title: string;
    p3: string;
    p4: string;
    p5: string;
    form: {
      serviceLabel: string;
      servicePlaceholder: string;
      serviceOptions: Array<{ value: string; label: string }>;
      locationLabel: string;
      locationPlaceholder: string;
      locationOptions: Array<{ value: string; label: string }>;
      dateLabel: string;
      datePlaceholder: string;
      previewPrefix: string;
      previewSuffix: string;
      previewTail: string;
      seatsLabel: string;
      seatsPlaceholder: string;
      seatsOptions: string[];
      nameLabel: string;
      namePlaceholder: string;
      sexLabel: string;
      sexPlaceholder: string;
      sexOptions: Array<{ value: string; label: string }>;
      ageLabel: string;
      agePlaceholder: string;
      ageOptions: string[];
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      sourceLabel: string;
      sourcePlaceholder: string;
      sourceOptions: string[];
      submitBtn: string;
      validationRequired: string;
      validationEmail: string;
      submitting: string;
      submitFailed: string;
    };
    calendarTitle: string;
    successModal: {
      personImgMobile: string;
      personImgDesktop: string;
      title: string;
      p1: string;
      p2: string;
      p3: string;
      homeBtn: string;
    };
  };
}

export const DEFAULT_CALENDARS: CalendarItem[] = [
  {
    id: 7,
    pic: "https://static.cmermedical.com.hk/smile/uploads/2026/10/15/d3ouy3qb_9e913e89dda2f38d30dc351f70a64c33.webp",
    title: "2026年11月中環講座日曆",
    sorting: 5,
  },
  {
    id: 8,
    pic: "https://static.cmermedical.com.hk/smile/uploads/2026/10/15/c83bc174dc22083a.webp",
    title: "2026年11月旺角講座日曆",
    sorting: 6,
  },
];

export const DEFAULT_SCHEDULES: ScheduleItem[] = [
  {
    id: 234,
    service_type: "2",
    service_type_label: "SMILE+ICL",
    location: "2",
    location_label: "中環",
    booking_date: "2026-11-11",
    weekday: "週三",
    time_slot: "13:30-14:30",
    time_slot_display: "1:30 下午",
    is_special: "0",
    special_label: "",
    name: "SMILE+ICL 講座-中環",
  },
  {
    id: 235,
    service_type: "1",
    service_type_label: "SMILE Pro 2.0",
    location: "1",
    location_label: "旺角",
    booking_date: "2026-11-14",
    weekday: "週六",
    time_slot: "14:00-15:00",
    time_slot_display: "2:00 下午",
    is_special: "0",
    special_label: "",
    name: "SMILE Pro 2.0 講座-旺角",
  },
  {
    id: 236,
    service_type: "1",
    service_type_label: "SMILE Pro 2.0",
    location: "2",
    location_label: "中環",
    booking_date: "2026-11-18",
    weekday: "週三",
    time_slot: "13:30-14:30",
    time_slot_display: "1:30 下午",
    is_special: "0",
    special_label: "",
    name: "SMILE Pro 2.0 講座-中環",
  },
  {
    id: 237,
    service_type: "3",
    service_type_label: "老花矯視",
    location: "1",
    location_label: "旺角",
    booking_date: "2026-11-21",
    weekday: "週六",
    time_slot: "14:30-15:30",
    time_slot_display: "2:30 下午",
    is_special: "0",
    special_label: "",
    name: "老花矯視 講座-旺角",
  },
  {
    id: 238,
    service_type: "3",
    service_type_label: "老花矯視",
    location: "2",
    location_label: "中環",
    booking_date: "2026-11-25",
    weekday: "週三",
    time_slot: "13:30-14:30",
    time_slot_display: "1:30 下午",
    is_special: "0",
    special_label: "",
    name: "老花矯視 講座-中環",
  },
];

export const BOOKING_ZH_HK: BookingData = {
  breadcrumb: {
    home: "主頁",
    current: "預約服務",
  },
  banner: {
    title: "預約服務",
    bgMobile: "https://statichk.cmermedical.com/static/lkximg/smile_image/mb-bg.avif",
    bgDesktop: "https://statichk.cmermedical.com/static/lkximg/smile_image/bg.avif",
  },
  serve: {
    lectureTitle: "講座",
    lectureIcon: "https://statichk.cmermedical.com/imgs/2023/01/df076d9e71e08870.png",
    examTitle: "術前眼睛檢查",
    examIcon: "https://statichk.cmermedical.com/imgs/2023/01/a1441d1e7e65eb40.png",
    whatsappCta: "立即預約/查詢",
    whatsappPhone: "6940 8569",
    whatsappIcon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
  },
  appointForm: {
    title: "SMILE Pro 1.0/2.0 微笑激光矯視、<br class='block md:hidden' />ICL植入式隱形眼鏡、<br class='hidden md:block' />SMILE 微笑<br class='block md:hidden' />激光矯視、老花矯視講座",
    p3: "希瑪微笑矯視中心定期舉辦免費矯視小班講座，由資深醫療團隊親自講解，<br class='hidden md:block' />協助您深入了解各項技術細節，為自己作出最合適的選擇。",
    p4: "無論您正考慮 SMILE Pro 1.0/2.0 微笑激光矯視、SMILE 微笑激光矯視、ICL 植入式隱形眼鏡，或是老花矯視，<br class='hidden lg:block' />我們的講座都已為您準備好所需的全面資訊。<br />講座重點內容包括：<span>矯視服務簡介</span>、<span>詳細技術分析及講解</span>，以及<span>即時解答查詢</span>。",
    p5: "請填寫下列表格免費預約您的席位，本中心將隨後聯絡並確認您的登記。",
    form: {
      serviceLabel: "選擇服務",
      servicePlaceholder: "請選擇",
      serviceOptions: [
        { value: "1", label: "SMILE Pro 2.0" },
        { value: "2", label: "SMILE+ICL" },
        { value: "3", label: "老花矯視" },
      ],
      locationLabel: "選擇地點",
      locationPlaceholder: "請選擇",
      locationOptions: [
        { value: "1", label: "旺角" },
        { value: "2", label: "中環" },
      ],
      dateLabel: "預約日期",
      datePlaceholder: "預約日期",
      previewPrefix: "您已選擇",
      previewSuffix: "的",
      previewTail: "講座",
      seatsLabel: "預留位置",
      seatsPlaceholder: "0",
      seatsOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      nameLabel: "姓名",
      namePlaceholder: "請填寫姓名",
      sexLabel: "性別",
      sexPlaceholder: "---",
      sexOptions: [
        { value: "", label: "---" },
        { value: "0", label: "女" },
        { value: "1", label: "男" },
      ],
      ageLabel: "年齡",
      agePlaceholder: "請選擇",
      ageOptions: [
        "17歲或以下",
        "18-25歲",
        "26-35歲",
        "36-45歲",
        "46-55歲",
        "56歲或以上",
      ],
      phoneLabel: "聯絡電話",
      phonePlaceholder: "請填寫",
      emailLabel: "電郵地址",
      emailPlaceholder: "請填寫",
      sourceLabel: "從何處得知我們",
      sourcePlaceholder: "請選擇",
      sourceOptions: [
        "Google搜尋引擎",
        "Yahoo搜尋引擎",
        "Facebook",
        "Instagram",
        "YouTube",
        "討論區",
        "報章",
        "診所單張",
        "親友介紹",
        "員工介紹",
        "其他",
      ],
      submitBtn: "提交預約",
      validationRequired: "請檢查預留位置、姓名、聯絡電話不能為空！",
      validationEmail: "請檢查郵件格式是否正確！",
      submitting: "提交中...",
      submitFailed: "提交失敗，請稍後再試或致電聯絡我們",
    },
    calendarTitle: "講座月曆",
    successModal: {
      personImgMobile: "https://statichk.cmermedical.com/smile/appointform/appointform-person-pc@1x.avif",
      personImgDesktop: "https://statichk.cmermedical.com/smile/appointform/appointform-person-pc@2x.avif",
      title: "報名成功",
      p1: "感謝您的填寫。",
      p2: "我們已收到您的表單。",
      p3: "真人客戶服務員將在辦公時間回覆您！",
      homeBtn: "返回主頁",
    },
  },
};

export const BOOKING_ZH_CN: BookingData = {
  breadcrumb: {
    home: "首页",
    current: "预约服务",
  },
  banner: {
    title: "预约服务",
    bgMobile: "https://statichk.cmermedical.com/static/lkximg/smile_image/mb-bg.avif",
    bgDesktop: "https://statichk.cmermedical.com/static/lkximg/smile_image/bg.avif",
  },
  serve: {
    lectureTitle: "讲座",
    lectureIcon: "https://statichk.cmermedical.com/imgs/2023/01/df076d9e71e08870.png",
    examTitle: "术前眼睛检查",
    examIcon: "https://statichk.cmermedical.com/imgs/2023/01/a1441d1e7e65eb40.png",
    whatsappCta: "立即预约/查询",
    whatsappPhone: "6940 8569",
    whatsappIcon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=85269408569&text=我想預約/查詢(MW-01) 術前檢查/矯視講座",
  },
  appointForm: {
    title: "SMILE Pro 1.0/2.0 微笑激光矫视、<br class='block md:hidden' />ICL植入式隐形眼镜、<br class='hidden md:block' />SMILE 微笑<br class='block md:hidden' />激光矫视、老花矫视讲座",
    p3: "希玛微笑矫视中心定期举办免费矫视小班讲座，由资深医疗团队亲自讲解，协助您深入了解各项技术细节，为自己作出最合适的选择。",
    p4: "无论您正考虑 SMILE Pro 1.0/2.0 微笑激光矫视、SMILE 微笑激光矫视、ICL 植入式隐形眼镜，或是老花矫视，我们的讲座都已为您准备好所需的全面资讯。<br />讲座重点内容包括：<span>矫视服务简介</span>、<span>详细技术分析及讲解</span>，以及<span>即时解答查询</span>。",
    p5: "请填写下列表格免费预约您的席位，本中心将随后联络并确认您的登记。",
    form: {
      serviceLabel: "选择服务",
      servicePlaceholder: "请选择",
      serviceOptions: [
        { value: "1", label: "SMILE Pro 2.0" },
        { value: "2", label: "SMILE+ICL" },
        { value: "3", label: "老花矫视" },
      ],
      locationLabel: "选择地点",
      locationPlaceholder: "请选择",
      locationOptions: [
        { value: "1", label: "旺角" },
        { value: "2", label: "中环" },
      ],
      dateLabel: "预约日期",
      datePlaceholder: "预约日期",
      previewPrefix: "您已选择",
      previewSuffix: "的",
      previewTail: "讲座",
      seatsLabel: "预留位置",
      seatsPlaceholder: "0",
      seatsOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      nameLabel: "姓名",
      namePlaceholder: "请填写姓名",
      sexLabel: "性别",
      sexPlaceholder: "---",
      sexOptions: [
        { value: "", label: "---" },
        { value: "0", label: "女" },
        { value: "1", label: "男" },
      ],
      ageLabel: "年龄",
      agePlaceholder: "请选择",
      ageOptions: [
        "17岁或以下",
        "18-25岁",
        "26-35岁",
        "36-45岁",
        "46-55岁",
        "56岁或以上",
      ],
      phoneLabel: "联络电话",
      phonePlaceholder: "请填写",
      emailLabel: "邮箱地址",
      emailPlaceholder: "请填写",
      sourceLabel: "从何处得知我们",
      sourcePlaceholder: "请选择",
      sourceOptions: [
        "Google搜寻引擎",
        "Yahoo搜寻引擎",
        "Facebook",
        "Instagram",
        "YouTube",
        "论坛",
        "报纸",
        "诊所传单",
        "亲友推荐",
        "员工推荐",
        "其他",
      ],
      submitBtn: "提交预约",
      validationRequired: "请检查预留位置、姓名、联络电话不能为空！",
      validationEmail: "请检查邮件格式是否正确！",
      submitting: "提交中...",
      submitFailed: "提交失败，请稍后再试或致电联络我们",
    },
    calendarTitle: "讲座月历",
    successModal: {
      personImgMobile: "https://statichk.cmermedical.com/smile/appointform/appointform-person-pc@1x.avif",
      personImgDesktop: "https://statichk.cmermedical.com/smile/appointform/appointform-person-pc@2x.avif",
      title: "报名成功",
      p1: "感谢您的填写。",
      p2: "我们已收到您的表单。",
      p3: "真人客户服务员将在办公时间回复您！",
      homeBtn: "返回主页",
    },
  },
};
