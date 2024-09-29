const button = document.getElementById("button-top");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 300) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

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
