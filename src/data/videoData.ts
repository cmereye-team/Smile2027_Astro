/*
 * @FilePath: /src/data/videoData.ts
 * @Description: 全站統一用家分享與影片數據中心 (Unified Video & User Share Data Layer)
 * 統一管理全量影片庫 (ALL_VIDEOS) 及各業務板塊導出數據 (首頁、SMILE Pro、SMILE、ICL)
 */

export type VideoType = "smilepro" | "smile" | "icl";

export interface VideoItem {
  type: VideoType[];
  name: string;
  enName: string;
  title: string;
  link: string;
  img: string;
  squareimg?: string;
  webp?: string;
  avif?: string;
}

export interface ShareItem {
  type: string;
  href: string;
  img: string;
  squareimg?: string;
  text: string[];
  nameEn: string;
  nameCn: string;
}

export type RelexSmileShareItem = ShareItem;

/**
 * 1. 全站 74 筆全量影片庫 (供 /video 影片中心檢索與分類過濾)
 */
export const ALL_VIDEOS: VideoItem[] = [
  {
    type: ["smilepro"],
    name: "王嘉慧",
    enName: "Cathy",
    title: "同隱形眼鏡正式分手～",
    link: "https://youtu.be/YAGjW1TSCqg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-028-v1.avif",
  },
  {
    type: ["smilepro", "icl"],
    name: "群星",
    enName: "",
    title: "真實用家共同見證<br/>「真實」自己",
    link: "https://youtu.be/NtULZl7qUEg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-027-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "文凱婷",
    enName: "Aerent",
    title: "清楚咗 唱Live都放鬆咗",
    link: "https://youtu.be/LvVdc3l7XpE",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-026-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "曾展望",
    enName: "GM",
    title: "做SMILE Pro梗係搵<br/>希瑪!",
    link: "https://youtu.be/kPM1KMcAwss",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-025-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "樊沛珈",
    enName: "Gi",
    title: "穿搭由眼睛開始自由",
    link: "https://youtu.be/Z-jpOoOpMEg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-024-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "阮浩棕",
    enName: "Nicholas",
    title: "唔使再忍受除戴Con嘅<br/>痛苦",
    link: "https://youtu.be/iNu-uMliXNA",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-023-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "米姬",
    enName: "Maggie",
    title: "做咗SMILE Pro 2年<br/>都仲睇得咁清楚",
    link: "https://youtu.be/tcvQgB4IXDk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-022-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "李蒨怡",
    enName: "Sarah",
    title: "唔洗矇查查周圍搵眼鏡",
    link: "https://youtu.be/Z5ut-9tIhmo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-021.avif",
  },
  {
    type: ["smilepro"],
    name: "沈以諾",
    enName: "Jay",
    title: "無咗眼鏡都一樣做到唔<br/>同活動",
    link: "https://youtu.be/857FwJQu7OA",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-020.avif",
  },
  {
    type: ["smilepro"],
    name: "譚凱琳",
    enName: "Karen",
    title: "咸淡水活動都咁方便",
    link: "https://youtu.be/AT7ZVZ4lFgM",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro1.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Anson Au",
    title: "無哂Con帶嚟嘅麻煩<br/>促進咗眼神交流",
    link: "https://youtu.be/10KYv_gGgWM",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro2.avif",
  },
  {
    type: ["smilepro"],
    name: "倪嘉雯",
    enName: "Carmen",
    title: "做咗就可以好似我依家<br/>咁方便㗎喇",
    link: "https://youtu.be/TBI6J31JwJQ",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro3.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Mimi Lau",
    title: "無哂Con帶嚟嘅麻煩<br/>促進咗眼神交流",
    link: "https://youtu.be/10KYv_gGgWM",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro4.avif",
  },
  {
    type: ["smilepro"],
    name: "鄧伊程",
    enName: "Tiffany",
    title: "唔洗花時間戴Con，<br/>可以直接出門練習，<br/>非常方便",
    link: "https://youtu.be/1Ic0z7wiVv8",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro5.avif",
  },
  {
    type: ["smilepro"],
    name: "米姬",
    enName: "Maggie",
    title: "好舒服之下就完成咗<br/>成個過程",
    link: "https://youtu.be/vxeN1wXeZ5M",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro6.avif",
  },
  {
    type: ["smilepro"],
    name: "梁梓瑜",
    enName: "Fish",
    title: "做完SMILE Pro<br/>慳咗好多Con錢",
    link: "https://youtu.be/C4yu0L5xfy8",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro7.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Belle",
    title: "一瞓醒清楚望到全世界<br/>真係好開心!",
    link: "https://youtu.be/U4rueCW0hIg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro8.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Belle",
    title: "希瑪矯視旅程",
    link: "https://youtu.be/uHFshgSiP4o",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-022.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Pinky",
    title: "SMILE Pro VS <br/>SMILE矯視",
    link: "https://youtu.be/M6mkwCRqXII",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro-023.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Pinky",
    title: "我都做咗<br/>SMILE Pro啦!",
    link: "https://youtu.be/VoGlE1dJPhc",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro9.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Killer",
    title: "20秒解決人生<br/>一大問題",
    link: "https://youtu.be/RzeaU0Y0zMI",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro10.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Jay",
    title: "行出沙灘都有自信啲",
    link: "https://youtu.be/IWGVOHwyUQc",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro11.avif",
  },
  {
    type: ["smilepro"],
    name: "細貓",
    enName: "",
    title: "做完SMILE Pro<br/>上舞台都唔會驚光",
    link: "https://youtu.be/1p5Qm_772jI",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro12.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Mina",
    title: "婚禮To-Do List要有<br/>做SMILE Pro",
    link: "https://youtu.be/4ELnbQjUCsA",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro13.avif",
  },
  {
    type: ["smilepro"],
    name: "米姬",
    enName: "Maggie",
    title: "唔洗戴Con戴一世",
    link: "https://youtu.be/r4rbUUVtjzM",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro14.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Cindy Wong",
    title: "我問自己點解唔早啲做<br/>SMILE Pro呢!",
    link: "https://youtu.be/kVEJ-PN4AJo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro15.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Cindy Wong",
    title: "湊住仔仔都咁方便",
    link: "https://youtu.be/I6Yv4PTTSC4",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro16.avif",
  },
  {
    type: ["smilepro"],
    name: "劉學銘",
    enName: "",
    title: "做完一出嚟問題解決哂",
    link: "https://youtu.be/33vCgmDh-UQ",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro17.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Sandy To",
    title: "教瑜伽堂專注咗<br/>效率高咗",
    link: "https://youtu.be/iHBGkRh-CXw",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro18.avif",
  },
  {
    type: ["smilepro"],
    name: "莎比亞",
    enName: "SAPIAH",
    title: "無咗副Con<br/>生活自主返",
    link: "https://youtu.be/jBAIJeUQGz0",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smilepro/smilepro19.avif",
  },
  {
    type: ["smile"],
    name: "黃啟樂",
    enName: "",
    title: "就算落雨都唔會再影響<br/>到我跑步嘅心情",
    link: "https://youtu.be/TGxol6pNXSY",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-001.avif",
  },
  {
    type: ["smile"],
    name: "尹焯熙",
    enName: "",
    title: "唔洗戴Con係一種<br/>解脫!可以瀟灑出門口",
    link: "https://youtu.be/CJEE6UQKPes",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-002.avif",
  },
  {
    type: ["smile"],
    name: "馬燕茹",
    enName: "",
    title: "一行出去已經感受到<br/>原來我望嘢可以咁清楚",
    link: "https://youtu.be/tLsWfdZy4P4",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-003.avif",
  },
  {
    type: ["smile"],
    name: "李旭川",
    enName: "",
    title: "做完多咗眼神交流<br/>傳波都準咗",
    link: "https://youtu.be/_wk_gZGzB1s",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-004.avif",
  },
  {
    type: ["smile"],
    name: "游嘉欣",
    enName: "",
    title: "想做就去做啦!",
    link: "https://youtu.be/qBsPhkIaVfo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-005.avif",
  },
  {
    type: ["smile"],
    name: "陳欣妍",
    enName: "Shirley Chan",
    title: "終於可以掉咗<br/>縮細眼嘅眼鏡",
    link: "https://youtu.be/oHDOFYMEUsk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-006.avif",
  },
  {
    type: ["smile"],
    name: "倪安慈",
    enName: "Kathy Ngai",
    title: "過程好似打機咁<br/>好神奇有趣!",
    link: "https://youtu.be/nrsLktnnW_I",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-007.avif",
  },
  {
    type: ["smile"],
    name: "唐劍康",
    enName: "Donaa cld",
    title: "過程咩感覺都無<br/>好快 好神奇!",
    link: "https://youtu.be/XSOzqZD6N8Q",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-008.avif",
  },
  {
    type: ["smile"],
    name: "麥秋成",
    enName: "",
    title: "視力仲好過未矯視之前",
    link: "https://youtu.be/sw1fxUXMqes",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-009.avif",
  },
  {
    type: ["smile"],
    name: "唐浩然",
    enName: "Jacky Tong",
    title: "做完好似戴咗Con咁，<br/>連瞓覺都feel到自己睇<br/>得好清楚咁",
    link: "https://youtu.be/HfA2NBsMVWQ",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-010.avif",
  },
  {
    type: ["smile"],
    name: "張沛樂",
    enName: "Charlotte",
    title: "做咗SMILE有<br/>更多精力應付工作",
    link: "https://youtu.be/dyzeGWTk8Dk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-011.avif",
  },
  {
    type: ["smile"],
    name: "黃妍",
    enName: "Cath Wong",
    title: "彈結他幾投入睇嘢<br/>都唔矇",
    link: "https://youtu.be/qBsPhkIaVfo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-012.avif",
  },
  {
    type: ["smile"],
    name: "趙慧珊",
    enName: "Aka",
    title: "做SMILE過程<br/>都無感覺",
    link: "https://youtu.be/1WR18ptmCuQ",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-013.avif",
  },
  {
    type: ["smile"],
    name: "張名雅",
    enName: "",
    title: "就算以後唔可以戴Con<br/>都唔怕 因為我已經做<br/>咗SMILE",
    link: "https://youtu.be/bwQMHStnXCk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-014.avif",
  },
  {
    type: ["smile"],
    name: "李偉志",
    enName: "Anthony",
    title: "同學生對打都唔怕Con<br/>移位",
    link: "https://youtu.be/inD-CATvEl4",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-015.avif",
  },
  {
    type: ["smile"],
    name: "杜詠彤",
    enName: "",
    title: "做SMILE原來<br/>早做早享受",
    link: "https://youtu.be/dYYyN9YZGQg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-017.avif",
  },
  {
    type: ["smile"],
    name: "何柱霆",
    enName: "",
    title: "以後跳繩集中<br/>都唔怕眼乾",
    link: "https://youtu.be/T3K97UlXpHg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-018.avif",
  },
  {
    type: ["smile"],
    name: "盧善琳",
    enName: "",
    title: "原來世界可以咁清楚",
    link: "https://youtu.be/WlFqNfq5jkI",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-019.avif",
  },
  {
    type: ["smile"],
    name: "",
    enName: "Ceci Wu",
    title: "過程比我想像中快",
    link: "https://youtu.be/Z9s3c5Thu7w",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-020.avif",
  },
  {
    type: ["smile"],
    name: "釗峰",
    enName: "",
    title: "做完成個世界唔同咗",
    link: "https://youtu.be/o2n03FVGWbk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-021.avif",
  },
  {
    type: ["smile"],
    name: "文荻",
    enName: "Mandy",
    title: "做完好感動<br/>開心到想喊",
    link: "https://youtu.be/05NSqdF7nz0",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-022.avif",
  },
  {
    type: ["smile"],
    name: "方敏婷",
    enName: "Natalie",
    title: "早啲做SMILE慳好多<br/>買Con錢 好抵!",
    link: "https://youtu.be/nagwW6CP1iU",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-023.avif",
  },
  {
    type: ["smile"],
    name: "伍富橋",
    enName: "",
    title: "長期長時間戴Con人士<br/>要做SMILE!",
    link: "https://youtu.be/tJ3MHvKagMk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-024.avif",
  },
  {
    type: ["smile"],
    name: "伍樂怡",
    enName: "kelly Ng",
    title: "好似瞓一覺就做完咁",
    link: "https://youtu.be/c6dwJ1Cbgxw",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-025.avif",
  },
  {
    type: ["smile"],
    name: "何浩文",
    enName: "Dominic Ho",
    title: "拍嘢睇Mon唔洗再俾<br/>眼鏡壓住",
    link: "https://youtu.be/L5GFWM7Fxqs",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-026.avif",
  },
  {
    type: ["smile"],
    name: "周志康",
    enName: "Daniel Chau",
    title: "做咗SMILE就唔會再<br/>錯過同囡囡每個<br/>珍貴Moment",
    link: "https://youtu.be/Udnsv_lOr74",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-027.avif",
  },
  {
    type: ["smile"],
    name: "姜咏鑫",
    enName: "Ada",
    title: "每一次擘大眼都<br/>懷疑自己係咪唔記得除<br/>Con既感覺",
    link: "https://youtu.be/JCzzO4Y0kko",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-028.avif",
  },
  {
    type: ["smile"],
    name: "胡鴻鈞",
    enName: "Hubert",
    title: "做完好似重生<br/>換咗對新嘅眼咁!",
    link: "https://youtu.be/JD5GGTg01to",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-029.avif",
  },
  {
    type: ["smile"],
    name: "莎拉",
    enName: "Scarlett",
    title: "唔止視力穩定 心理上<br/>都穩定咗",
    link: "https://youtu.be/NF_S1R9DhNk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-033.avif",
  },
  {
    type: ["smile"],
    name: "黃千庭",
    enName: "Brian Wong",
    title: "揸車唔洗換眼鏡<br/>安全好多",
    link: "https://youtu.be/7T_ATu8-Vn8",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-030.avif",
  },
  {
    type: ["smile"],
    name: "莫穎彤",
    enName: "Judy Mok",
    title: "原來做SMILE唔痛<br/>仲好快",
    link: "https://youtu.be/KslMZ0PY2fg",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-031.avif",
  },
  {
    type: ["smile"],
    name: "劉志穎",
    enName: "Jimmy",
    title: "長時間專注整蛋糕都唔<br/>眼乾",
    link: "https://youtu.be/jO_h9YqCJzs",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/smile/smile-032.avif",
  },
  {
    type: ["icl"],
    name: "陳楨怡",
    enName: "Celina",
    title: "全天候高清視力<br/>我靠ICL!",
    link: "https://youtu.be/M4-FA9U3VPo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/icl-012-v1.avif",
  },
  {
    type: ["icl"],
    name: "梁庭欣",
    enName: "Ting Yan",
    title: "ICL矯視過程講解及<br/>注意事項",
    link: "https://youtu.be/D91jSXnpeNc",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/icl-011.avif",
  },
  {
    type: ["icl"],
    name: "梁庭欣",
    enName: "Ting Yan",
    title: "一個「選擇」<br/>睇見自己嘅光芒",
    link: "https://youtu.be/PmZk2TtrNBc",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/icl-010.avif",
  },
  {
    type: ["icl"],
    name: "王頌茵",
    enName: "Kathy仔",
    title: "依家一擘大眼就見到<br/>好清楚嘅世界，好立體",
    link: "https://youtu.be/fNSShYa7nKk",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem1.avif",
  },
  {
    type: ["icl"],
    name: "李莉",
    enName: "Lily",
    title: "夜間高清視力對<br/>夜晚揸車好重要",
    link: "https://youtu.be/T9g2qoFI9nU",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem-icl1.avif",
  },
  {
    type: ["icl"],
    name: "麥沛東",
    enName: "",
    title: "眼鏡由「必須品」<br/>變「奢侈品」",
    link: "https://youtu.be/I2sl4GWqg1w",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem4.avif",
  },
  {
    type: ["icl"],
    name: "麥沛東",
    enName: "",
    title: "原來眼角膜薄都有機會<br/>可以做矯視!",
    link: "https://youtu.be/r0yDL98l0Zo",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/icl4.avif",
  },
  {
    type: ["icl"],
    name: "麥沛東",
    enName: "",
    title: "麥沛東與結婚這回事",
    link: "https://youtu.be/B12IjJ3tFHE",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/icl5.avif",
  },
  {
    type: ["icl"],
    name: "吳業坤",
    enName: "Kwan Gor",
    title: "眼鏡選擇多好多，<br/>世界限制少好多",
    link: "https://youtu.be/CEbbKFeFdnc",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem-icl4.avif",
  },
  {
    type: ["icl"],
    name: "林奕匡",
    enName: "Phil",
    title: "好Surprise 做完之後<br/>24小時都睇得咁清",
    link: "https://youtu.be/2t7JjTab4xA",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem-icl2.avif",
  },
  {
    type: ["icl"],
    name: "林宣妤",
    enName: "Serene Lim",
    title: "每日起身唔洗戴Con<br/>慳好多時間 好方便",
    link: "https://youtu.be/5ihrzFvOy38",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem-icl3.avif",
  },
  {
    type: ["icl"],
    name: "",
    enName: "Tiffany Poon",
    title: "做咗ICL 夜晚湊小朋友<br/>唔洗開燈都睇得清楚",
    link: "https://youtu.be/e-c_qRuvWTA",
    img: "https://static.cmermedical.com.hk/smile/assets/video-covers/icl/boxShareItem-icl5.avif",
  },
];

