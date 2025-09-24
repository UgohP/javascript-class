function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".hamburger-menu-links");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}