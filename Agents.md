# 希瑪微笑矯視中心 (CMER Smile 2026) - Agent 開發與商業級重構核心準則 (AGENTS.md)

> **最高原則 (Supreme Mandate)**：
> 本項目為「香港希瑪微笑矯視中心 (CMER Smile)」2026 年 Astro 現代化商業級重構項目。
> 網站承載高權重 Google Ads / Meta 廣告投放與嚴格的醫療合規審計。重構的核心使命是**「視覺與文案 100% 精確對齊線上官網、代碼潔淨語意化、零 JS 骨架、極致性能」**。
> **杜絕任何 AI 幻覺式美化、杜絕文案擅自潤色或改寫、杜絕破壞轉換追蹤埋點**。重構必須以「確定性驗證」為唯一準繩。

---

## 0. 商業重構三大紅線與四大防護閘門 (Commercial Guardrails)

在 Google Ads 醫療廣告投放場景下，一次文案改動、免責聲明缺失或轉換按鈕屬性丟失，會直接導致帳戶被拒審、封號甚至承擔醫療廣告合規責任。所有開發與 AI 操作必須受到以下閘門嚴密約束：

### 🚨 三大商業紅線 (Zero-Tolerance Red Lines)
1. **文案與法律免責聲明 0 篡改 (Copywriting Parity)**：
   - 包含醫療免責聲明、費用細則、專科醫生名銜、真實用戶評價、診所電話 (`tel:`)、診症須知等，**必須與線上官網一字不差**。
   - 嚴禁 AI 進行概括潤色、詞句提煉、擅自翻譯或編造展示數據。
2. **廣告轉換與追蹤矩陣 0 丟失 (Conversion Tracking Parity)**：
   - 所有轉化按鈕與鏈接必須精確保留相應 `data-cta`、`data-gtm-*` 與 WhatsApp 追蹤代碼（如 `W-15`, `W-05`, `W-02`, `WSPC-2025` 等，嚴格遵循 `docs/WHATSAPP_TRACKING_MATRIX.md`）。
   - 嚴禁漏掉任何 GTM 觸發錨點，杜絕廣告部門轉換事件流失。
3. **視覺佈局 1:1 像素級吻合 (Visual Layout Parity)**：
   - 拒絕「AI 自以為好看」的隨意調整（如隨意修改特定 padding、字階、卡片圓角、陰影或隱藏元素）。
   - 響應式斷點與排版層次必須嚴絲合縫對齊原官網。

### 🛡️ 四大工程防護閘門 (4-Gate Verification Pipeline)
* **閘門 1：數據與文本解耦 (Data-First Architecture)**
  - 頁面業務文案、醫生名單、費用清單、FAQ 等內容，必須先抽離至獨立數據字典 (`src/i18n/` 或 `src/data/`)。組件層只負責數據渲染，從物理架構上杜絕 AI 在 HTML 模板中隨意改寫文案。
* **閘門 2：真值文本提取與哈希凍結 (Ground Truth Integrity Check)**
  - 重構每個頁面前，先從線上官網 (`https://smile.hkcmereye.com`) 或舊項目渲染 DOM 中機械提取純文本、超鏈接與關鍵屬性，作為標準 Truth 基準。
  - 重構構建後對比抽取文本，若免責聲明少字、電話變更或埋點丟失，立即攔截。
* **閘門 3：雙端視覺差分回歸比對 (Visual Regression Testing)**
  - 核心 Section 必須透過本機/Playwright 截圖比對線上官網 Desktop (1440px) 與 Mobile (375px) 渲染效果。
  - 樣式修改以像素差異為依據，徹底告別容易疲勞漏檢的肉眼審查。
* **閘門 4：防 CLS 靜態渲染守護 (CLS Protection Gate)**
  - 全局基礎樣式靜態置於 `src/styles/comm.css`，輪播基礎樣式靜態置於 `src/styles/swiper-base.css`（僅在含輪播的路由引入），**嚴禁在客戶端 `<script>` 中動態 import CSS**。
  - 首屏 Banner、首屏大圖、Header 必須宣告確定的寬高比例 (`aspect-ratio` / `width` / `height`)，杜絕一切首屏跳動與抖動。

