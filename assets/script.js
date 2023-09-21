var menu = document.querySelector(".menu-function");
var navMenu = document.querySelector(".nav-menu");
var link = document.querySelectorAll(".link-js");
var count = 0;

menu.onclick = () => {
  if (count % 2 == 0) {
    navMenu.style.visibility = "visible";
    document.body.style.overflow = "hidden";
    menu.style.color = "white";
  } else {
    navMenu.style.visibility = "hidden";
    document.body.style.overflow = "scroll";
  }
  ++count;
};
link.forEach(
  (item) =>
    (item.onclick = () => {
      if (window.screen.width <= 1216) {
        navMenu.style.visibility = "hidden";
        document.body.style.overflow = "scroll";
      }
    })
);
