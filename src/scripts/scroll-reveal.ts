/**
 * 全站共享滾動顯現微動效 (Shared Scroll Reveal)
 * 透過 IntersectionObserver 僅在非首屏元素滾動進入可視區域時套用平滑淡入
 * 尊重系統 prefers-reduced-motion 設定
 */
export function initScrollReveal(): void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const main = document.getElementById("main-content");
  if (!main) return;
  const sections = main.querySelectorAll("section");
  if (!sections.length) return;

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
  );

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // 僅對初始處於可視區下方的區塊套用淡入上浮，首屏與 Hero 元素絕不隱藏
    if (rect.top >= viewportHeight) {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    }
  });
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal, { once: true });
  } else {
    initScrollReveal();
  }
}