---

## 1. 運行環境與工具鏈約束 (Environment & Tooling)

1. **唯一包管理器**：
   - 項目統一且**唯一使用 `pnpm`**（如 `pnpm dev`, `pnpm build`, `pnpm check:all`, `pnpm lint:fix`）。嚴禁使用 `npm` / `yarn`，嚴禁提交 `package-lock.json` 或 `yarn.lock`。
2. **代碼與規範校驗**：
   - 提交前必須保證 `pnpm check:all` (Astro Check + TypeScript + ESLint + Stylelint) 0 錯誤、0 警告。
3. **自動化腳本**：
   - 數據遷移、文本分析與比對腳本，統一使用 Node.js (ESM) 執行。

---

## 2. 路由與 URL 絕對一致性 (零 404 容忍)

1. **大小寫與路徑 100% 精確匹配**（嚴禁擅自扁平化或改小寫）：
   - `/smilePro`（大寫 P）、`/FreQuestions`（大寫 FQ）、`/ophthalmicInfo/AppointForm`、`/vision-correction/relex-smile`、`/smileProCare` 等必須嚴格保留。
2. **多語言路由策略**：
   - **繁體中文 (zh-HK)**：默認無前綴（如 `/`, `/smilePro`, `/fee`, `/group-profile`）。
   - **簡體中文 (zh-CN)**：統一 `/cn/` 前綴（如 `/cn/`, `/cn/smilePro`, `/cn/fee`, `/cn/group-profile`）。
   - 英文版 (`en`) 暫不上線，路由不對外暴露。
3. **錨點 (Anchor) 必須嚴格還原**：
   - 診症須知：`#beforeJiaoShi`, `#inJiaoShi`, `#afterJiaoShi`
   - 常見問題：`#faq-smile`, `#faq-lasik`, `#faq-icl`, `#faq-presbyopia`
   - 老花矯視：`#CorrectionProgram`

---

## 3. 模組化重構執行 SOP (Standard Operating Procedure)

重構任何新頁面時，必須嚴格按照以下標準工序推進，杜絕意識流重寫：

1. **第一步：源碼診斷與線上真值鎖定**
   - 確認線上真實渲染的組件（例如 `/smilePro` 線上實際加載的是 `smile-proV2.vue` 2.0 版，而非歷史棄用的 1.0 版）。
   - 凍結文案與素材資產，將所有文案抽離為結構化數據。
2. **第二步：語意骨架建立 (Semantic Scaffolding)**
   - 使用標準 HTML5 地標標籤（`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`），確立清晰的 `h1` -> `h2` -> `h3` 階層。
   - 零 inline styles，純結構驗證，為 SEO/GEO 奠定爬取基礎。
3. **第三步：Tokens 綁定與防抖動佈局 (Layout & CSS Styling)**
   - 應用 `comm.css` 與 Tailwind 設計規範，絕對禁止未受約束的 `100vw`。
   - 首屏與媒體區塊全面注入骨架佔位與 `aspect-ratio`，杜絕 CLS 偏移。
4. **第四步：雙軌驗證交付 (Integrity & Visual Diff)**
   - 執行靜態代碼校驗：`pnpm check:all`。
   - 執行構建驗證：`pnpm build`。
   - 透過截圖比對 Desktop 與 Mobile 兩端視覺差異，確認無誤後方可交付。

---

## 4. HTML5 語意骨骼地標與 GEO/SEO 規範 (Semantic Landmarks)

為確保 Googlebot、Gemini、Applebot 等 AI GEO 爬蟲精準解析頁面拓撲結構，骨架必須採用標準語意地標：

1. **核心地標標籤**：
   - **`<header>`**：頂部全域導航、Logo 與語言切換。
   - **`<nav aria-label="...">`**：所有主導航、移動端菜單、麵包屑導航。
   - **`<main id="main-content">`**：每個頁面**有且僅有 1 個 `<main>`**。
   - **`<section aria-labelledby="heading-id">`**：獨立業務板塊，並與其 `<h2>` 標題 ID 綁定。
   - **`<article>`**：獨立內容實體（科普文章、案例分享、FAQ 卡片、大使卡片）。
   - **`<aside>`**：側邊浮動條、移動端快捷底欄、推薦區塊。
   - **`<address>`**：診所門市聯絡資訊（地址、電話、營業時間）。
   - **`<figure>` / `<figcaption>`**：眼部構造圖、手術流程圖與圖說。
