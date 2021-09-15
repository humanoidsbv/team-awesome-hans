const navButton = document.querySelector(".nav-btn");
const navDropDown = document.querySelector(".dropdown-content");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("nav-btn-close");
    navDropDown.classList.toggle("dropdown-show");
    header.classList.toggle("header-show");
})

window.addEventListener("resize", () => {
    if(navDropDown.classList.contains("dropdown-show")){
        if(document.documentElement.clientWidth >= 1024){
            navButton.classList.toggle("nav-btn-close");
            navDropDown.classList.toggle("dropdown-show");
            header.classList.toggle("header-show");
        }
    }
})