// 定义 Tab 对应关系
export const VIDEO_TABS = [
  { key: "smilepro", label: "SMILE Pro" },
  { key: "smile", label: "SMILE" },
  { key: "icl", label: "ICL" },
] as const;


/**
 * 2. 首頁精選用家分享 (HOMEPAGE_SHARE_DATA)
 * 嚴格限制數量為 14 筆精選個案 (2 ICL + 4 SMILE + 8 SMILE Pro)，避免 74 筆全量加載造成首頁長度失衡與 DOM 膨脹
 */
export const HOMEPAGE_SHARE_DATA: ShareItem[] = [
  {
    "type": "ICL",
    "href": "https://youtu.be/fNSShYa7nKk",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem1.avif",
    "text": [
      "依家一擘大眼就見到",
      "好清楚嘅世界，好立體"
    ],
    "nameEn": "Kathy",
    "nameCn": "王頌茵"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/TBI6J31JwJQ",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem2.avif",
    "text": [
      "做咗就可以好似我依家",
      "咁方便㗎喇"
    ],
    "nameEn": "Carmen",
    "nameCn": "倪嘉雯"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/vxeN1wXeZ5M",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem3.avif",
    "text": [
      "好舒服之下就完成咗成",
      "個過程"
    ],
    "nameEn": "Maggie",
    "nameCn": "米姬"
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/I2sl4GWqg1w",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem4.avif",
    "text": [
      "眼鏡由「必須品」",
      "變「奢侈品」"
    ],
    "nameEn": " ",
    "nameCn": "麥沛東"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/10KYv_gGgWM",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem5.avif",
    "text": [
      "無哂Con帶嚟嘅麻煩，",
      "促進咗眼神交流"
    ],
    "nameEn": " ",
    "nameCn": "Anson Au"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/watch?v=JCzzO4Y0kko",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem6.avif",
    "text": [
      "每一次擘大眼都",
      "懷疑自己係咪唔記得除",
      "Con既感覺"
    ],
    "nameEn": "Ada",
    "nameCn": "姜咏鑫"
  },
  {
    "type": "SMILE Pro",
    "href": "https://www.youtube.com/watch?v=1p5Qm_772jI",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem7.avif",
    "text": [
      "做完SMILE Pro",
      "上舞台都唔會驚光"
    ],
    "nameEn": " ",
    "nameCn": "細貓"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/kVEJ-PN4AJo",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem8.avif",
    "text": [
      "我問自己點解唔早啲做",
      "SMILE Pro呢!"
    ],
    "nameEn": " ",
    "nameCn": "Cindy Wong"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/VoGlE1dJPhc",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem9.avif",
    "text": [
      "做完幾個月視力都維持",
      "到非常之清"
    ],
    "nameEn": "Pinky",
    "nameCn": ""
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/1Ic0z7wiVv8",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem10.avif",
    "text": [
      "唔洗花時間戴Con，可",
      "以直接出門練習，非常",
      "方便"
    ],
    "nameEn": "Tiffany",
    "nameCn": "鄧伊程"
  },
  {
    "type": "SMILE",
    "href": "https://youtu.be/tLsWfdZy4P4",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem11.avif",
    "text": [
      "一行出去已經感受到，",
      "原來我望嘢可以",
      "咁清楚!"
    ],
    "nameEn": " ",
    "nameCn": "馬燕茹"
  },
  {
    "type": "SMILE",
    "href": "https://youtu.be/_wk_gZGzB1s",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem12.avif",
    "text": [
      "睇嘢清咗，一個簡單",
      "眼神已經可以即刻傳波",
      "俾隊友，射波亦",
      "更容易集中"
    ],
    "nameEn": " ",
    "nameCn": "李旭川"
  },
  {
    "type": "SMILE",
    "href": "https://youtu.be/TGxol6pNXSY",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem13.avif",
    "text": [
      "就算落雨都唔會再影響",
      "到我跑步嘅心情"
    ],
    "nameEn": " ",
    "nameCn": "黃啟樂"
  },
  {
    "type": "SMILE",
    "href": "https://youtu.be/CJEE6UQKPes",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem14.avif",
    "text": [
      "唔洗戴Con係一種",
      "解脫!可以好瀟灑咁",
      "出門口"
    ],
    "nameEn": " ",
    "nameCn": "尹焯熙"
  }
];

