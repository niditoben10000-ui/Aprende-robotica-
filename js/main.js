const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const volver = document.querySelector("#volver");

if (abrir && nav) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });
}

if (cerrar && nav) {
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
}

if (volver) {
    volver.addEventListener("click", () => {
        window.history.back();
    });
}