const navButton = document.querySelector(".header__button");
const drawer = document.querySelector(".header__drawer");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("header__button--close");
    drawer.classList.toggle("header__drawer--active");
    header.classList.toggle("header--active");
})

window.addEventListener("resize", () => {
    if(drawer.classList.contains("header__drawer--active")){
        if(document.documentElement.clientWidth >= 1024){
            navButton.classList.toggle("header__button--close");
            drawer.classList.toggle("header__drawer--active");
            header.classList.toggle("header--active");
        }
    }
})
