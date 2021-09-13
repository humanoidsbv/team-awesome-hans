
const navButton = document.querySelector(".nav-btn");
const navDropDown = document.getElementById("nav-dropdown")

navButton.addEventListener("click", () => {
    navButton.classList.toggle("nav-btn-close");
    navDropDown.classList.toggle("show");
})