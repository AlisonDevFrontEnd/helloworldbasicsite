const navbar = document.querySelector("nav");
const navbarHeight = navbar.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navbarHeight + "px"
);