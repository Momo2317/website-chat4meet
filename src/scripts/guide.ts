const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js-ready");

const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
const header = document.querySelector<HTMLElement>("[data-site-header]");

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
  );

  for (const el of reveals) revealObserver.observe(el);
} else {
  for (const el of reveals) el.classList.add("is-in");
}

const onScroll = () => {
  if (!header) return;
  const scrolled = window.scrollY > 12;
  header.classList.toggle("shadow-soft", scrolled);
  header.classList.toggle("bg-brand/92", scrolled);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

function initExperience(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-experience-track]");
  const tabs = Array.from(root.querySelectorAll<HTMLElement>("[data-experience-tab]"));
  const status = root.querySelector<HTMLElement>("[data-experience-status]");
  const prev = root.querySelector<HTMLButtonElement>("[data-experience-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-experience-next]");
  if (!track || tabs.length === 0) return;

  const total = tabs.length;
  let index = 0;
  let pointerStartX = 0;
  let dragging = false;

  const paintTabs = () => {
    for (const tab of tabs) {
      const active = Number(tab.dataset.experienceTab) === index;
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.classList.toggle("bg-brand", active);
      tab.classList.toggle("text-white", active);
      tab.classList.toggle("text-ink", !active);
      tab.classList.toggle("hover:bg-brand-soft", !active);
    }
    if (status) status.textContent = `${index + 1} / ${total}`;
  };

  const goTo = (nextIndex: number) => {
    index = (nextIndex + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    paintTabs();
  };

  for (const tab of tabs) {
    tab.addEventListener("click", () => goTo(Number(tab.dataset.experienceTab)));
  }
  prev?.addEventListener("click", () => goTo(index - 1));
  next?.addEventListener("click", () => goTo(index + 1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  });

  const stage = track.parentElement;
  if (stage) {
    stage.addEventListener("pointerdown", (event: PointerEvent) => {
      dragging = true;
      pointerStartX = event.clientX;
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointerup", (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      const delta = event.clientX - pointerStartX;
      if (Math.abs(delta) < 48) return;
      goTo(delta < 0 ? index + 1 : index - 1);
    });
    stage.addEventListener("pointercancel", () => {
      dragging = false;
    });
  }

  goTo(0);
}

for (const experience of document.querySelectorAll<HTMLElement>("[data-experience]")) {
  initExperience(experience);
}
