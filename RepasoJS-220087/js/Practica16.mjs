
// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 16: Creando nuevos elementos en el DOM (Document Object Model)
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
//
// --------------------------------------------------------------------------------
const bg14 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style14 = `background: ${bg14}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;

const style = 'background-color: aqua; color: white; border: 3px solid black; font-size: 1.0rem;'
import medejasEnter from "./Practica17.mjs"
console.warn(" ----- Practica 16: Agregando nuevos elementos en el DOM -----");

console.log('%c 1. Agregando nuevos elementos en el DOM ', style14)

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Enviaste los datos del formulario...")
    const nombreUsuario = document.querySelector("#nombre")
    console.log(`El usuario que esta intentando logearse es: ${nombreUsuario.value}`)

    const password = document.querySelector("#password")
    console.log(`El password ingresado es: ${password.value}`)

    if (nombreUsuario.value === '' || password.value === '')
        console.log("Los datos del usuario estan incompletos.")

    else
        console.log("Los datos estan completos.")


    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')
    //Reto de hacer que ya no imprima muchos letreros 
    const alertaPrevia = document.querySelector(".alerta")
    if (alertaPrevia)
        alertaPrevia.remove()


    if (nombreUsuario.value === '' || password.value === '') {
        alerta.textContent = "Tienes que llenar los campos"
        alerta.classList.add("error")
    }
    else {
        alerta.textContent = "Validando los datos ingresados"
        alerta.classList.add("exito")
    }

    formulario.appendChild(alerta)

    const selogeo = medejasEnter(nombreUsuario.value, password.value)
    console.log(selogeo)
    selogeo ? console.log("Bienvenido") : console.log("Verifica las credenciales ingresadas")

})


