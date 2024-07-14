let navToggler = document.querySelector(".nav-toggle-btn");
let nav = document.querySelector(".navmenu");

navToggler.addEventListener("click", () => {
  nav.classList.toggle("show");
});
