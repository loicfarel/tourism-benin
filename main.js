// Scroll effect
const button = document.getElementById("button-top");
const nav = document.getElementById("nav");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > 300) {
    nav.classList.add("show__nav-bg");
    button.classList.add("active");
  } else {
    nav.classList.remove("show__nav-bg");
    button.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Header responsive
const links = document.querySelectorAll(".link");
const buttonMenu = document.getElementById("button-menu");
const menu = document.querySelector(".nav__links");

buttonMenu.addEventListener("click", () => {
  menu.classList.toggle("show__menu");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("show__menu");
  });
});

// Reveal option
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".history__container img", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".history__description", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".header__button", {
  ...scrollRevealOption,
  delay: 300,
});

// meal container
ScrollReveal().reveal(".meal__card", {
  ...scrollRevealOption,
  interval: 200,
});

// destination container
ScrollReveal().reveal(".destination__card", {
  duration: 1000,
  interval: 200,
});

// seller container
ScrollReveal().reveal(".seller__card", {
  ...scrollRevealOption,
  interval: 200,
});

// monument container
ScrollReveal().reveal(".monument__card", {
  ...scrollRevealOption,
  interval: 200,
});
