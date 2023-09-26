// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 14: Manipulación del DOM (Document Object Model)
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg14 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style14 = `background: ${bg14}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 10: Funciones como Expresiones -----");

console.log("%c1.- Accediendo a los elementos del DOM ", style14);
console.log("%c1.1.- A tráves de querySelector()", subStyle14);

const Encabezado = document.querySelector("h2");
console.log("Buscando y accediendo al primer <h2>");
console.log(Encabezado);