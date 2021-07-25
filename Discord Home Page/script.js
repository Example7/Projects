const burgerIcon = document.querySelector(".burger-icon");
const menuContainer = document.querySelector(".menuContainer");
const button = document.querySelector(".default-lang");
const dropdown = document.querySelector(".dropdown");
const exitButton = document.querySelector(".exit-btn");
const header = document.querySelector("header");
const html = document.querySelector("html");

menuContainer.remove();
html.style.overflowY = "auto";
html.style.overflowX = "hidden";

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
  html.style.overflowY = "scroll";
  header.classList.remove("header-background");
});
