let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})


const indice = document.querySelector(".indice");
const indiceBoton = document.querySelector(".indice-boton");
const indiceCerrar = document.querySelector(".indice-cerrar");

indiceBoton && indiceBoton.addEventListener("click", () => {
    indice.classList.toggle("active");
    indiceBoton.classList.toggle("inactive");
})
indiceCerrar && indiceCerrar.addEventListener("click", () => {
    indice.classList.toggle("active");
    indiceBoton.classList.toggle("inactive");
})

