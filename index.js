const navButton = document.querySelector(".nav-btn");
const drawer = document.querySelector(".drawer-content");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("nav-btn-close");
    drawer.classList.toggle("drawer-active");
    header.classList.toggle("header-active");
})

window.addEventListener("resize", () => {
    if(drawer.classList.contains("drawer-active")){
        if(document.documentElement.clientWidth >= 1024){
            navButton.classList.toggle("nav-btn-close");
            drawer.classList.toggle("drawer-active");
            header.classList.toggle("header-active");
        }
    }
})