2. **唯一 `<h1>` 與 Heading 階層規範**：
   - 每個頁面**必須且只能有 1 個 `<h1>`**。首頁若無視覺大標題，必須使用 Tailwind 無障礙隱藏類 `sr-only`（**嚴禁使用 `display: none`，會被 Google 視為作弊懲罰**）。
   - 標題層級嚴格遞減 (`h1` -> `h2` -> `h3`)，嚴禁跨級跳躍（如 `h1` 直接到 `h4`/`h5`）。
3. **圖片 `alt` 語意**：
   - 內容圖片必須包含具體業務關鍵詞的 `alt` 描述，純裝飾圖標記 `aria-hidden="true"`。
4. **AI 智能體支援 (llms.txt)**：
   - 網站根目錄提供標準 `/llms.txt`，遵循 llmstxt.org 規範，便利 LLM 索引。

---

## 5. 專業級 TDK 與結構化數據 (Schema.org)

1. **TDK 黃金標準**：
   - **Title (50~60 字符 / 28~32 中文字)**：`【核心業務/主題】 - 【權威賣點】 | 【香港希瑪微笑矯視中心】`，杜絕超長截斷。
   - **Description (120~155 字符 / 70~85 中文字)**：`【受眾痛點 + 醫療方案】 + 【雙旗艦門市 (中環/旺角)】 + 【專科醫生背書】 + 【明確行動呼籲】`，杜絕全站重複。
   - **Keywords**：精選 4~6 個高意圖核心實體詞。
2. **Schema.org 模組化**：
   - 統一調用 `src/components/seo/` 組件庫（`SEOHead`, `SchemaClinic`, `SchemaDoctor`, `SchemaProcedure`, `SchemaFAQ`, `SchemaBreadcrumb`）。
   - 門市地址與經緯度必須嚴格依據中環中建大廈與旺角雅蘭中心官方真實數據。

---

## 6. 前端設計系統與 CSS 工程規範 (Design System & CSS)

全站嚴格遵循 `STYLE_GUIDE.md` 設計系統：
1. **排版字階與字體**：
   - 字體族：中文統一 `var(--font-hk)`，英文數字統一 `var(--font-en)`。
   - 字階：`h1` 24~40px，`h2` 20~32px，`h3` 18~24px，正文 `p` 14~20px (高行距 leading-relaxed / 1.8)。
2. **按鈕規範**：
   - 主按鈕 `.btn-primary`、WhatsApp 轉化 `.btn-whatsapp`、線框按鈕 `.btn-outline`。所有轉化按鈕必須綁定 `data-cta="..."`。
3. **佈局約束與防變形**：
   - 嚴禁濫用無邊界 `vw` 單位（特別是 `width: 100vw` 容易導致捲軸跳動），必須使用 Tailwind 標準斷點 (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)、`100%` 或 `clamp()` 限制上下界。
   - 統一使用 `.container` 約束內容寬度，全寬背景區塊在其內部使用 container 實現嚴絲合縫貼邊。
4. **無障礙色彩對比度 (WCAG 2.1 AA)**：
   - 淺色背景下的文字與背景色彩對比度必須達到 **4.5:1 以上**（嚴禁使用過淡的灰色）。
   - 錨點標題自帶 `scroll-margin-top: 5rem`，防止被頂部固定導航遮擋。

---

## 7. 性能優化、零 CLS 抖動與第三方腳本隔離 (Performance & CLS)

