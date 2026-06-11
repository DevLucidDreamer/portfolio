/* =========================================================
   사이트 동작 로직 — 보통 손댈 일 없음.
   (콘텐츠 수정은 index.html, 프로젝트는 data/projects.js 에서)
   ========================================================= */

/* ---- 프로젝트 섹션 렌더링 (data/projects.js 의 PROJECTS 사용) ---- */
const container = document.getElementById("projects");
PROJECTS.forEach(p => {
  const sec = document.createElement("section");
  sec.className = "project";
  // 이미지는 바로 넣지 않고 data-bg 에 보관 → 스크롤 진입 시 지연 로드
  if (p.image) sec.dataset.bg = p.image;
  const techHTML = `
    <div class="project-tech">
      <span class="t-label">Tech</span>
      ${p.tech.map(t => `<span class="t">${t}</span>`).join("")}
    </div>`;
  const mainHTML = `
    <div class="project-main reveal">
      <h2 class="p-title">${p.title}</h2>
      <p class="p-desc">${p.desc}</p>
      ${p.award ? `<span class="p-award">${p.award}</span>` : ""}
    </div>`;
  sec.innerHTML = `<div class="project-content ${p.align === "right" ? "right" : ""}">${mainHTML}${techHTML}</div>`;
  container.appendChild(sec);
});

/* ---- 배경 이미지 지연 로드 (뷰포트 600px 전에 미리 로드해 끊김 없음) ---- */
const bgIO = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.backgroundImage = `url('${en.target.dataset.bg}')`;
      bgIO.unobserve(en.target);
    }
  });
}, { rootMargin: "600px 0px" });
document.querySelectorAll(".project[data-bg]").forEach(el => bgIO.observe(el));

/* ---- 테마 토글 (블랙 ↔ 화이트, 선택은 localStorage 에 저장됨) ---- */
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
function setTheme(t) {
  root.setAttribute("data-theme", t);
  toggle.textContent = t === "dark" ? "☾" : "☀";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
toggle.textContent = root.getAttribute("data-theme") === "dark" ? "☾" : "☀";
toggle.addEventListener("click", () => {
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

/* ---- 스크롤 진입 애니메이션 ---- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: .14 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
