const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js-ready");

const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
const sections = ["chat", "stories", "profiles", "trust", "download"]
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => Boolean(el));
const dots = Array.from(document.querySelectorAll<HTMLElement>("[data-guide-dot]"));
const chips = Array.from(document.querySelectorAll<HTMLElement>("[data-guide-chip]"));
const header = document.querySelector<HTMLElement>("[data-site-header]");

function setActive(id: string | null) {
  for (const dot of dots) {
    dot.classList.toggle("is-active", dot.dataset.guideDot === id);
  }
  for (const chip of chips) {
    const on = chip.dataset.guideChip === id;
    chip.classList.toggle("border-brand", on);
    chip.classList.toggle("text-brand", on);
    chip.classList.toggle("bg-brand-soft", on);
  }
}

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

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible?.target.id) return;
      if (["chat", "stories", "profiles"].includes(visible.target.id)) {
        setActive(visible.target.id);
      }
    },
    { threshold: [0.35, 0.55] },
  );

  for (const section of sections) sectionObserver.observe(section);
} else {
  for (const el of reveals) el.classList.add("is-in");
  setActive("chat");
}

const onScroll = () => {
  if (!header) return;
  const scrolled = window.scrollY > 12;
  header.classList.toggle("shadow-soft", scrolled);
  header.classList.toggle("bg-brand/92", scrolled);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

function initStoryCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-story-track]");
  const tabs = Array.from(root.querySelectorAll<HTMLElement>("[data-story-tab]"));
  const status = root.querySelector<HTMLElement>("[data-story-status]");
  const prev = root.querySelector<HTMLButtonElement>("[data-story-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-story-next]");
  if (!track || tabs.length === 0) return;

  const total = tabs.length;
  let index = 0;
  let pointerStartX = 0;
  let dragging = false;

  const goTo = (nextIndex: number) => {
    index = (nextIndex + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    for (const tab of tabs) {
      const active = Number(tab.dataset.storyTab) === index;
      tab.setAttribute("aria-selected", active ? "true" : "false");
    }
    if (status) status.textContent = `${index + 1} / ${total}`;
  };

  for (const tab of tabs) {
    tab.addEventListener("click", () => goTo(Number(tab.dataset.storyTab)));
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

  const onPointerDown = (event: PointerEvent) => {
    dragging = true;
    pointerStartX = event.clientX;
    root.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    const delta = event.clientX - pointerStartX;
    if (Math.abs(delta) < 40) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  root.addEventListener("pointerdown", onPointerDown);
  root.addEventListener("pointerup", onPointerUp);
  root.addEventListener("pointercancel", () => {
    dragging = false;
  });

  goTo(0);
}

for (const carousel of document.querySelectorAll<HTMLElement>("[data-story-carousel]")) {
  initStoryCarousel(carousel);
}
