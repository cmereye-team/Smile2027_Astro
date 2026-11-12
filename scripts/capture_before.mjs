import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/李威俊/.gemini/antigravity/brain/9a69e908-3912-4c8f-8c39-b4a54b7b86af/screenshots';
const baseUrl = 'https://2026smile.pages.dev';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const report = {};

  // Helper to take screenshot of element or viewport
  async function snap(url, width, height, selector, filename) {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto(baseUrl + url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));
    
    const filePath = path.join(outDir, filename);
    if (selector) {
      const el = await page.$(selector);
      if (el) {
        await el.scrollIntoView();
        await new Promise(r => setTimeout(r, 500));
        await el.screenshot({ path: filePath });
      } else {
        await page.screenshot({ path: filePath });
      }
    } else {
      await page.screenshot({ path: filePath });
    }
    await page.close();
    return filePath;
  }

  console.log('Capturing BEFORE metrics...');

  // 1. P1: Check 5 pages for scrollWidth vs innerWidth and inner scrollers
  const p1Pages = [
    '/ophthalmicInfo/AppointForm',
    '/vision-correction-lasik',
    '/booking',
    '/vision-correction-presbyopia',
    '/vision-correction-icl'
  ];
  report.p1 = {};
  for (const p of p1Pages) {
    const page1920 = await browser.newPage();
    await page1920.setViewport({ width: 1920, height: 1080 });
    await page1920.goto(baseUrl + p, { waitUntil: 'networkidle2', timeout: 30000 });
    const p1_1920 = await page1920.evaluate(() => {
      const wrapper = document.querySelector('div[class*="overflow-x-"]');
      const innerScrollers = Array.from(document.querySelectorAll('*')).filter(el => {
        const style = window.getComputedStyle(el);
        return (style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight && el !== document.documentElement && el !== document.body;
      }).map(el => el.className);
      return {
        scrollWidth: document.scrollingElement.scrollWidth,
        innerWidth: window.innerWidth,
        wrapperClass: wrapper ? wrapper.className : null,
        wrapperScrollHeight: wrapper ? wrapper.scrollHeight : null,
        wrapperClientHeight: wrapper ? wrapper.clientHeight : null,
        innerScrollers
      };
    });
    await page1920.close();

    const page375 = await browser.newPage();
    await page375.setViewport({ width: 375, height: 812 });
    await page375.goto(baseUrl + p, { waitUntil: 'networkidle2', timeout: 30000 });
    const p1_375 = await page375.evaluate(() => {
      return {
        scrollWidth: document.scrollingElement.scrollWidth,
        innerWidth: window.innerWidth
      };
    });
    await page375.close();

    report.p1[p] = { '1920': p1_1920, '375': p1_375 };
  }

  // 2. P2 & P3: Presbyopia layout & fee
  await snap('/vision-correction-presbyopia/', 1920, 1080, '#CorrectionProgram', 'before_p2_1920.png');
  await snap('/vision-correction-presbyopia/', 375, 812, '#CorrectionProgram', 'before_p2_375.png');

  // Check fee section presence
  const pagePresby = await browser.newPage();
  await pagePresby.setViewport({ width: 1920, height: 1080 });
  await pagePresby.goto(baseUrl + '/vision-correction-presbyopia/', { waitUntil: 'networkidle2' });
  report.p3 = await pagePresby.evaluate(() => {
    return {
      hasFeeH2: Array.from(document.querySelectorAll('h2')).some(h => h.textContent.includes('老花矯視費用')),
      bodyTextIncludesFee: document.body.innerText.includes('老花矯視費用')
    };
  });
  await pagePresby.close();

  // 3. I16 & I17 & I18 & I19: ICL page
  const pageIcl = await browser.newPage();
  await pageIcl.setViewport({ width: 1920, height: 1080 });
  await pageIcl.goto(baseUrl + '/vision-correction-icl/', { waitUntil: 'networkidle2' });
  
  // I16 check gap
  report.i16_1920 = await pageIcl.evaluate(() => {
    const num = document.querySelector('.CheckObject-number');
    const desc = document.querySelector('.CheckObject-description');
    if (!num || !desc) return null;
    const numRect = num.getBoundingClientRect();
    const descRect = desc.getBoundingClientRect();
    const computedGap = descRect.left - numRect.right;
    const numStyle = window.getComputedStyle(num);
    return {
      computedGap,
      marginRight: numStyle.marginRight
    };
  });

  // I17 check font size
  report.i17_1920 = await pageIcl.evaluate(() => {
    const td = document.querySelector('.model-table td');
    const thProj = document.querySelector('.model-table .project-name');
    const thItem = document.querySelector('.model-table .table-item');
    return {
      tdFontSize: td ? window.getComputedStyle(td).fontSize : null,
      tdLineHeight: td ? window.getComputedStyle(td).lineHeight : null,
      thProjFontSize: thProj ? window.getComputedStyle(thProj).fontSize : null,
      thItemFontSize: thItem ? window.getComputedStyle(thItem).fontSize : null
    };
  });

  await pageIcl.close();

  // Check 375 I16 and I17
  const pageIcl375 = await browser.newPage();
  await pageIcl375.setViewport({ width: 375, height: 812 });
  await pageIcl375.goto(baseUrl + '/vision-correction-icl/', { waitUntil: 'networkidle2' });
  report.i16_375 = await pageIcl375.evaluate(() => {
    const num = document.querySelector('.CheckObject-number');
    const desc = document.querySelector('.CheckObject-description');
    if (!num || !desc) return null;
    const numRect = num.getBoundingClientRect();
    const descRect = desc.getBoundingClientRect();
    return {
      computedGap: descRect.left - numRect.right,
      marginRight: window.getComputedStyle(num).marginRight
    };
  });
  report.i17_375 = await pageIcl375.evaluate(() => {
    const td = document.querySelector('.model-table td');
    return {
      tdFontSize: td ? window.getComputedStyle(td).fontSize : null
    };
  });
  await pageIcl375.close();

  // Snap I16 CheckObject
  await snap('/vision-correction-icl/', 1920, 1080, '.CheckObject-List', 'before_i16_1920.png');
  await snap('/vision-correction-icl/', 375, 812, '.CheckObject-List', 'before_i16_375.png');

  // Snap I17 Model Table
  await snap('/vision-correction-icl/', 1920, 1080, '.icl-model', 'before_i17_1920.png');
  await snap('/vision-correction-icl/', 375, 812, '.icl-model', 'before_i17_375.png');

  // Snap I18 Steps
  await snap('/vision-correction-icl/', 1920, 1080, '.icl-introVedio-intro', 'before_i18_step01_1920.png');
  await snap('/vision-correction-icl/', 375, 812, '.icl-introVedio-intro', 'before_i18_step01_375.png');

  // Snap I19 Peculiarity
  await snap('/vision-correction-icl/', 1920, 1080, '.icl-peculiarity', 'before_i19_1920.png');
  await snap('/vision-correction-icl/', 375, 812, '.icl-peculiarity', 'before_i19_375.png');

  // 4. I20: VideoFacade
  await snap('/vision-correction-icl/', 1920, 1080, '.icl-introVedio-vedio-list', 'before_i20_icl_1920.png');
  await snap('/vision-correction-icl/', 375, 812, '.icl-introVedio-vedio-list', 'before_i20_icl_375.png');
  await snap('/patient-info/', 1920, 1080, '#stop-con-heading', 'before_i20_patient_1920.png');
  await snap('/smilePro/', 1920, 1080, '.pro-summary', 'before_i20_smilePro_1920.png');
  await snap('/post-corrective-care/', 1920, 1080, '.precautions-section', 'before_i20_care_1920.png');

  // 5. Section C: Medical equipment
  await snap('/medical-equipment/', 1920, 1080, '#equipment-grid', 'before_c_equipment_1920.png');
  await snap('/medical-equipment/', 375, 812, '#equipment-grid', 'before_c_equipment_375.png');

  // 6. Section D: Fee page table headers
  await snap('/fee/', 1920, 1080, '#table1', 'before_d_fee_1920.png');
  await snap('/fee/', 375, 812, '#table1', 'before_d_fee_375.png');

  // 7. Section E: FAQ answer contrast
  const pageFaq = await browser.newPage();
  await pageFaq.setViewport({ width: 1920, height: 1080 });
  await pageFaq.goto(baseUrl + '/FreQuestions/', { waitUntil: 'networkidle2' });
  // open first faq item
  await pageFaq.evaluate(() => {
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) firstFaq.setAttribute('open', '');
  });
  report.e_faq_1920 = await pageFaq.evaluate(() => {
    const ans = document.querySelector('.faq-answer');
    if (!ans) return null;
    const style = window.getComputedStyle(ans);
    return {
      color: style.color,
      fontWeight: style.fontWeight
    };
  });
  await snap('/FreQuestions/', 1920, 1080, '.faq-item[open]', 'before_e_faq_1920.png');
  await pageFaq.close();

  const pageFaq375 = await browser.newPage();
  await pageFaq375.setViewport({ width: 375, height: 812 });
  await pageFaq375.goto(baseUrl + '/FreQuestions/', { waitUntil: 'networkidle2' });
  await pageFaq375.evaluate(() => {
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) firstFaq.setAttribute('open', '');
  });
  report.e_faq_375 = await pageFaq375.evaluate(() => {
    const ans = document.querySelector('.faq-answer');
    if (!ans) return null;
    const style = window.getComputedStyle(ans);
    return {
      color: style.color,
      fontWeight: style.fontWeight
    };
  });
  await snap('/FreQuestions/', 375, 812, '.faq-item[open]', 'before_e_faq_375.png');
  await pageFaq375.close();

  fs.writeFileSync('before_report.json', JSON.stringify(report, null, 2));
  console.log('BEFORE report written to before_report.json');
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
