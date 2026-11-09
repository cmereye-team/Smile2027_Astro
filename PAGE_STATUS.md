# 希瑪微笑矯視中心 (CMER Smile 2026) - 唯一進度真值表 (PAGE_STATUS.md)

> **文檔定位**：本文件為項目重構唯一進度真值基準。本著「說真話、動真格、講客觀事實」原則，所有統計均基於本地源碼物理檔案逐行審計與實測驗證，杜絕任何概念欺詐與虛假進度。
> **更新時間**：2026-11-09

---

## 一、第 0 步：Git 一致性閘門審計結論

### 1. 本地舊站代碼倉庫 (`smile2024`)
- **遠端倉庫**：`origin https://github.com/cmereye-team/smile.git`
- **當前分支**：`main`
- **當前 HEAD Commit**：`30de29ad21e8cf5c9c38379ab3cd6c2dc9bb805a`
- **Commit 日期**：Thu Sep 17 09:38:40 2026 +0800
- **Commit 作者**：谭洁莹 <blacktree@qq.com>
- **Commit 標題**：`Merge branch 'dev'`
- **與線上 GitHub 倉庫 `origin/main` 比較**：
  - `git rev-list --left-right --count HEAD...origin/main` -> `0 0`
  - **客觀結論：本地與線上 GitHub main 分支處於完全一致的同一個 Commit（ahead 0 / behind 0）**。
- **本地未提交變更狀態**：
  - 本地存在歷史工作遺留的未提交刪除變更（涉及部分舊 components 與 pages 下的已廢棄 Vue 檔案）及未追蹤檔案（`asset_favicon.png`, `del/`）。
  - 按用戶防破壞授權指令：**保持原狀，未執行任何 reset、stash、pull 或 merge 操作**。

### 2. 2026 重構項目自身代碼倉庫 (`smile2026`)
- **遠端倉庫**：`origin https://github.com/CMER-SZ/smile-astro.git`
- **當前分支**：`dev`
- **當前 HEAD Commit**：`bcecea6ad940f82711c464bf3e1b54a490571759`

---

## 二、第 1 步：全站路由物理進度真值矩陣

對 `smile2026/src/pages/[...lang]/` 下全部物理檔案逐個檢查行數、結構與內容真實性：

