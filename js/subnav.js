document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".usa-subnav-mobile-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open-subnav");
    });
  }

  if (window.innerWidth < 1024) {
    const sidenavItems = document.querySelectorAll("li.usa-sidenav__item");
    sidenavItems.forEach(function (item) {
      if (item.querySelector("ul")) {
        item.classList.add("toggle-submenu");
      }
    });
  }

  const subtoggle = document.querySelectorAll(".toggle-submenu");
  subtoggle.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open-subnav");
    });
  });
});
