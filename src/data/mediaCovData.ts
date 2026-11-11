/*
 * @FilePath: /src/data/mediaCovData.ts
 * @Description: 媒體報導專頁真值數據字典 (100% 精確對齊舊站 pages/ophthalmicInfo/mediaCov/index.vue 及 mediaCov 組件)
 */

export interface MediaCovArticle {
  href: string;
  img: string;
  tag: string;
  date: string;
  title: string;
}

export interface MediaCovData {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    bgDesktop: string;
    bgMobile: string;
  };
  sectionTitle: string;
  articles: MediaCovArticle[];
  moreText: string;
  mobileCta: {
    href: string;
    icon: string;
    label: string;
    phone: string;
  };
}

export const MEDIA_COV_ZH_HK: MediaCovData = {
  breadcrumb: {
    home: "主頁",
    current: "媒體報導",
  },
  banner: {
    title: "媒體報導",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/04/2994861390bba46b.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/04/57f11ecb499e2b25.jpg",
  },
  sectionTitle: "媒體報導",
  articles: [
    {
      href: "https://urbanlifehk.com/article/33149/%E7%9F%AF%E8%A6%96-%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E9%81%A9%E5%90%88%E7%9F%AF%E8%A6%96-%E6%89%8B%E8%A1%93%E6%9C%89%E9%A2%A8%E9%9A%AA%E5%97%8E-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3smile%E5%BE%AE%E7%AC%91%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B-%E9%A2%A8%E9%9A%AA",
      img: "https://statichk.cmermedical.com/imgs/2022/12/66538cb27950d31e.jpg",
      tag: "矯視",
      date: "02.02.2019",
      title:
        "任何人都適合矯視？手術有風險嗎？一文了解SMILE微笑激光矯視手術過程、風險",
    },
    {
      href: "https://urbanlifehk.com/article/32361/%E7%99%BD%E5%85%A7%E9%9A%9C-50%E6%AD%B2%E4%BB%A5%E4%B8%8A-%E8%A6%96%E5%8A%9B%E6%A8%A1%E7%B3%8A-%E6%9C%89%E9%87%8D%E5%BD%B1-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3%E7%99%BD%E5%85%A7%E9%9A%9C4%E5%A4%A7%E6%88%90%E5%9B%A0-%E5%BE%B5%E7%8B%80%E5%92%8C%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B",
      img: "https://statichk.cmermedical.com/imgs/2023/01/a4665ddaa1b1a3e4.jpg",
      tag: "白內障",
      date: "07.01.2020",
      title:
        "50歲以上？視力模糊、有重影？一文了解白內障4大成因、徵狀和手術過程",
    },
    {
      href: "https://hk.lifestyle.appledaily.com/lifestyle/realtime/article/20190202/59211897",
      img: "https://statichk.cmermedical.com/imgs/2023/01/43378deace4197f5.jpg",
      tag: "醫家話你知",
      date: "02.02.2019",
      title: "香港人易啲深近視？做完激光矯視都可能有嚴重眼疾",
    },
  ],
  moreText: "更多文章",
  mobileCta: {
    href: "#",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即預約/查詢",
    phone: "6940 8569",
  },
};

export const MEDIA_COV_ZH_CN: MediaCovData = {
  breadcrumb: {
    home: "主页",
    current: "媒体报导",
  },
  banner: {
    title: "媒体报导",
    bgDesktop:
      "https://statichk.cmermedical.com/imgs/2023/04/2994861390bba46b.jpg",
    bgMobile:
      "https://statichk.cmermedical.com/imgs/2023/04/57f11ecb499e2b25.jpg",
  },
  sectionTitle: "媒体报导",
  articles: [
    {
      href: "https://urbanlifehk.com/article/33149/%E7%9F%AF%E8%A6%96-%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E9%81%A9%E5%90%88%E7%9F%AF%E8%A6%96-%E6%89%8B%E8%A1%93%E6%9C%89%E9%A2%A8%E9%9A%AA%E5%97%8E-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3smile%E5%BE%AE%E7%AC%91%E6%BF%80%E5%85%89%E7%9F%AF%E8%A6%96%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B-%E9%A2%A8%E9%9A%AA",
      img: "https://statichk.cmermedical.com/imgs/2022/12/66538cb27950d31e.jpg",
      tag: "矫视",
      date: "02.02.2019",
      title:
        "任何人都适合矫视？手术有风险吗？一文了解SMILE微笑激光矫视手术过程、风险",
    },
    {
      href: "https://urbanlifehk.com/article/32361/%E7%99%BD%E5%85%A7%E9%9A%9C-50%E6%AD%B2%E4%BB%A5%E4%B8%8A-%E8%A6%96%E5%8A%9B%E6%A8%A1%E7%B3%8A-%E6%9C%89%E9%87%8D%E5%BD%B1-%E4%B8%80%E6%96%87%E4%BA%86%E8%A7%A3%E7%99%BD%E5%85%A7%E9%9A%9C4%E5%A4%A7%E6%88%90%E5%9B%A0-%E5%BE%B5%E7%8B%80%E5%92%8C%E6%89%8B%E8%A1%93%E9%81%8E%E7%A8%8B",
      img: "https://statichk.cmermedical.com/imgs/2023/01/a4665ddaa1b1a3e4.jpg",
      tag: "白内障",
      date: "07.01.2020",
      title:
        "50岁以上？视力模糊、有重影？一文了解白内障4大成因、征状和手术过程",
    },
    {
      href: "https://hk.lifestyle.appledaily.com/lifestyle/realtime/article/20190202/59211897",
      img: "https://statichk.cmermedical.com/imgs/2023/01/43378deace4197f5.jpg",
      tag: "医家话你知",
      date: "02.02.2019",
      title: "香港人易啲深近视？做完激光矫视都可能有严重眼疾",
    },
  ],
  moreText: "更多文章",
  mobileCta: {
    href: "#",
    icon: "https://statichk.cmermedical.com/imgs/2022/12/f3fcc54f4a9b0108.png",
    label: "立即预约/查询",
    phone: "6940 8569",
  },
};
