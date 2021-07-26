const html = document.querySelector("html");
const header = document.querySelector("header");
const burgerIcon = document.querySelector(".burger-icon");
const menuContainer = document.querySelector(".menuContainer");
const button = document.querySelector(".default-lang");
const dropdown = document.querySelector(".dropdown");
const exitButton = document.querySelector(".menu-exit-btn");
const navMenu = document.querySelector(".menuContainer-smaller");
const securityButton = document.querySelector(".security-button");
const navSecurity = document.querySelector(".security-nav");
const securityBackButton = document.querySelector(".button_back");
const securityExitButton = document.querySelector(".security-exit-btn");

function enableScroll() {
  html.style.overflowY = "scroll";
  header.classList.remove("header-background");
}

function normalMenu() {
  navSecurity.style.display = "none";
  navSecurity.classList.remove("visibleContainerNav");
  menuContainer.appendChild(navMenu);
}

function firstLoad() {
  menuContainer.remove();
  navSecurity.remove();
  html.style.overflowY = "auto";
  html.style.overflowX = "hidden";
}

firstLoad();

burgerIcon.addEventListener("click", () => {
  if (!menuContainer.isConnected) {
    document
      .querySelector(".burger-container")
      .insertBefore(menuContainer, burgerIcon);
  }
  setTimeout(() => {
    menuContainer.classList.add("visibleContainer");
    html.style.overflowY = "hidden";
    header.classList.add("header-background");
  }, 100);
});

button.addEventListener("click", () => {
  dropdown.classList.toggle("visible");
});

exitButton.addEventListener("click", () => {
  menuContainer.classList.remove("visibleContainer");
  enableScroll();
});

securityButton.addEventListener("click", () => {
  navMenu.remove();
  if (!navSecurity.isConnected) {
    menuContainer.insertAdjacentElement("beforeend", navSecurity);
    menuContainer.style.overflowY = "auto";
  }
  navSecurity.style.display = "block";
  setTimeout(() => {
    navSecurity.classList.add("visibleContainerNav");
  }, 100);
});

securityBackButton.addEventListener("click", () => {
  normalMenu();
});

securityExitButton.addEventListener("click", () => {
  menuContainer.classList.remove("visibleContainer");
  enableScroll();
  setTimeout(normalMenu, 500);
});
