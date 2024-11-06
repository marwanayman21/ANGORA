document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const totalSlides = document.querySelectorAll(".carousel-item").length;
  let currentIndex = 0;

  function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${translateX}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });
});

const navbar = document.querySelectorAll(".nav");
const navLinks = document.querySelectorAll(".tabs a,.menuBtn");
const imgs = document.querySelectorAll("nav div img");
window.addEventListener("scroll", () => {
  navbar.forEach((nav) => {
    navLinks.forEach((tab) => {
      imgs.forEach((img) => {
        if (window.scrollY > 10) {
          nav.style.backgroundColor = "white";
          nav.style.borderWidth = 0;
          nav.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
          tab.style.color = " rgb(55, 55, 55)";
          img.src = "https://mahmoudzin.github.io/angora/images/logo-red.png";
        } else {
          nav.style.backgroundColor = "transparent";
          nav.style.borderWidth = "1px";
          nav.style.boxShadow = "none";
          tab.style.color = "rgb(255, 255, 255)";
          img.src = "https://mahmoudzin.github.io/angora/images/logo-white.png";
        }
      });
    });
  });
});

const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("h-0");
});
menuLinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    menu.classList.toggle("h-0");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector(".topBtn");

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
