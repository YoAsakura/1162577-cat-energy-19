var nav = document.querySelector(".page-header__nav");
var buttonMenu = document.querySelector(".page-header__button-menu");
var closeIcon = document.querySelector(".page-header__icon-close");
var openIcon = document.querySelector(".page-header__icon-menu");

buttonMenu.addEventListener("click", function () {
    if (nav.classList.contains("page-header__nav--hidden")) {
      nav.classList.remove("page-header__nav--hidden");
    } else {
      nav.classList.add("page-header__nav--hidden");
    }
    if (openIcon.classList.contains("page-header__icon-menu--hidden")) {
      openIcon.classList.remove("page-header__icon-menu--hidden");
      closeIcon.classList.add("page-header__icon-close--hidden");
    } else {
      openIcon.classList.add("page-header__icon-menu--hidden");
      closeIcon.classList.remove("page-header__icon-close--hidden");
    }
});
