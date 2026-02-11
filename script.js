// --- 1. Mobile Menu Logic ---
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  }),
);

// --- 2. Hero Slider Logic ---
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  if (slides.length === 0) return; // Safety check

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Ganti slide setiap 5 detik
setInterval(nextSlide, 5000);