/**
 * 3. SMILE Pro 專頁用家分享 (SMILE_PRO_SHARE_DATA - 16 筆)
 */
export const SMILE_PRO_SHARE_DATA: ShareItem[] = [
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/YAGjW1TSCqg",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-028-v1.avif",
    "text": [
      "同隱形眼鏡正式分手～"
    ],
    "nameEn": "Cathy",
    "nameCn": "王嘉慧"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/NtULZl7qUEg",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-027-v1.avif",
    "text": [
      "真實用家共同見證",
      "「真實」自己"
    ],
    "nameEn": "",
    "nameCn": "群星"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/LvVdc3l7XpE",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-026-v1.avif",
    "text": [
      "清楚咗 唱Live都放鬆咗"
    ],
    "nameEn": "Aerent",
    "nameCn": "文凱婷"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/kPM1KMcAwss",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-025-v1.avif",
    "text": [
      "做SMILE Pro梗係搵",
      "希瑪!"
    ],
    "nameEn": "GM",
    "nameCn": "曾展望"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/Z-jpOoOpMEg",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-024-v1.avif",
    "text": [
      "穿搭由眼睛開始自由"
    ],
    "nameEn": "Gi",
    "nameCn": "樊沛珈"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/iNu-uMliXNA",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-023-v1.avif",
    "text": [
      "唔使再忍受除戴Con嘅",
      "痛苦"
    ],
    "nameEn": "Nicholas",
    "nameCn": "阮浩棕"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/tcvQgB4IXDk",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-022-v1.avif",
    "text": [
      "做咗SMILE Pro 2年",
      "都仲睇得咁清楚"
    ],
    "nameEn": "Maggie",
    "nameCn": "米姬"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/Z5ut-9tIhmo",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-021.avif",
    "text": [
      "唔洗矇查查周圍搵眼鏡"
    ],
    "nameEn": "Sarah",
    "nameCn": "李蒨怡"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/857FwJQu7OA",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-020.avif",
    "text": [
      "無咗眼鏡都一樣做到唔",
      "同活動"
    ],
    "nameEn": "Jay",
    "nameCn": "沈以諾"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/TBI6J31JwJQ",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem2.avif",
    "text": [
      "做咗就可以好似我依家",
      "咁方便㗎喇"
    ],
    "nameEn": "Carmen",
    "nameCn": "倪嘉雯"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/vxeN1wXeZ5M",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem3.avif",
    "text": [
      "好舒服之下就完成咗成",
      "個過程"
    ],
    "nameEn": "Maggie",
    "nameCn": "米姬"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/10KYv_gGgWM",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem5.avif",
    "text": [
      "無哂Con帶嚟嘅麻煩，",
      "促進咗眼神交流"
    ],
    "nameEn": " ",
    "nameCn": "Anson Au"
  },
  {
    "type": "SMILE Pro",
    "href": "https://www.youtube.com/watch?v=1p5Qm_772jI",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem7.avif",
    "text": [
      "做完SMILE Pro",
      "上舞台都唔會驚光"
    ],
    "nameEn": " ",
    "nameCn": "細貓"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/kVEJ-PN4AJo",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem8.avif",
    "text": [
      "我問自己點解唔早啲做",
      "SMILE Pro呢!"
    ],
    "nameEn": " ",
    "nameCn": "Cindy Wong"
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/VoGlE1dJPhc",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem9.avif",
    "text": [
      "做完幾個月視力都維持",
      "到非常之清"
    ],
    "nameEn": "Pinky",
    "nameCn": ""
  },
  {
    "type": "SMILE Pro",
    "href": "https://youtu.be/1Ic0z7wiVv8",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem10.avif",
    "text": [
      "唔洗花時間戴Con，可",
      "以直接出門練習，非常",
      "方便"
    ],
    "nameEn": "Tiffany",
    "nameCn": "鄧伊程"
  }
];