1. **零 CLS 抖動鐵律 (Zero CLS Guarantee)**：
   - **靜態 Swiper CSS**：輪播基礎樣式靜態置於 `src/styles/swiper-base.css` 並於含輪播路由引入，禁止在組件 `<script>` 內動態注入。
   - **容器骨架與固定高寬比**：Banner 與所有首屏卡片必須預先宣告 `aspect-ratio`，並在 CSS 中給予靜態 flex/block 佈局，防止 JS 加載前卡片縱向散落堆疊。
   - **Header 零跳動**：導航欄固定尺寸，避免依賴 DOMContentLoaded 計算產生的二次佈局重排。
2. **第三方腳本隔離 (GTM / 在線客服)**：
   - 正式 GTM 容器 ID：`GTM-5M8VLLM`。
   - 追蹤器與商務通客服代碼嚴禁在 `<head>` 同步阻塞加載。必須採用「用戶首次手勢互動 (touchstart/scroll/mousemove) 觸發加載」或延遲 3.5s~5s 加載，確保首屏 TBT < 100ms，移動端 Performance 穩居 85~98 分。
   - 外部商務通彈窗圖片必須由 `MutationObserver` 自動補齊 `alt=""` 與 `aria-hidden="true"` 防止 Lighthouse 扣分。
3. **圖片資產傳輸與 LCP 優化**：
   - 首屏 LCP 核心大圖宣告 `loading="eager"` 與 `fetchpriority="high"`，並提供移動端專屬尺寸；非首屏圖片一律 `loading="lazy"`。
   - 圖片優先轉換為現代無損/高壓縮比 WebP / AVIF 格式。
4. **WhatsApp 業務追蹤**：
   - 各頁面 WhatsApp 按鈕必須嚴格按照 `docs/WHATSAPP_TRACKING_MATRIX.md` 注入相應追蹤代碼（如 `W-15`, `W-05`, `WSPC-2025` 等）。

---

## 8. 數據渲染與 CMS 策略 (SSG + R2 CDN)

1. **靜態預渲染 (SSG First)**：
   - 全站核心業務頁與科普專欄頁於構建期完成純靜態 HTML 預渲染至 `dist/`，部署於 Cloudflare Pages。
2. **靜態資源託管 (Cloudflare R2)**：
   - 全站圖片與影片封面統一託管於 R2 桶 `cloudflarerustcms`（`https://static.cmermedical.com.hk/smile/assets/`）；`smile/uploads/` 目錄嚴禁改動或刪除。
3. **外部 CMS / API 分工**：
   - 預約橫幅與講座排程：`https://cms.cmermedical.com.hk/api/v1/`。
   - 講座報名提交 (`POST /api.php/cms/addmsg`) 與科普專欄列表／詳情 (`/api.php/list/32`、`/api.php/list/35`、`/api.php/content/:id`)：**保留使用 `https://admin.hkcmereye.com`**（構建期 SSG 預渲染 + `_redirects` 轉交 `/blog-article/` 動態兜底）。

---

## 9. Git 倉庫、分支與提交規範 (Git Repo, Branches & Commit Guidelines)

### 倉庫與分支約定
- **唯一有效遠端倉庫**：`https://github.com/cmereye-team/Smile2027_Astro`（remote 名稱 `smile2027`）。
- **分支用途**：
  - `main`：線上正式環境分支（對應 Cloudflare Pages 生產部署 `https://smile.hkcmereye.com`）。
  - `dev`：日常開發分支。
- **已停用倉庫**：`https://github.com/CMER-SZ/smile-astro`（SZ 帳號舊倉）**嚴禁再執行推送**。

### 提交訊息與 Webhook 機器人約制
倉庫已接入 GitHub Webhook 即時推送到團隊釘釘機器人。為杜絕群消息中只顯示被截斷的超長單行標題（如 `feat(faq): ... (verbatim...`），所有 Git Commit 必須嚴格遵循「標題 + 空行 + 條理化正文」結構：

1. **首行標題 (Subject Line) ≤ 50 字符**：
   - 嚴格採用 Conventional Commits 規範：`<type>(<scope>): <精煉主旨>`（如 `fix(booking): 修復報名彈窗首屏可見缺陷`、`feat(fee): 遷移收費專頁`）。
   - **嚴禁超長單行**，確保釘釘推送卡片標題 100% 完整展示、零 `...` 截斷。
