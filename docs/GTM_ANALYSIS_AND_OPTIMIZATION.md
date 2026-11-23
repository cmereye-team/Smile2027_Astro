# 希瑪微笑矯視中心 (CMER Smile) - GTM 容器深度審計與清理指引 (GTM Cleanup & Optimization Guide)

> **文檔目的**：本清單由 AI 深度解析 `GTM-5M8VLLM_workspace159.json` 導出數據生成。為您列出 GTM 後台中**所有可以安全刪除的冗餘/過期標籤與觸發器**，以及**因配置錯誤導致數據異常的觸發器**，方便您在 GTM 後台進行視覺化清理與優化。

---

## 目錄
1. [GTM 建議刪除/清理的冗餘項目清單 (可直接在 GTM 刪除)](#1-gtm-建議刪除清理的冗餘項目清單)
2. [GTM 中發現的重大配置錯誤修正清單](#2-gtm-中發現的重大配置錯誤修正清單)
3. [保留並需重點維護的第三方廣告轉化標籤](#3-保留並需重點維護的第三方廣告轉化標籤)
4. [2026 網站結構如何配合 GTM 保持完美觸發](#4-2026-網站結構如何配合-gtm-保持完美觸發)

---

## 1. GTM 建議刪除/清理的冗餘項目清單

以下項目為歷史過期活動、開發測試殘留或已無效的配置，**可以在 GTM 後台直接刪除或歸檔 (Pause/Delete)**，以大幅精簡容器體積並避免無效 JS 執行：

### 1.1 歷史活動與過期行銷觸發器（可安全刪除）
- [ ] ❌ **觸發器 73 ~ 81：`2025-Game website2025 (*)` 系列觸發器**
  - **具體名稱**：
    - `2025-Game website2025(IG post)_start button` (Trigger ID: 73)
    - `2025-Game website2025(IG post)_CS button` (Trigger ID: 74)
    - `2025-Game website2025(IG post)_CMER web button` (Trigger ID: 75)
    - `2025-Game website2025(Poster)_start button` (Trigger ID: 76)
    - `2025-Game website2025(Poster)_CS button` (Trigger ID: 77)
    - `2025-Game website2025(Poster)_CMER web button` (Trigger ID: 78)
    - `2025-Game website2025(minibus AD)_start button` (Trigger ID: 79)
    - `2025-Game website2025(minibus AD)_CS button` (Trigger ID: 80)
    - `2025-Game website2025(minibus AD)_CMER web button` (Trigger ID: 81)
  - **刪除原因**：針對 2025 年線下小巴廣告、海報及 IG 貼文的歷史小遊戲 (`/2025eyeshealthgame`)，目前活動已結束且頁面已下線。

### 1.2 開發測試殘留觸發器（可安全刪除）
- [ ] ❌ **觸發器 82 & 83：`smilepro页面的匹配DOM / PV`**
  - **具體名稱**：
    - `smilepro页面的匹配DOM` (Trigger ID: 82)
    - `smilepro页面的匹配PVsmilepro页面的匹配smilepro页面的匹配` (Trigger ID: 83)
  - **過濾條件**：`{{Page URL}} contains smilePro/?debug=test`
  - **刪除原因**：早期工程師調試專用的臨時測試觸發器，線上正式環境永遠不會帶有 `?debug=test` 參數。

### 1.3 依賴舊版易碎 CSS 類名的重複觸發器（建議重構或清理）
- [ ] ⚠️ **觸發器 65：`2025-ICL-了解更多`** (依賴 `Click Classes contains latestNews-btn`)
- [ ] ⚠️ **觸發器 68：`2025-LASIK-預約諮詢`** (依賴 `Click Classes contains smile-pro-btn`，LASIK 觸發器卻監聽 smile-pro 類名，邏輯混亂)
- [ ] ⚠️ **觸發器 71：`2025-收費詳情-立即預約`** (依賴 `Click Classes contains meal-btn`)
- [ ] ⚠️ **觸發器 72：`2025-眼睛檢查及矯視前-立即WhatsApp預約`** (過濾條件依賴舊路徑 `/eye-examination`，線上已改為 `/patient-info#beforeJiaoShi`)

---

## 2. GTM 中發現的重大配置錯誤修正清單

以下為 GTM 容器中存在的**邏輯錯誤**，會導致廣告投放轉化數據歸因失真，建議在 GTM 後台進行修正：

| 觸發器名稱 | 目前錯誤的過濾條件 | 導致的問題 | 正確修正建議 |
| :--- | :--- | :--- | :--- |
| **`2025-ICL-預約諮詢`** (Trigger ID: 64) | `{{Page URL}} contains /vision-correction-lasik` 且點擊 WhatsApp | **ICL 預約轉化竟然只在 LASIK 頁面觸發！** 在真正的 ICL 頁面反而無法觸發此標籤！ | 將 Page URL 改為 `contains /vision-correction-icl` |
| **`2025-SMILE -預約諮詢`** (Trigger ID: 66) | `{{Page URL}} contains /relex-smile` 且點擊 WhatsApp | 線上標準路徑為 `/vision-correction/relex-smile`，若用戶從首頁進入可能匹配不精準 | 將 Page URL 包含條件改為 `/vision-correction/relex-smile` |

---

## 3. 保留並需重點維護的第三方廣告轉化標籤

以下為現有 GTM 容器中的核心資產，新站將提供 100% 完整的 DOM 結構與鏈接特徵確保其正常觸發：

1. **Google Analytics 4 (GA4)**：
   - 測量 ID：`G-FN8KFBR9XM` (配置於 GA4 Configuration Tag)
2. **Google Ads 轉換標籤 (Google Ads Conversion Tracking)**：
   - 各業務轉化 Label (SMILE Pro, ICL, LASIK, LBV, 電話撥打, WhatsApp 點擊)
3. **Meta Pixel (Facebook Pixel)**：
   - 包含 PageView, Lead (WhatsApp 點擊與表單諮詢)
4. **小紅書 / Yahoo / 其他第三方行銷代碼**：
   - 保持在 GTM 中按需觸發。

---

## 4. 2026 網站結構如何配合 GTM 保持完美觸發

新版 2026 Astro 代碼將嚴格遵循以下規範，讓您在 GTM 中配置觸發器時極度穩定：

1. **WhatsApp 鏈接規則**：
   - 所有 WhatsApp 按鈕一律以 `https://api.whatsapp.com/send/?phone=...` 格式輸出。
   - 觸發器只需配置：`Click URL contains api.whatsapp.com` 配合 `Page URL contains /smilePro` (或對應頁面路徑)。
2. **電話撥打規則**：
   - 所有電話按鈕一律以 `tel:39562026` 或 `tel:38925099` 格式輸出。
   - 觸發器只需配置：`Click URL starts with tel:`。
3. **表單與按鈕 ID 規範**：
   - 聯絡中心切換：`#clickable-item-center` (中環/矯視中心), `#clickable-item-eye` (眼科門診)。

---
*文檔由 Antigravity Agent 自動維護 | 存檔於 F:\mysite\antigravity\smile2026Revamp\GTM*