/**
 * 4. SMILE 微笑矯視專頁用家分享 (SMILE_SHARE_DATA - 32 筆，含 squareimg 頭像供 SwiperRound 軌道輪播)
 */
export const SMILE_SHARE_DATA: RelexSmileShareItem[] = [
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/TGxol6pNXSY",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-001.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-001.avif",
    "text": [
      "就算落雨都唔會再影響",
      "到我跑步嘅心情"
    ],
    "nameEn": "",
    "nameCn": "黃啟樂"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/CJEE6UQKPes",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-002.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-002.avif",
    "text": [
      "唔洗戴Con係一種",
      "解脫!可以瀟灑出門口"
    ],
    "nameEn": "",
    "nameCn": "尹焯熙"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/tLsWfdZy4P4",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-003.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-003.avif",
    "text": [
      "一行出去已經感受到",
      "原來我望嘢可以咁清楚"
    ],
    "nameEn": "",
    "nameCn": "馬燕茹"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/_wk_gZGzB1s",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-004.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-004.avif",
    "text": [
      "做完多咗眼神交流",
      "傳波都準咗"
    ],
    "nameEn": "",
    "nameCn": "李旭川"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/qBsPhkIaVfo",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-005.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-005.avif",
    "text": [
      "想做就去做啦!"
    ],
    "nameEn": "",
    "nameCn": "游嘉欣"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/oHDOFYMEUsk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-006.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-006.avif",
    "text": [
      "終於可以掉咗",
      "縮細眼嘅眼鏡"
    ],
    "nameEn": "Shirley Chan",
    "nameCn": "陳欣妍"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/nrsLktnnW_I",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-007.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-007.avif",
    "text": [
      "過程好似打機咁",
      "好神奇有趣!"
    ],
    "nameEn": "Kathy Ngai",
    "nameCn": "倪安慈"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/XSOzqZD6N8Q",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-008.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-008.avif",
    "text": [
      "過程咩感覺都無",
      "好快 好神奇!"
    ],
    "nameEn": "Donald",
    "nameCn": "唐劍康"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/sw1fxUXMqes",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-009.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-009.avif",
    "text": [
      "視力仲好過未矯視之前"
    ],
    "nameEn": "",
    "nameCn": "麥秋成"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/HfA2NBsMVWQ",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-010.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-010.avif",
    "text": [
      "做完好似戴咗Con咁，",
      "連瞓覺都feel到自己睇",
      "得好清楚咁"
    ],
    "nameEn": "Jacky Tong",
    "nameCn": "唐浩然"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/dyzeGWTk8Dk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-011.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-011.avif",
    "text": [
      "做咗SMILE有",
      "更多精力應付工作"
    ],
    "nameEn": "Charlotte",
    "nameCn": "張沛樂"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/g0sWFw1YAs0",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-012.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-012.avif",
    "text": [
      "彈結他幾投入睇嘢",
      "都唔矇"
    ],
    "nameEn": "Cath Wong",
    "nameCn": "黃妍"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/1WR18ptmCuQ",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-013.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-013.avif",
    "text": [
      "做SMILE過程",
      "都無感覺"
    ],
    "nameEn": "Aka",
    "nameCn": "趙慧珊"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/bwQMHStnXCk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-014.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-014.avif",
    "text": [
      "就算以後唔可以戴Con",
      "都唔怕 因為我已經做",
      "咗SMILE"
    ],
    "nameEn": "",
    "nameCn": "張名雅"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/inD-CATvEl4",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-015.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-015.avif",
    "text": [
      "同學生對打都唔怕Con",
      "移位"
    ],
    "nameEn": "Anthony",
    "nameCn": "李偉志"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/dYYyN9YZGQg",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-017.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-017.avif",
    "text": [
      "做SMILE原來",
      "早做早享受"
    ],
    "nameEn": "",
    "nameCn": "杜詠彤"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/T3K97UlXpHg",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-018.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-018.avif",
    "text": [
      "以後跳繩集中",
      "都唔怕眼乾"
    ],
    "nameEn": "",
    "nameCn": "何柱霆"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/WlFqNfq5jkI",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-019.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-019.avif",
    "text": [
      "原來世界可以咁清楚"
    ],
    "nameEn": "",
    "nameCn": "盧善琳"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/Z9s3c5Thu7w",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-020.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-020.avif",
    "text": [
      "過程比我想像中快"
    ],
    "nameEn": "Ceci Wu",
    "nameCn": ""
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/o2n03FVGWbk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-021.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-021.avif",
    "text": [
      "做完成個世界唔同咗"
    ],
    "nameEn": "",
    "nameCn": "釗峰"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/05NSqdF7nz0",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-022.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-022.avif",
    "text": [
      "做完好感動",
      "開心到想喊"
    ],
    "nameEn": "Mandy",
    "nameCn": "文荻"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/nagwW6CP1iU",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-023.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-023.avif",
    "text": [
      "早啲做SMILE慳好多",
      "買Con錢 好抵!"
    ],
    "nameEn": "Natalie",
    "nameCn": "方敏婷"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/tJ3MHvKagMk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-024.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-024.avif",
    "text": [
      "長期長時間戴Con人士",
      "要做SMILE!"
    ],
    "nameEn": "",
    "nameCn": "伍富橋"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/c6dwJ1Cbgxw",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-025.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-025.avif",
    "text": [
      "好似瞓一覺就做完咁"
    ],
    "nameEn": "kelly Ng",
    "nameCn": "伍樂怡"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/L5GFWM7Fxqs",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-026.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-026.avif",
    "text": [
      "拍嘢睇Mon唔洗再俾",
      "眼鏡壓住"
    ],
    "nameEn": "Dominic Ho",
    "nameCn": "何浩文"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/Udnsv_lOr74",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-027.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-027.avif",
    "text": [
      "做咗SMILE就唔會再",
      "錯過同囡囡每個",
      "珍貴Moment"
    ],
    "nameEn": "Daniel Chau",
    "nameCn": "周志康"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/JCzzO4Y0kko",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-028.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-028.avif",
    "text": [
      "每一次擘大眼都",
      "懷疑自己係咪唔記得除",
      "Con既感覺"
    ],
    "nameEn": "Ada",
    "nameCn": "姜咏鑫"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/JD5GGTg01to",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-029.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-029.avif",
    "text": [
      "做完好似重生",
      "換咗對新嘅眼咁!"
    ],
    "nameEn": "Hubert",
    "nameCn": "胡鴻鈞"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/NF_S1R9DhNk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-033.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-033.avif",
    "text": [
      "唔止視力穩定 心理上",
      "都穩定咗"
    ],
    "nameEn": "Scarlett",
    "nameCn": "莎拉"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/7T_ATu8-Vn8",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-030.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-030.avif",
    "text": [
      "揸車唔洗換眼鏡",
      "安全好多"
    ],
    "nameEn": "Brian Wong",
    "nameCn": "黃千庭"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/KslMZ0PY2fg",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-031.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-031.avif",
    "text": [
      "原來做SMILE唔痛",
      "仲好快"
    ],
    "nameEn": "Judy Mok",
    "nameCn": "莫穎彤"
  },
  {
    "type": "SMILE",
    "href": "https://www.youtube.com/embed/jO_h9YqCJzs",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-square-032.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smile/smile-032.avif",
    "text": [
      "長時間專注整蛋糕都唔",
      "眼乾"
    ],
    "nameEn": "Jimmy",
    "nameCn": "劉志穎"
  }
];

