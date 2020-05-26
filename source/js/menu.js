var nav = document.querySelector(".page-header__nav");
var buttonMenu = document.querySelector(".page-header__button-menu");

buttonMenu.addEventListener("click", function () {
  if (nav.classList.contains("page-header__nav--hidden")) {
    nav.classList.remove("page-header__nav--hidden");
  } else {
    nav.classList.add("page-header__nav--hidden");
  }
});

buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("page-header__button-menu--open");
});

buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("page-header__button-menu--close");
});
