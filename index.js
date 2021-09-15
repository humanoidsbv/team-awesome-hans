const navButton = document.querySelector(".header__button");
const drawer = document.querySelector(".header__drawer");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("header__button__close");
    drawer.classList.toggle("header__drawer__active");
    header.classList.toggle("header__active");
})

window.addEventListener("resize", () => {
    if(drawer.classList.contains("header__drawer__active")){
        if(document.documentElement.clientWidth >= 1024){
            navButton.classList.toggle("header__button__close");
            drawer.classList.toggle("header__drawer__active");
            header.classList.toggle("header__active");
        }
    }
})