/**
 * 5. ICL 晶體植入術專頁用家分享 (ICL_SHARE_DATA - 11 筆)
 */
export const ICL_SHARE_DATA: RelexSmileShareItem[] = [
  {
    "type": "ICL",
    "href": "https://youtu.be/NtULZl7qUEg",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-027-v1.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/smilepro/smilepro-027-v1.avif",
    "text": [
      "真實用家共同見證",
      "「真實」自己"
    ],
    "nameEn": "",
    "nameCn": "群星"
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/M4-FA9U3VPo",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-012-v1.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-012-v1.avif",
    "text": [
      "全天候高清視力",
      "我靠ICL!"
    ],
    "nameEn": "Celina",
    "nameCn": "陳楨怡"
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/D91jSXnpeNc",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-011.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-011.avif",
    "text": [
      "ICL矯視過程講解及",
      "注意事項"
    ],
    "nameEn": "Ting Yan",
    "nameCn": "梁庭欣"
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/PmZk2TtrNBc",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-010.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/orthopedic-video/icl/icl-010.avif",
    "text": [
      "一個「選擇」",
      "睇見自己嘅光芒"
    ],
    "nameEn": "Ting Yan",
    "nameCn": "梁庭欣"
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/fNSShYa7nKk",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem1.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem1.avif",
    "text": [
      "依家一擘大眼就見到",
      "好清楚嘅世界，好立體"
    ],
    "nameEn": "Kathy",
    "nameCn": "王頌茵"
  },
  {
    "type": "ICL",
    "href": "https://www.youtube.com/watch?v=T9g2qoFI9nU",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl1.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl1.avif",
    "text": [
      "夜間高清視力對",
      "夜晚揸車好重要"
    ],
    "nameEn": "Lily",
    "nameCn": ""
  },
  {
    "type": "ICL",
    "href": "https://youtu.be/I2sl4GWqg1w",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem4.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem4.avif",
    "text": [
      "眼鏡由「必須品」",
      "變「奢侈品」"
    ],
    "nameEn": " ",
    "nameCn": "麥沛東"
  },
  {
    "type": "ICL",
    "href": "https://www.youtube.com/watch?v=2t7JjTab4xA",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl2.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl2.avif",
    "text": [
      "好Surprise 做完之後",
      "24小時都睇得咁清"
    ],
    "nameEn": "Phil",
    "nameCn": "林奕匡"
  },
  {
    "type": "ICL",
    "href": "https://www.youtube.com/watch?v=5ihrzFvOy38",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl3.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl3.avif",
    "text": [
      "每日起身唔洗戴Con",
      "慳好多時間 好方便"
    ],
    "nameEn": "Serene Lim ",
    "nameCn": "林宣妤"
  },
  {
    "type": "ICL",
    "href": "https://www.youtube.com/watch?v=CEbbKFeFdnc",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl4.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl4.avif",
    "text": [
      "眼鏡選擇多好多,",
      "世界限制少好多"
    ],
    "nameEn": "Kwan Gor",
    "nameCn": "吳業坤"
  },
  {
    "type": "ICL",
    "href": "https://www.youtube.com/watch?v=e-c_qRuvWTA",
    "squareimg": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl5.avif",
    "img": "https://static.cmermedical.com.hk/smile/assets/VisionCorrectionCenter/userShare/boxShareItem-icl5.avif",
    "text": [
      "做咗ICL 夜晚湊小朋友",
      "唔洗開燈都睇得清楚"
    ],
    "nameEn": "Tiffany Poon",
    "nameCn": ""
  }
];
