const navMenu = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", function() {
  const menuVisibility = navMenu.getAttribute("data-visible");
  if (menuVisibility === "false") {
    // Update Attributes
    navMenu.setAttribute("data-visible", "true");
    navToggle.firstElementChild.setAttribute("aria-expanded", "true");
    // Menu Animation
    navMenu.style.animation = "800ms slide-in forwards"
    navToggle.style.backgroundImage = "url('./assets/navigation/icon-close.svg')";
    navToggle.style.animation = "1000ms fade-in forwards";
  } else {
    // Update Attributes
    navMenu.setAttribute("data-visible", "false");
    navToggle.firstElementChild.setAttribute("aria-expanded", "false");
    // Menu Animation
    navMenu.style.animation = "800ms slide-out forwards"
    navToggle.style.backgroundImage = "url('./assets/navigation/icon-hamburger.svg')";
    navToggle.style.animation = "";
  }
});
