# 香港希瑪微笑矯視中心 (CMER Smile) — Astro 靜態站點

生產域名：`https://smile.hkcmereye.com`  
部署平台：Cloudflare Pages（輸出目錄 `dist/`，純靜態預渲染 SSG）

## 技術棧與環境要求

- Node.js `>= 22.12.0`
- 包管理器：`pnpm`（鎖定 `pnpm@11.3.0`，不支援 `npm` / `yarn`）
- 框架與樣式：`Astro 7.2.9`、`Tailwind CSS 4.3.3`、`Sass`
- 圖標與輪播：`astro-icon`（`src/icons/`）、`Swiper 14`（僅於含輪播路由載入）
- 字體：本地自託管 `@fontsource/poppins`（僅 Latin 子集 `400/500/600/700`）
- 無前端框架運行時（已移除 Vue 與 GSAP）

## 常用指令

```bash
pnpm install        # 安裝依賴
pnpm dev            # 本地開發伺服器 (http://localhost:4001)
pnpm check:all      # 依序執行 astro check、eslint、stylelint
pnpm build          # 建置靜態站點至 dist/
pnpm preview        # 本地預覽 dist/
pnpm deploy:cf      # 本地構建並透過 wrangler 部署至 Cloudflare Pages
```

## 目錄結構

```text
src/
├── components/
│   ├── booking/    # 預約橫幅組件
│   ├── common/     # 通用組件 (SiteLogo, VideoFacade 等)
│   ├── global/     # 全站外殼 (Header, Footer, SidebarDesktop, MobileBottom, LiveChat, Backtop, ShareMobile)
│   ├── seo/        # SEOHead 與 JSON-LD Schema 組件 (Clinic, Doctor, Procedure, FeeCatalog, Equipment, FAQ, Breadcrumb)
│   └── views/      # 業務區塊組件 (VideoList, BlogArticleView, UserShare, UserRating 等)
├── data/           # 結構化業務數據 (feeData, videoData, bookingData, smileProData, presbyopiaData, faqData 等)
├── i18n/           # 繁體 (zh-hk) 與簡體 (zh-cn) 文案及 TDK 字典
├── icons/          # astro-icon SVG 圖標 (21 檔，已納入 Git)
├── layouts/        # BaseLayout.astro
├── pages/
│   ├── 404.astro   # 自訂 404 頁面 (noindex, nofollow)
│   └── [...lang]/  # 雙語路由入口 (繁體無前綴，簡體 /cn/ 前綴)
└── styles/         # comm.css (全局樣式)、swiper-base.css (輪播靜態樣式)、單頁 SCSS
public/
├── _headers        # Cloudflare Pages 快取 (/assets/* immutable) 與安全標頭
├── _redirects      # /sitemap-index.xml 301 及 /blog/:id 動態兜底規則
├── robots.txt      # 爬蟲規則與 /sitemap.xml 宣告
├── llms.txt        # 雙語站點結構與診所資訊摘要
└── favicon* / icon-*.png / apple-touch-icon.png / site.webmanifest
```

## 路由與多語系

- 語系：`zh-HK`（根路徑 `/`）與 `zh-CN`（`/cn/` 前綴），`trailingSlash: "always"`。不啟用英文路由。
- 大小寫敏感路徑保留：`/smilePro/`、`/smileProCare/`、`/FreQuestions/`、`/ophthalmicInfo/AppointForm/`、`/ophthalmicInfo/mediaCov/`、`/vision-correction/relex-smile/`。
- 必要頁面錨點：
  - `/patient-info/`：`#beforeJiaoShi`、`#inJiaoShi`、`#afterJiaoShi`
  - `/FreQuestions/`：`#faq-smile`、`#faq-lasik`、`#faq-icl`、`#faq-presbyopia`
  - `/vision-correction-presbyopia/`：`#CorrectionProgram`
- 靜態建置輸出共 55 頁（含 `/404.html` 與繁簡雙語業務頁及科普文章預渲染頁）。

## 靜態資源與外部介面

- **圖片 CDN**：全站靜態媒體統一託管於 Cloudflare R2 桶 `cloudflarerustcms`，公開域名 `https://static.cmermedical.com.hk/smile/assets/`（光柵圖為 WebP，影片封面維持 AVIF，圖標為 SVG）。構建期無本地圖片轉檔步驟。
- **同源資源**：`src/icons/*.svg` 與根目錄 `favicon*` / `icon-192.png` / `icon-512.png` / `apple-touch-icon.png` 隨倉庫保留於同源。
- **外部 API**：
  - 預約橫幅與講座日曆／排程：`https://cms.cmermedical.com.hk/api/v1/`
  - 講座報名提交：`POST https://admin.hkcmereye.com/api.php/cms/addmsg`
  - 科普專欄列表與詳情：`https://admin.hkcmereye.com/api.php/{list/32,list/35,content/:id}`（構建期 SSG 預渲染；新發佈文章 ID 由 `_redirects` 轉交 `/blog-article/` 動態載入）
- **第三方追蹤與客服**：GTM 容器 `GTM-5M8VLLM` 與商務通在線客服採互動或延遲觸發載入。

## SEO 與結構化資料

- **Sitemap**：`@astrojs/sitemap` 於構建期生成並透過 `astro.config.mjs` hook 輸出主檔 `/sitemap.xml` 及 `/sitemap-0.xml`（含雙語 `xhtml:link`，排除 `/404` 與 `/blog-article/`）。`/sitemap-index.xml` 301 重定向至 `/sitemap.xml`。
- **JSON-LD**：
  - `SchemaClinic.astro`：`WebSite`、`MedicalOrganization`（透過 `parentOrganization` 單層關聯 `希瑪醫療控股有限公司 / HKG 3309`）、`Person/Physician`、`MedicalWebPage` 及中環／旺角門市 `MedicalClinic`（含 `GeoCoordinates`）。
  - 其餘專頁按需輸出 `SchemaProcedure`、`SchemaFeeCatalog`、`SchemaDoctor`、`SchemaEquipment`、`SchemaFAQ`、`SchemaBreadcrumb`。
  - FAQ 頁面採 JSON-LD 與 HTML Microdata 雙軌標記。

## 分支與 Cloudflare Pages 部署規則

- `main`：正式環境上線分支。
- `dev`：日常開發分支。
- Cloudflare Pages **Build watch paths（包括路徑）** 建議白名單（排除路徑留空）：

```text
src/*
public/*
astro.config.mjs
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
tsconfig.json
wrangler.toml
```

## 本地環境變數

本地 `.env`（受 `.gitignore` 忽略，不入庫）用於本機部署與 R2 靜態資源同步工具，包含 `CLOUDFLARE_ACCOUNT_ID`、`CLOUDFLARE_API_TOKEN` 及 `R2_*` 欄位。線上 Cloudflare Pages 靜態構建無需額外環境變數。
