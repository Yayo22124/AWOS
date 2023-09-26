const bg14 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style14 = `background: ${bg14}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 15: Accediendo a los elementos del DOM -----");

console.log("%c1.- Accediendo a los elementos del DOM ", style14);
console.log("%c1.1.- A tráves de querySelector()", subStyle14);


// Utiliza querySelector para seleccionar un elemento
const Encabezado = document.querySelector('h2');
console.log(Encabezado);

// Utiliza querySelector para seleccionar un id
const boton = document.querySelector("#elemento1")
console.log(boton);

// Utiliza querySelector para seleccionar una clase
let elementoClase = document.querySelector(".tecnologias")
console.log(elementoClase);

console.log("¿Qué tipo de dato devuelve querySelector?");
console.log(`El encabezado es un: ${typeof Encabezado}`);
console.log(`El boton es un: ${typeof boton}`);
console.log(`El elementoClase es un: ${typeof elementoClase}`);

console.log("%c1.2.- A tráves de querySelectorAll()", subStyle14);
const ligas = document.querySelectorAll("a");
console.log("Buscando y accediendo a los elementos con TAG - <A>");
console.log(ligas);
console.log(typeof ligas);

let elementos1 = document.querySelectorAll("#elemento1")
console.log("Buscando y accediendo a los elementos por ID - #elemento1");
console.log(elementos1);
console.log(typeof elementos1);

let patitos = document.querySelectorAll(".patito")
console.log("Buscando y accediendo a los elementos por CLASE - .patito");
console.log(patitos);
console.log(typeof patitos);

let rameros = document.querySelectorAll(".ramero")
console.log("Buscando y accediendo a los elementos de una clase que no existe - .ramero");
console.log(rameros);
console.log(typeof rameros);



console.log("%c2.0.- Accediendo a las propiedades de los elementos de DOM", style14);
console.log(`El elemento extraido del DOM es un : ${Encabezado.textContent}`);
console.log(`El elemento extraido del DOM es un : ${Encabezado.classList}`);
console.log(`El elemento <HEADER> extraido de un DOM tiene las clases de: ${document.querySelector("header").classList}`);

console.log("¿Pero cuándo quieres acceder a los elementos extraídos por un querySelectorAll()?");
console.log(`Los elementos extraídos del DOM en la variable: ligas, son : ${ligas.tagName}`);

console.log("Extrayendo los elementos de un arreglo (ligas)");

ligas.forEach((element, i) => {
    console.log(`Los elementos extraídos del DOM en la variable: ligas[${i}], es un ${element.tagName}`);
});

console.log("Extrayendo los elementos de un arreglo (patitos)");

patitos.forEach((element, i) => {
    console.log(`Los elementos extraídos del DOM en la variable: patitos[${i}], es un ${element.tagName}`);
});

console.log("%c2.0.- Modificando los valores de los atributos de los objetos del DOM", style14);
console.log(Encabezado);
console.log(`Modificando el texto que el maquetador puso de : ${Encabezado.textContent} a "Modificando los Elementos del DOM"`);
Encabezado.textContent = "Modificando los Elementos del DOM";

// Cambiar el texto del Enlace 2 a Google.com
ligas[2].textContent = "Google.com"
boton.setAttribute('disabled', '');
boton.setAttribute('style', 'background-color:orange; font-style:italic;');

// Evento - Submit
console.log('%c 2. Agregando un nueo evento - Submit ', style14)

// const formulario = document.querySelector("#formulario");
// formulario.addEventListener('submit', e => {
//     e.preventDefault();
//     const nombreUsuario = document.querySelector("#nombre").value;
//     const passwordUsuario = document.querySelector("#password").value;

//     if (nombreUsuario == '' || passwordUsuario == '') {
//         console.log("Los datos del formulario deben estan completos");
//     } else console.log("Ambos campos fueron llenados y puedo proceder a validar la información");
//     console.log('Enviaste los datos del formulario');

//     console.log(`El usuario que está intentando logearse es: ${nombreUsuario}`);

//     console.log(`El password del usuario es: ${passwordUsuario}`);
// })


// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 16: Creando nuevos elementos en el DOM (Document Object Model)
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
//
// --------------------------------------------------------------------------------

console.log('%c 1. Agregando nuevos elementos en el DOM ', style14)

const alerta = document.createElement('div');
alerta.classList.add('alerta');



const formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', e => {
    e.preventDefault();
    const nombreUsuario = document.querySelector("#nombre").value;
    const passwordUsuario = document.querySelector("#password").value;
    if (nombreUsuario == '' || passwordUsuario == '') {

        // alert("Los datos del formulario deben estar completos");
        alerta.classList.add('error')
        alerta.textContent = "Los datos para realizar la validación están incompletos."

    } else {
        alerta.classList.add("exito")
        alerta.textContent = "Los datos han sido llenados con éxito"
    }

    // alert('Enviaste los datos del formulario');

    // alert(`El usuario que está intentando logearse es: ${nombreUsuario}`);

    // alert(`El password del usuario es: ${passwordUsuario}`);
})