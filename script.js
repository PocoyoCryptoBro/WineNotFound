const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const wineCards = [...document.querySelectorAll(".wine-card")];
const reservationForm = document.querySelector("[data-reservation-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

year.textContent = new Date().getFullYear();

const updateHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-menu-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-menu-open");
    document.body.classList.remove("nav-open");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((current) => current.classList.toggle("is-active", current === button));
    wineCards.forEach((card) => {
      const types = card.dataset.type.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !types.includes(filter));
    });
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(reservationForm);
  const name = formData.get("name").toString().trim().split(" ")[0] || "Gracias";

  formStatus.textContent = `${name}, solicitud recibida. Te escribiremos para confirmar disponibilidad.`;
  reservationForm.reset();
});
