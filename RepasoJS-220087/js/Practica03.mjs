// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 03: Declaración de Variables.
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';

const style = `background: ${bg}; color: black; border: 1.5px solid white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`

// NOTAS:
    // warn: Permite estilizar el debug del JS, crea una salida amarilla
    // error: Permite estilizar el debug de la consola de JS, crea una salida en rojo

// Formas de Declarar Variables
console.warn(" ----- Practica 03: Declaración de Variables en JavaScript -----");
console.log("%ca) Declaración de Variables con el Prefijo VAR", style);
// VAR
// Prefijo que permite la declaración de variables.
// actualmente es sustituida por LET
// Puede asignarse después de la declaración
// El valor puede actualizarse.
// Declaramos la variable
var Nombre;
// Imprimimos el valor actual de la variable
console.log(`Hola ${Nombre}`);
// Modificamos el valor de la variable Nombre
Nombre = "Haziel";
// Imprimimos el nuevo contenido de la variable
console.log(`Hola ${Nombre}`);
// Imprimimos el tipo de la Variable 
console.log(typeof(Nombre));
// Cambiamos el tipo de dato a numero
Nombre = 17;
console.log(`Hola ${Nombre}`);
console.log(typeof(Nombre));

// console.log("Hola " + fecha_nacimiento
console.log("%cb) Declaración de Variables con el Prefijo LET", style);

// Fin Practica VAR


// LET
// Prefijo utilizado para variables, que al igual que VAR son redefinibles pueden ser declaradas en un valor inicializado, se pueden reasignar y pueden cambiar de tipo de dato.

let colorFavorito = "Naranja";
console.log(`Tu color Favorito es ${colorFavorito}`);
console.log(typeof(colorFavorito));
colorFavorito = 2004;
console.log(`Tu color Favorito es ${colorFavorito}`);
console.log(typeof(colorFavorito));

// Fin LET 

// CONST
console.log("%ca) Declaración de Variables con el Prefijo CONST", style);
// const cancionFavorita;
const cancionFavorita = 'Ocean Drive - Duke Dumont';
console.log(`Tu canción favorita es ${cancionFavorita}`);

// Fin CONST