| 序號 | 路由路徑 (Route) | 物理檔案路徑 | 行數 | 檔案大小 | 真實狀態標記 | 實質內容與業務區塊描述 | 對應舊站 Nuxt 原型 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/` (及 `/cn/`) | `index.astro` | 523 | 18.4 KB | 🟢 **完整交付** | 首頁全套切片完成：BannerSwiper, QuickReservation, IndexEnvironment, IndexAwards, UserRating 等 | `pages/new-page/home.vue` |
| 2 | `/group-profile` | `group-profile.astro` | 649 | 36.1 KB | 🟢 **完整交付** | 集團簡介全套切片完成：BrandConcept, ServicePhilosophy, EnvironmentalTour, Awards, DoctorIntro | `pages/new-page/group-profile.vue` |
| 3 | `/our-medical-team` | `our-medical-team.astro` | 247 | 9.5 KB | 🟢 **完整交付** | 醫療團隊全套完成：醫生團隊篩選卡片、專利認證、名銜資歷展示 | `pages/new-page/doctor-team.vue` |
| 4 | `/video` | `video.astro` | 58 | 1.8 KB | 🟢 **完整交付** | 個案分享專欄：VideoList、頂部 Banner 與麵包屑 | `pages/new-page/orthopedic-videoV2.vue` |
| 5 | `/contact-us` | `contact-us.astro` | 28 | 741 B | 🟡 **佔位骨架** | 偽內容：僅包含標題與佔位高度 `h-[120vh]`，未接入真實門市地圖與資訊 | `pages/contactus000/index.vue` |
| 6 | `/ophthalmicInfo/AppointForm` | `ophthalmicInfo/AppointForm.astro` | 21 | 703 B | 🟡 **佔位骨架** | 偽內容：僅包含文字段落與佔位高度 `h-[120vh]`，未接入講座報名表單 | `components/content/ophthalmicInfo/serveYyue` |
| 7 | `/vision-correction/relex-smile` | `vision-correction/relex-smile.astro` | 1375 | 41.0 KB | 🟢 **完整交付** | SMILE 微笑激光矯視全套實質內容切片完成：HeroBanner, Principles, StepsInteractive, WhyChoose, UserShare, Fee, Benefit, ConditionCheck, SmileXtra, Exercise, SchemaProcedure, SchemaBreadcrumb, SchemaFAQ 等 | `pages/new-page/smileV2.vue` |
| 8 | `/vision-correction-lasik` | `vision-correction-lasik.astro` | 17 | 435 B | 🟡 **佔位骨架** | 偽內容：僅包含 LASIK 標題 | `pages/new-page/lasik.vue` |
| 9 | `/fee` | `fee.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="fee">` 佔位，無實質內容 | `pages/new-page/new-feeV2.vue` |
| 10 | `/FreQuestions` | `FreQuestions.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="faq">` 佔位，無實質內容 | `pages/FreQuestions/index.vue` |
| 11 | `/smilePro` | `smilePro.astro` | 862 | 38.2 KB | 🟢 **完整交付** | SMILE Pro 2.0 微笑激光矯視全套實質內容完成：HeroBanner, Tip, Summary, Video, Pro2Intro, WhyChoose, FourFeature, PriceCards, DifferenceTable, Steps2/1, SuitableCheck, UserShare, UserRating, SchemaProcedure, SchemaBreadcrumb 等 | `pages/new-page/smile-proV2.vue` |
| 12 | `/vision-correction-icl` | `vision-correction-icl.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="icl">` 佔位，無實質內容 | `pages/new-page/iclV2.vue` |
| 13 | `/vision-correction-presbyopia` | `vision-correction-presbyopia.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="presbyopia">` 佔位，無實質內容 | `pages/lbv/index.vue` |
| 14 | `/patient-info` | `patient-info.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="patientInfo">` 佔位，無實質內容 | `pages/new-page/patient-info.vue` |
| 15 | `/medical-equipment` | `medical-equipment.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="equipment">` 佔位，無實質內容 | `pages/new-page/equipment.vue` |
| 16 | `/blog` | `blog.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="knowledge">` 佔位，無實質內容 | `pages/new-page/blog.vue` |
| 17 | `/disclaimer` | `disclaimer.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="about">` 佔位，無實質內容 | 免責聲明頁面 |
| 18 | `/privacy-policy` | `privacy-policy.astro` | 10 | 261 B | 🔴 **空殼 (10行)** | 僅 `<BaseLayout tdkKey="about">` 佔位，無實質內容 | 私隱條款頁面 |

### 缺失路由清單 (目前 src/pages 下尚無對應物理檔案)
1. ❌ `/booking`（預約頁面）
2. ❌ `/eye-examination`（檢查須知頁面，需重定向或獨立頁）
3. ❌ `/flow-of-vision-correction`（手術流程頁面，需重定向或獨立頁）
4. ❌ `/post-corrective-care`（術後護理頁面，需重定向或獨立頁）
5. ❌ `/ophthalmicInfo/mediaCov`（媒體報導頁面）
6. ❌ `/blog/[id]`（科普文章動態詳情頁面，SSG/SSR）

---

## 三、第 2 步：SEO / GEO 地基審計與補漏結論

### 1. BaseLayout → SEOHead 引用鏈
- **Canonical**：已實現在 `SEOHead.astro`，自我參照標準化宣告。
- **Hreflang**：嚴格生成雙向國際化標籤：
  - `hreflang="zh-HK"` 指向當前乾淨繁體 URL
  - `hreflang="zh-CN"` 指向對應 `/cn/` 簡體 URL
  - `hreflang="x-default"` 指向繁體默認 URL
- **社交分享**：完整輸出 `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale` 及 `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`。
- **Robots**：已輸出 `<meta name="robots" content="index, follow" />`。
- **TDK Key 映射修正**：已將全站 18 個頁面中原先隨意指派的 `tdkKey="about"` 或 `tdkKey="home"` 徹底更正為與 `src/i18n/zh-hk/tdk.ts` 和 `zh-cn/tdk.ts` 精確匹配的鍵（如 `fee`, `faq`, `smilepro`, `icl`, `lasik`, `presbyopia`, `patientInfo`, `equipment`, `contact`, `appointForm`, `knowledge`, `smile`）。

### 2. Schema.org 組件矩陣
- `SchemaClinic.astro`：已封裝雙旗艦門市（中環中建大廈 1512 室、旺角雅蘭中心一期 1725B 室）、WebSite、Organization、Person（林順潮專科醫生）及 MedicalWebPage，**已在 `src/layouts/BaseLayout.astro` 默認全站掛載**。
- `SchemaDoctor.astro`：已於 `our-medical-team.astro` 掛載。
- `SchemaBreadcrumb.astro`, `SchemaFAQ.astro`, `SchemaProcedure.astro`：組件庫已備齊，已於 `vision-correction/relex-smile.astro`（SMILE 手術、FAQ 與麵包屑）完整掛載。

### 3. AI 智能體索引標準 (`public/llms.txt`)
- 已新建並校正 `smile2026/public/llms.txt`。
- **零杜撰文案**：僅包含真實站名、14 大核心服務頁絕對網址，以及 STYLE_GUIDE 第 5 節與 SchemaClinic 的真實門市地址與電話（中環: 3956 2026 / 旺角: 3892 5099）。

---

## 四、第 3 步：共用組件與追蹤矩陣審計結論

### 1. 全局共用組件單一引用驗證
- 經全站代碼庫掃描核實：`Header`, `Footer`, `MobileBottom`, `SidebarDesktop`, `LiveChat`, `Backtop`, `ShareMobile` **有且僅在 `src/layouts/BaseLayout.astro` 中引用 1 次**，無任何子頁面重複引用。

### 2. HTML5 語意地標與重複 ID 修正
- **問題發現**：原 `group-profile.astro`（第 38 行）與 `our-medical-team.astro`（第 49 行）內部重複包裹了 `<main id="main-content">`，導致頁面出現 2 個 `<main>` 地標以及全站重複的 `id="main-content"`。
- **動真格修復**：已將這兩個頁面內部的 `<main id="main-content">` 徹底修正為 `<div class="...">`。
- **驗證結論**：全站 `<main id="main-content">` 現已唯一收歸 `BaseLayout.astro`，全站 ID 重複數降為 **0**。

### 3. GTM-5M8VLLM 追蹤載入改造
- **原狀**：原代碼中 GTM 被全量註釋停用。
- **改造落實**：按 `Agents.md` 第 7 節商業規範，在 `BaseLayout.astro` 注入「手勢互動 (`scroll`, `mousemove`, `touchstart`, `click`) 觸發載入 + 4 秒超時兜底載入」腳本，徹底杜絕同步阻塞，保護移動端 PageSpeed / TBT < 100ms；同時恢復標準 `<noscript>` 標籤。

### 4. 全站 WhatsApp CTA 與追蹤屬性
- 全站 Header、MobileBottom、SidebarDesktop、UserRating、GroupProfile、Index 各轉換點已均勻掛鉤 `data-cta="whatsapp"`、`data-cta="lecture"`、`data-cta="patient_info"` 等標準埋點。