2. **正文主體 (Commit Body) 結構化**：
   - 標題下方必須**空一行**，隨後列出改動要點清單（使用 `-` 條列）。
   - 清楚說明：變更根因、核心修復點或受影響模組。
   - 規範範例：
     ```bash
     git commit -m "fix(booking): 修復報名彈窗首屏可見缺陷" -m "- 根因：Scoped CSS .applyDialog 覆蓋 Tailwind hidden 類
     - 修復：預設 display:none，非 hidden 狀態切換 display:flex
     - 驗證：pnpm check:all (0 錯誤 0 警告) + 雙端無首屏覆蓋"
     ```

---

## 10. 全站設計系統三大強制約束 (Binding Design-System Constraints)

以下為全站開發最高優先級約束，所有頁面與組件必須無條件遵守：

1. **單一全站共享容器 (One Shared Container)**：
   - 全站統一使用單一共享容器工具類 `.site-container`（向後相容 `.new-container` / `.container`），其 `max-width` 與兩側邊距 `padding` 僅在公共樣式表 (`src/styles/comm.css`) 中定義一次（對齊已驗收的 `/fee` 頁面真值尺寸：最大寬度 1320px，在 `min-width: 1139px` 為 `1140px`，在 `min-width: 1310px` 為 `1320px`）。
   - 各頁面與板塊嚴禁定義自有的頁面級 `max-width` 包裹層（Page-level max-width wrappers），嚴禁定義近乎重複的容器類名或 ID。
   - 僅允許極少數真正特殊的特殊佈局（如三欄式服務頁）或全寬色彩色帶（Full-bleed colour bands）；但全寬色帶的內部內容仍必須嵌套單一共享容器。

2. **原生語意優先 (Native Semantics First)**：
   - 凡是 HTML 原生元素能提供行為的場景，強制優先使用原生元素，嚴禁濫用 `div + JS` 模擬：
     - 折疊與手風琴內容必須使用 `<details>` / `<summary>`（利用原生 `name` 屬性實現互斥手風琴，零客戶端 JS 依賴）。
     - 彈窗與對話框使用原生 `<dialog>`。
     - 樣式狀態（如展開、激活、圖標切換）一律基於原生屬性（如 `details[open]`, `summary`）由純 CSS 實現。

3. **FAQ 雙軌結構化數據規範 (FAQ Double Structured Data)**：
   - FAQ 頁面必須強制承載雙重結構化數據：
     1. 頂部 `FAQPage` JSON-LD (`<SchemaFAQ />` 或 `application/ld+json`)；
     2. FAQ 元素本體上的 Microdata 語意標記（在每個問題項目上標記 `itemscope itemtype="https://schema.org/Question"`、問題標題標記 `itemprop="name"`、答案容器標記 `itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"`、答案文本標記 `itemprop="text"`）。

---

## 11. 容器與動態標準 (Container and Motion Standards)

1. **Page-level horizontal bounds are set ONLY by the shared `.site-container` class**, defined once in `src/styles/comm.css` (width 100%, margin-inline auto, padding-inline 15px / 10px under 360px, max-width 1140px from 1139px viewport, 1320px from 1310px viewport; values via CSS variables).
2. **Banned as page-level containers**: `new-container`, `banner-container`, `header-container`, `intro-container`, `subnav-container`, `page_container`, `lbv-banner-container`, and page-level Tailwind max-w wrappers (`max-w-[1240px]`, `max-w-4xl/5xl/6xl` and similar).
   - **Registered exceptions**: `smile-layout-container` (the three-rail relex-smile layout) and full-bleed colour bands whose inner content uses `.site-container`.
   - **Component-internal containers** (`swiper-container`, `fee-table-container`, `avatar-container`, video containers, `popover-container`) are not page containers and must never set page bounds.
3. **Motion tokens live in `comm.css`**:
   - `--dur-fast: 150ms`, `--dur: 250ms`, `--dur-slow: 400ms`
   - `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`
   - All non-essential animation is disabled under `prefers-reduced-motion`.
   - Animate only `transform` and `opacity` (the details height technique excepted).

---
*文檔由 Antigravity Agent 自動維護 | 版本：2026.11*
