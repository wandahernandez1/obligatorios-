"use strict"

let buttom = document.querySelectorAll(".btn-caja")
for (let i=0; i < buttom.length; i++){
    let btn = buttom[i]
    btn.addEventListener("click", ocultar);

}
function ocultar() {
    let buttomLeft =document.querySelector(".caja-izquierda")
    let buttomRight = document.querySelector(".caja-derecha")
    
    buttomLeft.classList.toggle("ocultar")
    buttomRight.classList.toggle("ocultar")
}