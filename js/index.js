// Primary Navigation
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


// Tab List
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", updateTabFocus);

tabs.forEach((tab) => {
  // Mouse Click
  tab.addEventListener("click", function(event) {
    updateActivePanel(event.target);
  });
  // Keyboard Control - Enter Key
  tab.addEventListener("keydown", function(event) {
    const keydownEnter = 13;
    if (event.keyCode === keydownEnter) {
      updateActivePanel(event.target);
    }
  });
})

let tabFocus = 0;

function updateTabFocus(event) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // Move Left and Right
  if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
    // Unfocus Original Tab
    tabs[tabFocus].setAttribute("tabindex", "-1");
    // Check Left or Right Key
    if (event.keyCode === keydownLeft) {
      if (tabFocus === 0) {
        tabFocus = tabs.length - 1;
      } else {
        tabFocus--;
      }
    } else {
      if (tabFocus === tabs.length - 1) {
        tabFocus = 0;
      } else {
        tabFocus++;
      }
    }

    // Focus Selected Tab
    tabs[tabFocus].setAttribute("tabindex", "0");
    tabs[tabFocus].focus();
  }
}

function updateActivePanel(targetTab) {
  // Identify Target Panel
  const targetPanel = targetTab.getAttribute("aria-controls");
  const mainContainer = targetTab.parentNode.parentNode;

  // Update Selection Tabs
  targetTab
    .parentNode.querySelectorAll('[role="tab"]')
    .forEach((tab) => tab.setAttribute("aria-selected", "false"));

  targetTab.setAttribute("aria-selected", "true");

  // Remove Content
  mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

  // Add Content
  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");
}
