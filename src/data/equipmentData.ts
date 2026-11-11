/*
 * @Author: Antigravity AI
 * @Date: 2026-11-11
 * @FilePath: /src/data/equipmentData.ts
 * @Description: 中心設備專頁繁簡雙語數據字典 (100% 對齊線上官網逐字真值)
 */

export interface EquipmentItem {
  id: number;
  img: string;
  alt: string;
  nameLines: string[];
  remark: string;
  source: string;
}

export interface EquipmentPageContent {
  breadcrumb: {
    home: string;
    current: string;
  };
  banner: {
    title: string;
    subtitleHtml: string;
  };
  sectionTitle: string;
  seeAllLabel: string;
  toggleAriaLabel: string;
  items: EquipmentItem[];
}

export const EQUIPMENT_ZH_HK: EquipmentPageContent = {
  "breadcrumb": {
    "home": "首頁",
    "current": "中心設備"
  },
  "banner": {
    "title": "中心設備",
    "subtitleHtml": "Central <br class=\"mbShow\" />equipment"
  },
  "sectionTitle": "中心設備",
  "seeAllLabel": "觀看更多",
  "toggleAriaLabel": "查看設備詳情",
  "items": [
    {
      "id": 27,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-027-v1.webp",
      "alt": "Alcon VERION 術中定位系統",
      "nameLines": [
        "Alcon VERION 術中定位系統",
        "（Alcon VERION Image Guided System）"
      ],
      "remark": "整合「術前影像量測」、「手術規劃」及「術中導航」三大功能，透過數碼化系統處理，能大幅減少人手轉錄與標記所產生的誤差。系統專為提升手術精準度而設，能優化散光及多焦點人工水晶體的定位。",
      "source": "資料及圖片來源：Alcon"
    },
    {
      "id": 26,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-026-v2.webp",
      "alt": "ZEISS PRESBYOND",
      "nameLines": [
        "ZEISS PRESBYOND",
        "500Hz MEL90"
      ],
      "remark": "Zeiss PRESBYOND 500Hz MEL90 結合 MEL 90 準分子雷射與 PRESBYOND Laser Blended Vision 軟體，能提供雙眼切換視力矯正，讓患者在近距離、中距離及遠距離皆能清晰視物。系統採用 500Hz 高頻雷射，可在約 1.3 秒內完成 1D 近視的矯正，同時配備 1050Hz 眼球追蹤技術，大幅提升手術精準度與安全性，達成理想的矯視效果。",
      "source": "資料及圖片來源：Carl Zeiss"
    },
    {
      "id": 1,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-001-v2.webp",
      "alt": "ZEISS VISUMAX 800",
      "nameLines": [
        "ZEISS VISUMAX 800",
        "SMILE®pro 2.0"
      ],
      "remark": "VISUMAX 800新增的智能眼球與旋轉偵測和視覺中心定位功能可以實現更準確和個性化的治療，以滿足每位病人的需求。最新的技術可以在不到10秒鐘的時間內完成晶狀體切割，從而縮短整個吸附時間。",
      "source": "資料及圖片來源： Carl Zeiss"
    },
    {
      "id": 2,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/f434fa3c9560d7c6.png",
      "alt": "Carl Zeiss Visumax",
      "nameLines": [
        "Carl Zeiss Visumax",
        "全飛秒激光3.0系統"
      ],
      "remark": "SMall Incision Lenticule Extraction (SMILE 微笑激光矯視) 透過使用飛秒激光，在角膜內注入極微細的激光氣泡，直接切割角膜的中層部分，同時會開一個2毫米的小切口，醫生將已切割的角膜部份從切口取出，令角膜弧度改變以達至矯視效果。",
      "source": "資料及圖片來源： Carl Zeiss"
    },
    {
      "id": 3,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4e22294924611584.png",
      "alt": "德國蔡司掃頻OCT生物測量儀",
      "nameLines": [
        "德國蔡司掃頻<br class=\"mbShow\">OCT生物測量儀",
        "（IOL Master 700）"
      ],
      "remark": "蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。",
      "source": "資料及圖片來源： Carl Zeiss"
    },
    {
      "id": 4,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/d9a4ebd0979eb0ad.png",
      "alt": "Icare回彈式眼壓計",
      "nameLines": [
        "Icare回彈式眼壓計"
      ],
      "remark": "Icare眼壓計是一種自用型掌上型設備，採用回彈法檢測。眼壓計使用一個小且輕的一次性探頭與眼睛進行很短暫的接觸。眼壓計測量探頭的減速和回彈時間，並根據這些參數計算眼壓。",
      "source": "資料及圖片來源：Icare Finland"
    },
    {
      "id": 5,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/17d09f2b2552fb10.png",
      "alt": "日本尼德克",
      "nameLines": [
        "日本尼德克",
        "綜合電腦驗光儀"
      ],
      "remark": "日本尼德克綜合電腦驗光儀具有「四合一」的檢查功能，其檢查項目分別是：視力、電腦驗光、角膜曲率、眼壓，快速獲得病人屈光狀態的性質和範圍，提供準確的球鏡、柱鏡、柱鏡軸位。 資料來日本尼德克綜合電腦驗光儀具有「四合一」的檢查功能，其檢查項目分別是：視力、電腦驗光、角膜曲率、眼壓，快速獲得病人屈光狀態的性質和範圍，提供準確的球鏡、柱鏡、柱鏡軸位。",
      "source": "資料及圖片來源：NIDEK"
    },
    {
      "id": 6,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/91cae30bfe64c887.png",
      "alt": "日本尼德克",
      "nameLines": [
        "日本尼德克",
        "手持綜合電腦驗光儀"
      ],
      "remark": "手持設電腦驗光儀，使用靈活，可進行臥式驗光，臺式驗光及手持驗光，適用於從兒童到成人全年齡段，準確檢查角膜屈光度、角膜散光度、角膜散光軸度、球面度、柱面度、最小瞳孔直徑等數據。",
      "source": "資料及圖片來源：NIDEK"
    },
    {
      "id": 7,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/e09ae8645106fe23.png",
      "alt": "天狼星三維角膜地形圖",
      "nameLines": [
        "天狼星三維角膜地形圖",
        "及眼前節分析系統"
      ],
      "remark": "將Placido環和Scheimpflug相機三維掃描技術相結合三維斷層掃描角膜及前房，獲取角膜前後表面和前房精確的圖像數據，並且可以提供瞳孔直徑測量模擬不同光強測量瞳孔直徑。",
      "source": "資料及圖片來源： CSO"
    },
    {
      "id": 8,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/a61d712eb35ef590.png",
      "alt": "Pentacam® ",
      "nameLines": [
        "Pentacam® ",
        "三維眼前節分析診斷系統"
      ],
      "remark": "德國歐科路公司生產的Pentacam®，採用的Scheimpflug技術，專利的旋轉360°掃描，獲取眼前節多重圖像，生成眼前節三維立體圖，計算角膜、前房和晶狀體的各種測量值。可廣泛應用於准分子矯視、視光RGP、角膜病、青光眼和白內障等疾病的診療。",
      "source": "資料及圖片來源：Oculus"
    },
    {
      "id": 9,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/1bb210c58784b1c0.png",
      "alt": "德國蔡司眼前節",
      "nameLines": [
        "德國蔡司眼前節",
        "OCT分析系統"
      ],
      "remark": "眼前節OCT高解析度圖像可顯示角膜厚度及基質內反射的改變，可定量測量角膜上皮分佈，以幫助檢查角膜基質層異常及比較激光矯視術後的角膜上皮復原情況。也可以用於監測ICL植入術後的晶體位置。同時也對診斷圓錐角膜、基質角膜炎、角膜水腫等角膜疾病有重要幫助。",
      "source": "資料及圖片來源：Carl Zeiss"
    },
    {
      "id": 10,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/2c4cff31c0a31522.png",
      "alt": "德國蔡司角膜地形圖系統",
      "nameLines": [
        "德國蔡司角膜地形圖系統",
        "(ATLAS 9000)"
      ],
      "remark": "通過將Atlas® Placido環技術和Visante OCT角膜測厚技術融合在一起，Visante omni可提供全面的角膜前表面和角膜後表面地形圖資訊。SmartCapture™智能圖像分析技術會在拍攝過程中分析多張圖像，並自動選擇好品質的圖像。MasterFit™ II角膜接觸鏡軟體無縫驗配RGP接觸鏡。",
      "source": "資料及圖片來源：Carl Zeiss"
    },
    {
      "id": 11,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/bf7b6a0bef660626.png",
      "alt": "德國蔡司光學相干斷層掃描儀",
      "nameLines": [
        "德國蔡司光學<br class=\"mbShow\">相干斷層掃描儀",
        "(CIRRUS HD-OCT5000)"
      ],
      "remark": "蔡司相干光學斷層掃描器(OCT)，是一種新的光學診斷技術，具有非侵入性、非接觸性的特點。OCT對青光眼的早期診斷和臨床追蹤觀察有較大幫助。OCT對眼底疾病的診斷也有其不可或缺的作用，尤其對視神經（如視神經炎、視神經萎縮），黃斑疾病（如特發性黃斑裂孔、黃斑前膜），視網膜脫離等有較大的輔助診斷作用。",
      "source": "蔡司相干光學斷層掃描器(OCT)，是一種新的光學診斷技術，具有非侵入性、非接觸性的特點。OCT對青光眼的早期診斷和臨床追蹤觀察有較大幫助。OCT對眼底疾病的診斷也有其不可或缺的作用，尤其對視神經（如視神經炎、視神經萎縮），黃斑疾病（如特發性黃斑裂孔、黃斑前膜），視網膜脫離等有較大的輔助診斷作用。"
    },
    {
      "id": 12,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/9215afd7f26f11e5.png",
      "alt": "德國蔡司免散瞳彩色",
      "nameLines": [
        "德國蔡司免散瞳彩色",
        "眼底照相機(VISUCAM500)"
      ],
      "remark": "VISUCAM® 500 具備經典蔡司光學的免散瞳彩色眼底照相及血管造影儀。眼底影像及血管造影是一種檢查而並非治療，運用染色追蹤的方法去評估眼底視網膜之血液循環。檢查進行時，螢光劑會被注射入血管。當它隨血液流到視網膜時,就即時對眼底進行一連串的拍攝。透過觀察螢光劑流動的形態就可幫助診斷眼底疾病。",
      "source": "資料及圖片來源： Carl Zeiss"
    },
    {
      "id": 13,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/8d48fd9571a47602.webp",
      "alt": "A型及B型超聲波掃描儀",
      "nameLines": [
        "A型及B型超聲波掃描儀"
      ],
      "remark": "A型超聲用於眼軸長短的測量，眼部異常組織織標準超聲的檢測； B型超聲用於玻璃體混濁、玻璃體積血、視網膜脈絡膜脫離等病變的檢查。",
      "source": "資料及圖片來源：Quantel Medical"
    },
    {
      "id": 14,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/5aacde002af24ada.webp",
      "alt": "全視網膜掃描相機",
      "nameLines": [
        "全視網膜掃描相機",
        "（Optos Daytona）"
      ],
      "remark": "Daytona可在不用放大瞳孔的情況下掃描80%的眼底視網膜，比傳統眼底相機檢查範圍多4倍，並且可以快速的檢查周邊視網膜，儘早發現視網膜病變及排除潛在的風險。",
      "source": "資料及圖片來源： Optos"
    },
    {
      "id": 15,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4b8f230a2d7a956d.png",
      "alt": "角膜內皮層細胞分析儀",
      "nameLines": [
        "角膜內皮層細胞分析儀",
        "(KONAN NSP-9900)"
      ],
      "remark": "角膜內皮細胞分析儀用作檢查角膜內皮層細胞,是一項重要的篩選角膜疾病的工具，在進行白內障手術或ICL晶體植入手術前進行角膜健康評估,對於處理戴隱形眼鏡導致眼角膜缺氧，Fuchs角膜內皮營養不良，錐形角膜和角膜創傷等的個案，提供了清晰的圖像資料及準確的數據。",
      "source": "資料及圖片來源：Konan"
    },
    {
      "id": 16,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/a01cb16a551eb1ce.png",
      "alt": "德國蔡司視野分析儀",
      "nameLines": [
        "德國蔡司視野分析儀"
      ],
      "remark": "Humphery HFA3是全電腦控制的視野檢查和分析系統，作為視野測量的標準，用於診斷和跟進青光眼、視網膜色素病變和其他影響視野的病症所引起的視野缺損 (如腦神經腫瘤)，從而診斷及觀察視覺及腦神經各種症狀情況，是一項重要的檢查。",
      "source": "資料及圖片來源：Carl Zeiss"
    },
    {
      "id": 17,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/c7a828125d9153ac.png",
      "alt": "FORUM – 眼科專業化",
      "nameLines": [
        "FORUM – 眼科專業化",
        "數據管理平臺"
      ],
      "remark": "FORUM是蔡司為眼科專門提供的數據存儲及眼科專業化數據管理系統，可連結來自不同檢查設備的患者資料，有效甄別、管理每個患者的詳盡數據。特別是眼底疾病及青光眼專科工作平臺，可對治療前後的多模影像進行對比，並提供精確的定量分析，有利於對病患進行個性化治療與跟進。",
      "source": "資料及圖片來源：Carl Zeiss"
    },
    {
      "id": 18,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/993e14dfac448fa5.png",
      "alt": "Haag-Streit BQ900 裂隙燈",
      "nameLines": [
        "Haag-Streit BQ900<br class=\"mbShow\">裂隙燈",
        "&IM900裂隙燈照相系統"
      ],
      "remark": "Haag-Streit BQ900高清晰裂隙燈及IM 900照相系統，幫助醫生用於臨床檢查眼瞼、結膜、角膜，虹膜、前房、晶狀體、視網膜、黃斑點、視神經等的健康。",
      "source": "資料及圖片來源：Haag-Streit"
    },
    {
      "id": 19,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/2a24a1b68dc187d6.webp",
      "alt": "ELLEX Integre pro scan",
      "nameLines": [
        "ELLEX Integre pro scan",
        "眼底鐳射治療儀"
      ],
      "remark": "矩陣式多波長點陣掃描眼底激光治療儀可為有適應症之糖尿病及其他視網膜病變患者, 提供更佳療效。矩陣式點陣掃描鐳射, 達到治療效果的同時，同時是微創技術，降低風險, 減少患者的疼痛和不適感，且配合多波長, 可針對不同眼睛狀況, 提供更有效率治療。",
      "source": "資料及圖片來源：Ellex"
    },
    {
      "id": 20,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/9561a582b715533f.png",
      "alt": "PESCHKE Trade PXL",
      "nameLines": [
        "PESCHKE Trade PXL",
        "Platinum 330"
      ],
      "remark": "角膜膠原交聯術(Corneal Collagen Cross-Linking) 一般應用在臨床錐形角膜或可疑圓錐角膜，亦可以應用在接受激光矯視的人士。 角膜局部予核黃素（Riboflavin；即維生素B2，用於增加能量吸收並釋出活性氧），再經本儀器發出紫外線（UVA）照射，令角膜組織釋放一些粒子，使纖維中的膠原蛋白緊扣一起，因此而變得堅韌穩定，鞏固角膜基質強度，減少術後角膜變形的可能性,深度近視或散光的情況下可能減少度數反彈的機會和程度。",
      "source": "資料及圖片來源：Peschke"
    },
    {
      "id": 21,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4bb384e3fe377bb6.png",
      "alt": "Ellex Tango Reflex",
      "nameLines": [
        "Ellex Tango Reflex",
        "激光治療儀"
      ],
      "remark": "Tango ReflexEllex 的新型 Tango Reflex™ 激光治療儀結合了多種治療平臺 — — 可進行青光眼選擇性小樑整型激光(Selective Laser Trabeculoplasty, SLT) 治療，YAG後囊激光切開治療，以及微創玻璃體消融術。",
      "source": "資料及圖片來源：Ellex"
    },
    {
      "id": 22,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/d11dd8d263f2f6a0.png",
      "alt": "飛秒激光白內障矯視儀",
      "nameLines": [
        "飛秒激光白內障矯視儀"
      ],
      "remark": "飛秒激光白內障矯視儀是新一代飛秒激光白內障手術儀，集三維影像及導航技術於一身，能分析眼部結構及為眼睛描繪出立體三維圖，幫助為手術作出精密的計算及預測。新一代飛秒激光輔助矯視白內障手術採用全電腦控制的紅外線激光進行三個步驟，包括角膜切口，撕囊及擊碎晶體。使醫生可以精確地進行切割及均勻地擊碎晶體，不論在切割形狀及深度上更趨精細，以準確地植入人工晶體，使晶體位置較準確，提高多焦晶體的精準度及術後視力質量，由於新技術安全、可靠及精準度極高，可以減低手術創傷、術後感染、發炎等併發症。",
      "source": "資料及圖片來源：Alcon"
    },
    {
      "id": 23,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/a50ca0c214529046.webp",
      "alt": "徠卡Proveo8融合光學",
      "nameLines": [
        "徠卡Proveo8融合光學",
        "眼科手術顯微鏡"
      ],
      "remark": "徠卡Proveo8融合光學眼科手術顯微鏡採用Fusion Optics融合光學技術增加安全性，打破顯微鏡的傳統光學，使鏡下景深和清晰度同時達到較佳狀態，使得醫生在手術過程中，即使大倍數下，眼內結構由角膜到視網膜依然清晰可見，增加安全性；廣角、擴大的視野對患者傷害更小，增加安全的同時，提高手術效率，LED低功率柔光照明減少對患者的光毒性傷害，較能保護眼睛。",
      "source": "資料及圖片來源：Leica"
    },
    {
      "id": 24,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/bb7c87b456ee6118.png",
      "alt": "白內障超聲乳化儀（Alcon",
      "nameLines": [
        "白內障超聲乳化儀（Alcon",
        "Centurion® vision system）"
      ],
      "remark": "愛爾康主動液流白內障晶體超聲乳化儀為新一代白內障超聲乳化儀，旋切式白內障乳化術(OZil Torsional), 進階微創傷口治療。提高超音波乳化效率，縮短手術時間，減少對角膜的熱傷害，增加手術安全。新一代高效率主動穩壓系統，較能使眼內壓穩定、安全。 配備AutoSert晶體自動植入手柄，協助進行自動化人工晶體植入。",
      "source": "資料及圖片來源：Alcon"
    },
    {
      "id": 25,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/ed06ff1c76aaed7d.png",
      "alt": "高速率玻切超聲乳化一體機",
      "nameLines": [
        "高速率玻切超聲乳化一體機",
        "（Alcon Constellation®",
        "vision system）"
      ],
      "remark": "美國愛爾康公司Constellation Vision System 微創玻璃體超聲乳化一體機能協助進行微創視網膜手術。作為眼科的尖端手術，其創傷小，安全性高，並且可同時進行白內障、視網膜聯合手術，減少手術次數，避免多次手術對眼睛結構的損傷，傷口也不需要縫合，復原速度大為縮短。",
      "source": "資料及圖片來源：Alcon"
    }
  ]
};

