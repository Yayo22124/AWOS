const style = 'background-color: aqua; color: white; border: 3px solid black; font-size: 1.0rem;'
import medejasEnter from "./Practica17.mjs"
console.warn(" ----- Practica 16: Agregando nuevos elementos en el DOM -----");

console.log("%c1.- Agregando un mensaje de error. ", style);

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


