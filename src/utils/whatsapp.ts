/**
 * WhatsApp 業務鏈接生成器 (WhatsApp URL Generator)
 *
 * 核心原則：
 * 1. 唯一真理源：客服電話統一讀取 Cloudflare Pages 環境變量 (PUBLIC_WHATSAPP_PHONE / PUBLIC_WHATSAPP_CARE_PHONE)。
 * 2. 免動態依賴：構建期 (SSG) 自動完成純靜態 HTML <a href="https://wa.me/..."> 渲染，用戶端零 JS 運算。
 * 3. 極致喚起性能：採用 WhatsApp 原生通用鏈接 (Universal Link: https://wa.me/...)，免去瀏覽器中間等待頁，以最短鏈路喚起 App。
 * 4. 防亂碼防中斷：自動執行 URL 編碼，開發者可直接傳入自然中文、括號與空格。
 */

const DEFAULT_MAIN_PHONE = '85269408569'; // 希瑪微笑矯視主客服專線
const DEFAULT_CARE_PHONE = '85297962992'; // 講座與推廣活動專線

export type PhoneType = 'main' | 'care';

/**
 * 獲取當前環境下的 WhatsApp 客服號碼
 * 優先讀取 Cloudflare Pages 環境變量，本地或未配置時回退至官方默認號碼
 */
export function getWhatsAppPhone(type: PhoneType = 'main'): string {
  if (type === 'care') {
    return (import.meta.env.PUBLIC_WHATSAPP_CARE_PHONE || DEFAULT_CARE_PHONE).replace(/\D/g, '');
  }
  return (import.meta.env.PUBLIC_WHATSAPP_PHONE || DEFAULT_MAIN_PHONE).replace(/\D/g, '');
}

/**
 * 構建標準的 WhatsApp 原生鏈接 (https://wa.me/...)
 * @param text 預填對話文字（如 "我想預約(W-15)矯視前檢查及諮詢"）
 * @param phoneTypeOrCustom 專線類型 ('main' | 'care') 或自定義電話號碼，默認為 'main'
 * @returns 完整的 WhatsApp Universal Link
 */
export function buildWhatsAppUrl(
  text: string,
  phoneTypeOrCustom: PhoneType | string = 'main'
): string {
  const phone =
    phoneTypeOrCustom === 'main' || phoneTypeOrCustom === 'care'
      ? getWhatsAppPhone(phoneTypeOrCustom)
      : phoneTypeOrCustom.replace(/\D/g, '');

  let cleanText = text.trim();
  try {
    cleanText = decodeURIComponent(cleanText);
  } catch {
    // 忽略格式異常，保留原文字
  }
  const encodedText = encodeURIComponent(cleanText);
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}`;
}
