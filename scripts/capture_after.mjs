import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/李威俊/.gemini/antigravity/brain/9a69e908-3912-4c8f-8c39-b4a54b7b86af/screenshots';
const baseUrl = 'http://127.0.0.1:4321';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const report = {};

  async function snap(url, width, height, selector, filename, setupFn) {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto(baseUrl + url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 600));

    if (setupFn) {
      await page.evaluate(setupFn);
      await new Promise(r => setTimeout(r, 400));
    }

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

  console.log('Capturing AFTER metrics & screenshots...');

  // 1. P1: Check 5 pages
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

    report.p1[p] = { p1_1920, p1_375 };
  }

  // 2. P2 & P3: Presbyopia
  await snap('/vision-correction-presbyopia', 1920, 1080, '#CorrectionProgram', 'after_p2_schemes_1920.png');
  await snap('/vision-correction-presbyopia', 375, 812, '#CorrectionProgram', 'after_p2_schemes_375.png');

  await snap('/vision-correction-presbyopia', 1920, 1080, '.presbyopia-fee-section', 'after_p3_fee_1920.png');
  await snap('/vision-correction-presbyopia', 375, 812, '.presbyopia-fee-section', 'after_p3_fee_375.png');

  // Measure P2 & P3
  const pagePresby = await browser.newPage();
  await pagePresby.setViewport({ width: 1920, height: 1080 });
  await pagePresby.goto(baseUrl + '/vision-correction-presbyopia', { waitUntil: 'networkidle2', timeout: 30000 });
  report.p2_p3 = await pagePresby.evaluate(() => {
    const feeH2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('老花矯視費用'));
    const cards = Array.from(document.querySelectorAll('#CorrectionProgram .CorrectionProgram-Box-hide-item'));
    const simpleChips = Array.from(document.querySelectorAll('.simple-scheme-chip'));
    const whatsappBtn = document.querySelector('a[data-cta="whatsapp-w06"]');
    const feeCards = Array.from(document.querySelectorAll('.lbv-item'));
    const feeDetailBtn = document.querySelector('a[href*="/fee#table1"]');
    const footnotes = Array.from(document.querySelectorAll('.bg-\\[\\#F6FAFD\\] p')).map(el => el.textContent.trim()).filter(t => t.includes('香港價錢') || t.includes('免責聲明') || t.includes('術前檢查'));

    return {
      cardsCount: cards.length,
      cardHeights: cards.map(c => Math.round(c.getBoundingClientRect().height)),
      simpleChipsCount: simpleChips.length,
      whatsappHref: whatsappBtn ? whatsappBtn.href : null,
      whatsappDataCta: whatsappBtn ? whatsappBtn.getAttribute('data-cta') : null,
      hasFeeH2: !!feeH2,
      feeCardsCount: feeCards.length,
      feeDetailHref: feeDetailBtn ? feeDetailBtn.getAttribute('href') : null,
      footnotes
    };
  });
  await pagePresby.close();

  // 3. I16 & I17: ICL
  await snap('/vision-correction-icl', 1920, 1080, '.CheckObject', 'after_i16_1920.png');
  await snap('/vision-correction-icl', 375, 812, '.CheckObject', 'after_i16_375.png');

  await snap('/vision-correction-icl', 1920, 1080, '.icl-model', 'after_i17_1920.png');
  await snap('/vision-correction-icl', 375, 812, '.icl-model', 'after_i17_375.png');

  const pageIcl1920 = await browser.newPage();
  await pageIcl1920.setViewport({ width: 1920, height: 1080 });
  await pageIcl1920.goto(baseUrl + '/vision-correction-icl', { waitUntil: 'networkidle2', timeout: 30000 });
  report.i16_i17_1920 = await pageIcl1920.evaluate(() => {
    const numEl = document.querySelector('.CheckObject-number');
    const descEl = document.querySelector('.CheckObject-description');
    let gap = null;
    let marginRight = null;
    if (numEl && descEl) {
      gap = Math.round(descEl.getBoundingClientRect().left - numEl.getBoundingClientRect().right);
      marginRight = window.getComputedStyle(numEl).marginRight;
    }
    const td = document.querySelector('.model-table td');
    const tdStyle = td ? window.getComputedStyle(td) : null;
    const thProject = document.querySelector('.model-table th.project-name');
    const thStyle = thProject ? window.getComputedStyle(thProject) : null;
    const thItem = document.querySelector('.model-table th.table-item');
    const thItemStyle = thItem ? window.getComputedStyle(thItem) : null;

    return {
      i16: { gap, marginRight },
      i17: {
        tdFontSize: tdStyle ? tdStyle.fontSize : null,
        tdLineHeight: tdStyle ? tdStyle.lineHeight : null,
        headerFontSize: thStyle ? thStyle.fontSize : null,
        tableItemFontSize: thItemStyle ? thItemStyle.fontSize : null
      }
    };
  });
  await pageIcl1920.close();

  const pageIcl375 = await browser.newPage();
  await pageIcl375.setViewport({ width: 375, height: 812 });
  await pageIcl375.goto(baseUrl + '/vision-correction-icl', { waitUntil: 'networkidle2', timeout: 30000 });
  report.i17_375 = await pageIcl375.evaluate(() => {
    const td = document.querySelector('.model-table td');
    const tdStyle = td ? window.getComputedStyle(td) : null;
    const table = document.querySelector('.model-table');
    const container = document.querySelector('.icl-model');
    return {
      tdFontSize: tdStyle ? tdStyle.fontSize : null,
      tableScrollWidth: table ? table.scrollWidth : null,
      containerClientWidth: container ? container.clientWidth : null
    };
  });
  await pageIcl375.close();

  // 4. I18: Steps 01, 02, 05 at 1920 and step 01 at 375
  await snap('/vision-correction-icl', 1920, 1080, '.icl-introVedio-intro', 'after_i18_step01_1920.png', () => {
    const btn = document.querySelectorAll('#iclStepButtons .step-btn')[0];
    if (btn) btn.click();
  });
  await snap('/vision-correction-icl', 1920, 1080, '.icl-introVedio-intro', 'after_i18_step02_1920.png', () => {
    const btn = document.querySelectorAll('#iclStepButtons .step-btn')[1];
    if (btn) btn.click();
  });
  await snap('/vision-correction-icl', 1920, 1080, '.icl-introVedio-intro', 'after_i18_step05_1920.png', () => {
    const btn = document.querySelectorAll('#iclStepButtons .step-btn')[4];
    if (btn) btn.click();
  });
  await snap('/vision-correction-icl', 375, 812, '.icl-introVedio-intro', 'after_i18_step01_375.png');

  // Measure I18 panel heights
  const pageStep = await browser.newPage();
  await pageStep.setViewport({ width: 1920, height: 1080 });
  await pageStep.goto(baseUrl + '/vision-correction-icl', { waitUntil: 'networkidle2', timeout: 30000 });
  report.i18 = await pageStep.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('#iclStepButtons .step-btn'));
    const panel = document.querySelector('.content-panel');
    const textEl = document.getElementById('iclStepText');
    const textStyle = textEl ? window.getComputedStyle(textEl) : null;
    const section = document.querySelector('.icl-introVedio');
    const sectionStyle = section ? window.getComputedStyle(section) : null;

    const heights = [];
    for (let i of [0, 1, 4]) {
      btns[i].click();
      heights.push({ step: i + 1, height: panel ? panel.getBoundingClientRect().height : null });
    }

    return {
      heights,
      scrollMarginTop: sectionStyle ? sectionStyle.scrollMarginTop : null,
      textColor: textStyle ? textStyle.color : null,
      fontWeight: textStyle ? textStyle.fontWeight : null
    };
  });
  await pageStep.close();

  // 5. I19: 7大特色 Master-Detail
  await snap('/vision-correction-icl', 1920, 1080, '#iclFeatureSection', 'after_i19_1920.png');
  await snap('/vision-correction-icl', 375, 812, '#iclFeatureSection', 'after_i19_375.png');
  await snap('/vision-correction-icl', 1920, 1080, '#iclFeatureSection', 'after_i19_step04_1920.png', () => {
    const tab4 = document.getElementById('icl-feature-tab-3'); // 04 is index 3
    if (tab4) tab4.click();
  });

  const pageFeature = await browser.newPage();
  await pageFeature.setViewport({ width: 1920, height: 1080 });
  await pageFeature.goto(baseUrl + '/vision-correction-icl', { waitUntil: 'networkidle2', timeout: 30000 });
  report.i19 = await pageFeature.evaluate(() => {
    const tabs = Array.from(document.querySelectorAll('.icl-feature-tab'));
    const activePanel = document.querySelector('.icl-feature-panel.active');
    const desc = activePanel ? activePanel.querySelector('.icl-feature-panel-desc').textContent.trim() : null;
    const tabTitles = tabs.map(t => t.querySelector('.icl-feature-tab-title').textContent.trim());

    // Click 04
    tabs[3].click();
    const panel4 = document.querySelector('.icl-feature-panel.active');
    const title4 = panel4 ? panel4.querySelector('.icl-feature-panel-title').textContent.trim() : null;

    return {
      tabCount: tabs.length,
      tabTitles,
      initialDescReadableWithoutHover: desc,
      afterClickTab4Title: title4
    };
  });
  await pageFeature.close();

  // 6. I20: VideoFacade
  await snap('/vision-correction-icl', 1920, 1080, '.icl-introVedio-vedio-list', 'after_i20_icl_1920.png');
  await snap('/vision-correction-icl', 375, 812, '.icl-introVedio-vedio-list', 'after_i20_icl_375.png');
  await snap('/patient-info', 1920, 1080, '#stop-con-heading + .iframe-container', 'after_i20_patient_1920.png');
  await snap('/smilePro', 1920, 1080, '.aspect-video', 'after_i20_smilePro_1920.png');
  await snap('/post-corrective-care', 1920, 1080, '.video-wrap', 'after_i20_care_1920.png');

  // Measure I20 titles
  const checkVideoTitle = async (url, sel) => {
    const p = await browser.newPage();
    await p.setViewport({ width: 1920, height: 1080 });
    await p.goto(baseUrl + url, { waitUntil: 'networkidle2', timeout: 30000 });
    const res = await p.evaluate((selector) => {
      const facades = Array.from(document.querySelectorAll(selector));
      return facades.map(f => {
        const titleEl = f.querySelector('.video-facade-title-overlay span');
        return titleEl ? titleEl.textContent.trim() : null;
      });
    }, sel);
    await p.close();
    return res;
  };

  report.i20 = {
    icl: await checkVideoTitle('/vision-correction-icl', '.icl-introVedio-vedio-list .video-facade-container'),
    patient: await checkVideoTitle('/patient-info', '#stop-con-heading + .iframe-container .video-facade-container'),
    smilePro: await checkVideoTitle('/smilePro', '.aspect-video .video-facade-container'),
    care: await checkVideoTitle('/post-corrective-care', '.video-wrap .video-facade-container')
  };

  // 7. Section C: Medical Equipment
  await snap('/medical-equipment', 1920, 1080, '.equipment-box', 'after_c_equipment_1920.png');
  await snap('/medical-equipment', 375, 812, '.equipment-box', 'after_c_equipment_375.png');

  // Filter click & expand
  await snap('/medical-equipment', 1920, 1080, '.equipment-box', 'after_c_equipment_filter_1920.png', () => {
    const chip = document.querySelector('.filter-chip[data-category="refractive-laser"]');
    if (chip) chip.click();
  });
  await snap('/medical-equipment', 1920, 1080, '.equipment-box', 'after_c_equipment_expanded_1920.png', () => {
    const firstCard = document.querySelector('.equipment-card');
    if (firstCard) firstCard.click();
  });

  const pageEquip = await browser.newPage();
  await pageEquip.setViewport({ width: 1920, height: 1080 });
  await pageEquip.goto(baseUrl + '/medical-equipment', { waitUntil: 'networkidle2', timeout: 30000 });
  report.c_equipment = await pageEquip.evaluate(() => {
    const chips = Array.from(document.querySelectorAll('.filter-chip')).map(c => c.textContent.trim());
    const cards = Array.from(document.querySelectorAll('.equipment-card'));
    const firstCard = cards[0];
    const remarkEl = firstCard ? firstCard.querySelector('.equipment-remark-text') : null;
    const isLineClampedInitially = remarkEl ? remarkEl.classList.contains('line-clamp-2') : null;
    const imgContainer = firstCard ? firstCard.querySelector('.equipment-img-container') : null;
    const imgStyle = imgContainer ? window.getComputedStyle(imgContainer) : null;

    // Filter test
    const laserChip = document.querySelector('.filter-chip[data-category="refractive-laser"]');
    if (laserChip) laserChip.click();
    const visibleCardsAfterLaserFilter = cards.filter(c => !c.hasAttribute('data-category-hidden')).length;

    // Expand test
    if (firstCard) firstCard.click();
    const isExpandedAfterClick = firstCard ? firstCard.classList.contains('is-open') : null;
    const sourceEl = firstCard ? firstCard.querySelector('.equipment-source-text') : null;
    const sourceVisibleAfterClick = sourceEl ? window.getComputedStyle(sourceEl).display !== 'none' : null;

    return {
      chips,
      totalCards: cards.length,
      isLineClampedInitially,
      imgAspectRatio: imgStyle ? imgStyle.aspectRatio : null,
      visibleCardsAfterLaserFilter,
      isExpandedAfterClick,
      sourceVisibleAfterClick
    };
  });
  await pageEquip.close();

  // 8. Section D: Fee
  await snap('/fee', 1920, 1080, '#table1', 'after_d_fee_1920.png');
  await snap('/fee', 375, 812, '#table1', 'after_d_fee_375.png');

  const pageFee = await browser.newPage();
  await pageFee.setViewport({ width: 1920, height: 1080 });
  await pageFee.goto(baseUrl + '/fee', { waitUntil: 'networkidle2', timeout: 30000 });
  report.d_fee = await pageFee.evaluate(() => {
    const dLgNoneEl = document.querySelector('.d-lg-none');
    return {
      dLgNoneDisplayAt1920: dLgNoneEl ? window.getComputedStyle(dLgNoneEl).display : null
    };
  });
  await pageFee.close();

  // 9. Section E: FAQ
  await snap('/FreQuestions', 1920, 1080, '.faq-answer', 'after_e_faq_1920.png', () => {
    const item = document.querySelector('.faq-item');
    if (item) item.open = true;
  });
  await snap('/FreQuestions', 375, 812, '.faq-answer', 'after_e_faq_375.png', () => {
    const item = document.querySelector('.faq-item');
    if (item) item.open = true;
  });

  const pageFaq = await browser.newPage();
  await pageFaq.setViewport({ width: 1920, height: 1080 });
  await pageFaq.goto(baseUrl + '/FreQuestions', { waitUntil: 'networkidle2', timeout: 30000 });
  report.e_faq = await pageFaq.evaluate(() => {
    const ans = document.querySelector('.faq-answer');
    const style = ans ? window.getComputedStyle(ans) : null;
    return {
      color: style ? style.color : null,
      fontWeight: style ? style.fontWeight : null
    };
  });
  await pageFaq.close();

  await browser.close();

  fs.writeFileSync('after_report.json', JSON.stringify(report, null, 2), 'utf8');
  console.log('Capture & measurement complete! Report written to after_report.json');
}

main().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
