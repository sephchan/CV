// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

hamburger = document.querySelector(".hamburger-2");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar-2");
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
};
