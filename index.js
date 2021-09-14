const navButton = document.querySelector(".nav-btn");
const navDropDown = document.getElementById("nav-dropdown");
const header = document.getElementById("header");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("nav-btn-close");
    navDropDown.classList.toggle("show");
    header.classList.toggle("header-show");
})