export const EQUIPMENT_ZH_CN: EquipmentPageContent = {
  "breadcrumb": {
    "home": "首页",
    "current": "中心设备"
  },
  "banner": {
    "title": "中心设备",
    "subtitleHtml": "Central <br class=\"mbShow\" />equipment"
  },
  "sectionTitle": "中心设备",
  "seeAllLabel": "观看更多",
  "toggleAriaLabel": "查看设备详情",
  "items": [
    {
      "id": 27,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-027-v1.webp",
      "alt": "Alcon VERION 术中定位系统",
      "nameLines": [
        "Alcon VERION 术中定位系统",
        "（Alcon VERION Image Guided System）"
      ],
      "remark": "整合「术前影像量测」、「手术规划」及「术中导航」三大功能，透过数码化系统处理，能大幅减少人手转录与标记所产生的误差。系统专为提升手术精准度而设，能优化散光及多焦点人工水晶体的定位。",
      "source": "资料及图片来源：Alcon"
    },
    {
      "id": 26,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-026-v2.webp",
      "alt": "ZEISS PRESBYOND",
      "nameLines": [
        "ZEISS PRESBYOND",
        "500Hz MEL90"
      ],
      "remark": "Zeiss PRESBYOND 500Hz MEL90 结合 MEL 90 准分子雷射与 PRESBYOND Laser Blended Vision 软体，能提供双眼切换视力矫正，让患者在近距离、中距离及远距离皆能清晰视物。系统采用 500Hz 高频雷射，可在约 1.3 秒内完成 1D 近视的矫正，同时配备 1050Hz 眼球追踪技术，大幅提升手术精准度与安全性，达成理想的矫视效果。",
      "source": "资料及图片来源：Carl Zeiss"
    },
    {
      "id": 1,
      "img": "https://statichk.cmermedical.com/smile/equipment/equipment-001-v2.webp",
      "alt": "ZEISS VISUMAX 800",
      "nameLines": [
        "ZEISS VISUMAX 800",
        "SMILE®pro 2.0"
      ],
      "remark": "VISUMAX 800新增的智能眼球与旋转侦测和视觉中心定位功能可以实现更准确和个性化的治疗，以满足每位病人的需求。最新的技术可以在不到10秒钟的时间内完成晶状体切割，从而缩短整个吸附时间。",
      "source": "资料及图片来源： Carl Zeiss"
    },
    {
      "id": 2,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/f434fa3c9560d7c6.png",
      "alt": "Carl Zeiss Visumax",
      "nameLines": [
        "Carl Zeiss Visumax",
        "全飞秒激光3.0系统"
      ],
      "remark": "SMall Incision Lenticule Extraction (SMILE 微笑激光矫视) 透过使用飞秒激光，在角膜内注入极微细的激光气泡，直接切割角膜的中层部分，同时会开一个2毫米的小切口，医生将已切割的角膜部份从切口取出，令角膜弧度改变以达至矫视效果。",
      "source": "资料及图片来源： Carl Zeiss"
    },
    {
      "id": 3,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4e22294924611584.png",
      "alt": "德国蔡司扫频OCT生物测量仪",
      "nameLines": [
        "德国蔡司扫频<br class=\"mbShow\">OCT生物测量仪",
        "（IOL Master 700）"
      ],
      "remark": "蔡司IOLMaster 700具有扫频生物测量技术，建立在近20年的光学生物测量经验的基础上。凭借全角膜曲率测量（TK），获得专利的角膜到视网膜扫描显示了贯穿整个眼睛的纵向切面的解剖细节。在白内障手术过程中，获取一个参考图像，并将其用于术中图像的匹配。",
      "source": "资料及图片来源： Carl Zeiss"
    },
    {
      "id": 4,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/d9a4ebd0979eb0ad.png",
      "alt": "Icare回弹式眼压计",
      "nameLines": [
        "Icare回弹式眼压计"
      ],
      "remark": "Icare眼压计是一种自用型掌上型设备，采用回弹法检测。眼压计使用一个小且轻的一次性探头与眼睛进行很短暂的接触。眼压计测量探头的减速和回弹时间，并根据这些参数计算眼压。",
      "source": "资料及图片来源：Icare Finland"
    },
    {
      "id": 5,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/17d09f2b2552fb10.png",
      "alt": "日本尼德克",
      "nameLines": [
        "日本尼德克",
        "综合电脑验光仪"
      ],
      "remark": "日本尼德克综合电脑验光仪具有「四合一」的检查功能，其检查项目分别是：视力、电脑验光、角膜曲率、眼压，快速获得病人屈光状态的性质和范围，提供准确的球镜、柱镜、柱镜轴位。 资料来日本尼德克综合电脑验光仪具有「四合一」的检查功能，其检查项目分别是：视力、电脑验光、角膜曲率、眼压，快速获得病人屈光状态的性质和范围，提供准确的球镜、柱镜、柱镜轴位。",
      "source": "资料及图片来源：NIDEK"
    },
    {
      "id": 6,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/91cae30bfe64c887.png",
      "alt": "日本尼德克",
      "nameLines": [
        "日本尼德克",
        "手持综合电脑验光仪"
      ],
      "remark": "手持设电脑验光仪，使用灵活，可进行卧式验光，台式验光及手持验光，适用于从儿童到成人全年龄段，准确检查角膜屈光度、角膜散光度、角膜散光轴度、球面度、柱面度、最小瞳孔直径等数据。",
      "source": "资料及图片来源：NIDEK"
    },
    {
      "id": 7,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/e09ae8645106fe23.png",
      "alt": "天狼星三维角膜地形图",
      "nameLines": [
        "天狼星三维角膜地形图",
        "及眼前节分析系统"
      ],
      "remark": "将Placido环和Scheimpflug相机三维扫描技术相结合三维断层扫描角膜及前房，获取角膜前后表面和前房精确的图像数据，并且可以提供瞳孔直径测量模拟不同光强测量瞳孔直径。",
      "source": "资料及图片来源： CSO"
    },
    {
      "id": 8,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/a61d712eb35ef590.png",
      "alt": "Pentacam® ",
      "nameLines": [
        "Pentacam® ",
        "三维眼前节分析诊断系统"
      ],
      "remark": "德国欧科路公司生产的Pentacam®，采用的Scheimpflug技术，专利的旋转360°扫描，获取眼前节多重图像，生成眼前节三维立体图，计算角膜、前房和晶状体的各种测量值。可广泛应用于准分子矫视、视光RGP、角膜病、青光眼和白内障等疾病的诊疗。",
      "source": "资料及图片来源：Oculus"
    },
    {
      "id": 9,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/1bb210c58784b1c0.png",
      "alt": "德国蔡司眼前节",
      "nameLines": [
        "德国蔡司眼前节",
        "OCT分析系统"
      ],
      "remark": "眼前节OCT高解析度图像可显示角膜厚度及基质内反射的改变，可定量测量角膜上皮分布，以帮助检查角膜基质层异常及比较激光矫视术后的角膜上皮复原情况。也可以用于监测ICL植入术后的晶体位置。同时也对诊断圆锥角膜、基质角膜炎、角膜水肿等角膜疾病有重要帮助。",
      "source": "资料及图片来源：Carl Zeiss"
    },
    {
      "id": 10,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/2c4cff31c0a31522.png",
      "alt": "德国蔡司角膜地形图系统",
      "nameLines": [
        "德国蔡司角膜地形图系统",
        "(ATLAS 9000)"
      ],
      "remark": "通过将Atlas® Placido环技术和Visante OCT角膜测厚技术融合在一起，Visante omni可提供全面的角膜前表面和角膜后表面地形图资讯。SmartCapture™智能图像分析技术会在拍摄过程中分析多张图像，并自动选择好品质的图像。MasterFit™ II角膜接触镜软体无缝验配RGP接触镜。",
      "source": "资料及图片来源：Carl Zeiss"
    },
    {
      "id": 11,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/bf7b6a0bef660626.png",
      "alt": "德国蔡司光学相干断层扫描仪",
      "nameLines": [
        "德国蔡司光学<br class=\"mbShow\">相干断层扫描仪",
        "(CIRRUS HD-OCT5000)"
      ],
      "remark": "蔡司相干光学断层扫描器(OCT)，是一种新的光学诊断技术，具有非侵入性、非接触性的特点。OCT对青光眼的早期诊断和临床追踪观察有较大帮助。OCT对眼底疾病的诊断也有其不可或缺的作用，尤其对视神经（如视神经炎、视神经萎缩），黄斑疾病（如特发性黄斑裂孔、黄斑前膜），视网膜脱离等有较大的辅助诊断作用。",
      "source": "蔡司相干光学断层扫描器(OCT)，是一种新的光学诊断技术，具有非侵入性、非接触性的特点。OCT对青光眼的早期诊断和临床追踪观察有较大帮助。OCT对眼底疾病的诊断也有其不可或缺的作用，尤其对视神经（如视神经炎、视神经萎缩），黄斑疾病（如特发性黄斑裂孔、黄斑前膜），视网膜脱离等有较大的辅助诊断作用。"
    },
    {
      "id": 12,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/9215afd7f26f11e5.png",
      "alt": "德国蔡司免散瞳彩色",
      "nameLines": [
        "德国蔡司免散瞳彩色",
        "眼底照相机(VISUCAM500)"
      ],
      "remark": "VISUCAM® 500 具备经典蔡司光学的免散瞳彩色眼底照相及血管造影仪。眼底影像及血管造影是一种检查而并非治疗，运用染色追踪的方法去评估眼底视网膜之血液循环。检查进行时，萤光剂会被注射入血管。当它随血液流到视网膜时,就即时对眼底进行一连串的拍摄。透过观察萤光剂流动的形态就可帮助诊断眼底疾病。",
      "source": "资料及图片来源： Carl Zeiss"
    },
    {
      "id": 13,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/8d48fd9571a47602.webp",
      "alt": "A型及B型超声波扫描仪",
      "nameLines": [
        "A型及B型超声波扫描仪"
      ],
      "remark": "A型超声用于眼轴长短的测量，眼部异常组织织标准超声的检测； B型超声用于玻璃体混浊、玻璃体积血、视网膜脉络膜脱离等病变的检查。",
      "source": "资料及图片来源：Quantel Medical"
    },
    {
      "id": 14,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/5aacde002af24ada.webp",
      "alt": "全视网膜扫描相机",
      "nameLines": [
        "全视网膜扫描相机",
        "（Optos Daytona）"
      ],
      "remark": "Daytona可在不用放大瞳孔的情况下扫描80%的眼底视网膜，比传统眼底相机检查范围多4倍，并且可以快速的检查周边视网膜，尽早发现视网膜病变及排除潜在的风险。",
      "source": "资料及图片来源： Optos"
    },
    {
      "id": 15,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4b8f230a2d7a956d.png",
      "alt": "角膜内皮层细胞分析仪",
      "nameLines": [
        "角膜内皮层细胞分析仪",
        "(KONAN NSP-9900)"
      ],
      "remark": "角膜内皮细胞分析仪用作检查角膜内皮层细胞,是一项重要的筛选角膜疾病的工具，在进行白内障手术或ICL晶体植入手术前进行角膜健康评估,对于处理戴隐形眼镜导致眼角膜缺氧，Fuchs角膜内皮营养不良，锥形角膜和角膜创伤等的个案，提供了清晰的图像资料及准确的数据。",
      "source": "资料及图片来源：Konan"
    },
    {
      "id": 16,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/a01cb16a551eb1ce.png",
      "alt": "德国蔡司视野分析仪",
      "nameLines": [
        "德国蔡司视野分析仪"
      ],
      "remark": "Humphery HFA3是全电脑控制的视野检查和分析系统，作为视野测量的标准，用于诊断和跟进青光眼、视网膜色素病变和其他影响视野的病症所引起的视野缺损 (如脑神经肿瘤)，从而诊断及观察视觉及脑神经各种症状情况，是一项重要的检查。",
      "source": "资料及图片来源：Carl Zeiss"
    },
    {
      "id": 17,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/c7a828125d9153ac.png",
      "alt": "FORUM – 眼科专业化",
      "nameLines": [
        "FORUM – 眼科专业化",
        "数据管理平台"
      ],
      "remark": "FORUM是蔡司为眼科专门提供的数据存储及眼科专业化数据管理系统，可连结来自不同检查设备的患者资料，有效甄别、管理每个患者的详尽数据。特别是眼底疾病及青光眼专科工作平台，可对治疗前后的多模影像进行对比，并提供精确的定量分析，有利于对病患进行个性化治疗与跟进。",
      "source": "资料及图片来源：Carl Zeiss"
    },
    {
      "id": 18,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/993e14dfac448fa5.png",
      "alt": "Haag-Streit BQ900 裂隙灯",
      "nameLines": [
        "Haag-Streit BQ900<br class=\"mbShow\">裂隙灯",
        "&IM900裂隙灯照相系统"
      ],
      "remark": "Haag-Streit BQ900高清晰裂隙灯及IM 900照相系统，帮助医生用于临床检查眼睑、结膜、角膜，虹膜、前房、晶状体、视网膜、黄斑点、视神经等的健康。",
      "source": "资料及图片来源：Haag-Streit"
    },
    {
      "id": 19,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/2a24a1b68dc187d6.webp",
      "alt": "ELLEX Integre pro scan",
      "nameLines": [
        "ELLEX Integre pro scan",
        "眼底镭射治疗仪"
      ],
      "remark": "矩阵式多波长点阵扫描眼底激光治疗仪可为有适应症之糖尿病及其他视网膜病变患者, 提供更佳疗效。矩阵式点阵扫描镭射, 达到治疗效果的同时，同时是微创技术，降低风险, 减少患者的疼痛和不适感，且配合多波长, 可针对不同眼睛状况, 提供更有效率治疗。",
      "source": "资料及图片来源：Ellex"
    },
    {
      "id": 20,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/9561a582b715533f.png",
      "alt": "PESCHKE Trade PXL",
      "nameLines": [
        "PESCHKE Trade PXL",
        "Platinum 330"
      ],
      "remark": "角膜胶原交联术(Corneal Collagen Cross-Linking) 一般应用在临床锥形角膜或可疑圆锥角膜，亦可以应用在接受激光矫视的人士。 角膜局部予核黄素（Riboflavin；即维生素B2，用于增加能量吸收并释出活性氧），再经本仪器发出紫外线（UVA）照射，令角膜组织释放一些粒子，使纤维中的胶原蛋白紧扣一起，因此而变得坚韧稳定，巩固角膜基质强度，减少术后角膜变形的可能性,深度近视或散光的情况下可能减少度数反弹的机会和程度。",
      "source": "资料及图片来源：Peschke   "
    },
    {
      "id": 21,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/4bb384e3fe377bb6.png",
      "alt": "Ellex Tango Reflex",
      "nameLines": [
        "Ellex Tango Reflex",
        "激光治疗仪"
      ],
      "remark": "Tango ReflexEllex 的新型 Tango Reflex™ 激光治疗仪结合了多种治疗平台 — — 可进行青光眼选择性小梁整型激光(Selective Laser Trabeculoplasty, SLT) 治疗，YAG后囊激光切开治疗，以及微创玻璃体消融术。",
      "source": "资料及图片来源：Ellex "
    },
    {
      "id": 22,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/d11dd8d263f2f6a0.png",
      "alt": "飞秒激光白内障矫视仪",
      "nameLines": [
        "飞秒激光白内障矫视仪"
      ],
      "remark": "飞秒激光白内障矫视仪是新一代飞秒激光白内障手术仪，集三维影像及导航技术于一身，能分析眼部结构及为眼睛描绘出立体三维图，帮助为手术作出精密的计算及预测。新一代飞秒激光辅助矫视白内障手术采用全电脑控制的红外线激光进行三个步骤，包括角膜切口，撕囊及击碎晶体。使医生可以精确地进行切割及均匀地击碎晶体，不論在切割形狀及深度上更趋精细，以准确地植入人工晶体，使晶体位置较准确，提高多焦晶体的精准度及术后视力质量，由于新技术安全、可靠及精准度极高，可以减低手术创伤、术后感染、发炎等并发症。",
      "source": "资料及图片来源：Alcon"
    },
    {
      "id": 23,
      "img": "https://statichk.cmermedical.com/smile/medical-equipment/a50ca0c214529046.webp",
      "alt": "徕卡Proveo8融合光学",
      "nameLines": [
        "徕卡Proveo8融合光学",
        "眼科手术显微镜"
      ],
      "remark": "徕卡Proveo8融合光学眼科手术显微镜采用Fusion Optics融合光学技术增加安全性，打破显微镜的传统光学，使镜下景深和清晰度同时达到较佳状态，使得医生在手术过程中，即使大倍数下，眼内结构由角膜到视网膜依然清晰可见，增加安全性；广角、扩大的视野对患者伤害更小，增加安全的同时，提高手术效率，LED低功率柔光照明减少对患者的光毒性伤害，较能保护眼睛。",
      "source": "资料及图片来源：Leica"
    },
    {
      "id": 24,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/bb7c87b456ee6118.png",
      "alt": "白内障超声乳化仪（Alcon",
      "nameLines": [
        "白内障超声乳化仪（Alcon",
        "Centurion® vision system）"
      ],
      "remark": "爱尔康主动液流白内障晶体超声乳化仪为新一代白内障超声乳化仪，旋切式白内障乳化术(OZil Torsional), 进阶微创伤口治疗。提高超音波乳化效率，缩短手术时间，减少对角膜的热伤害，增加手术安全。新一代高效率主动稳压系统，较能使眼内压稳定、安全。 配备AutoSert晶体自动植入手柄，协助进行自动化人工晶体植入。",
      "source": "资料及图片来源：Alcon"
    },
    {
      "id": 25,
      "img": "https://statichk.cmermedical.com/imgs/2024/05/ed06ff1c76aaed7d.png",
      "alt": "高速率玻切超声乳化一体机",
      "nameLines": [
        "高速率玻切超声乳化一体机",
        "（Alcon Constellation®",
        "vision system）"
      ],
      "remark": "美国爱尔康公司Constellation Vision System 微创玻璃体超声乳化一体机能协助进行微创视网膜手术。作为眼科的尖端手术，其创伤小，安全性高，并且可同时进行白内障、视网膜联合手术，减少手术次数，避免多次手术对眼睛结构的损伤，伤口也不需要缝合，复原速度大为缩短。",
      "source": "资料及图片来源：Alcon"
    }
  ]
};
