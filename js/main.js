// NÔMA PARIS — interactions légères (pas de dépendances)

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  // Header devient opaque au scroll
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Apparition discrète au scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
