// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 04: Tipos de Datos en JavaScript.
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------


// Estilizacion de secciones
const bg1 = 'linear-gradient(90deg, rgba(131,58,180,1) 12%, rgba(253,29,29,1) 27%, rgba(252,176,69,1) 100%)';

const style2 = `background: ${bg1}; color: white; border: 1.5px solid white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`

// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 04: Tipos de Datos en JavaScript -----");

// UNSIGNED
console.log("%ca) UNSIGNED - No Definido", style2);

let nombreCliente;
console.log(nombreCliente);
console.log(typeof(nombreCliente));

// BOOLEAN - Verdadero / Falso
console.log("%cb) BOOLEAN - Verdadero / Falso", style2);

let mayorEdad = true;
console.log(`¿Es mayor de edad? ${mayorEdad}`);
let inscrito = false;
console.log(`¿Está inscrito? ${inscrito}`);
console.log(typeof(mayorEdad));

// Number - Números (Incluye todo tipo de números)
console.log("%cc) NUMBER - Número (todo tipo)", style2);

let edad = 18;
let precio = 314.50;
let temperatura = -21;
let tipoMoneda = 'MXN';
let tipoTemperatura = '°C';

console.log(`El precio del producto es de: $${precio} ${tipoMoneda}`);
console.log(typeof(precio));

console.log(`La temperatura actual es de: ${temperatura} ${tipoTemperatura}`);
console.log(typeof(temperatura));


// STRING - Cadena de Texto
console.log("%cd) STRING - Cadena de Texto", style2);

// Mensaje
const Mensaje = "#### DATOS DEL CLIENTE ### ";
console.log(Mensaje);

// Nombre
let name = "Haziel Ortiz Ramirez";
console.log(`Nombre: ${name}, ${typeof(name)}`);

// Genero
let genero = "Masculino";
console.log(`Género: ${genero}, ${typeof(genero)}`);

// edad
let edad2 = '18 años';
console.log(`Edad: ${edad2}, ${typeof(edad2)}`);

// Direccion
let direccion = "Venustiano carranza No 112, Nuevo Necaxa, Puebla";
console.log(`Dirección: ${direccion}, ${typeof(direccion)}`);

// BIG INT (Entero Grande)
console.log("%ce) BIGINT - (Enterote)", style2);

let entero = 123456789012;
console.log(`El valor es de: ${entero}, ${typeof(entero)}`);
let valor = 123124234321212412112123;
let enteroGrande = BigInt(valor)
console.log(`El valor es de: ${enteroGrande}, ${typeof(enteroGrande)}`);

// SYMBOL
console.log("%cf) SYMBOL - (Símbolo)", style2);

// Este tipo de dato permite almacenar datos agregando una propiedad de unicidad en la ejecucion dependiendo su alcance
const numeroFavorito_Haziel = Symbol(45);
const numeroFavorito_Marco = Symbol(45);

console.log(numeroFavorito_Haziel.valueOf());
console.log(numeroFavorito_Haziel);
console.log(numeroFavorito_Marco.valueOf());
console.log(numeroFavorito_Marco);

if (numeroFavorito_Haziel === numeroFavorito_Marco) {
    console.log("Haziel y Marco tienen el mismo número favorito");
} else {
    console.log("Haziel y Marco tienen diferente número favorito");
}

const numFavorito_Haziel = 99;
const numFavorito_Marco = 99;

console.log(numFavorito_Haziel.valueOf());
console.log(numFavorito_Haziel);
console.log(numFavorito_Marco.valueOf());
console.log(numFavorito_Marco);

if (numFavorito_Haziel === numFavorito_Marco) {
    console.log("Haziel y Marco tienen el mismo número favorito");
} else {
    console.log("Haziel y Marco tienen diferente número favorito");
}

// NULL
console.log("%cg) NULL - (Nulo)", style2);
// Este tipo refleja la ausencia definida de un valor de una variable, este valor se asigna por el sistema o usuario

let signoZodiacal;
console.log(`La variable signoZodiacal actualmente tiene el valor ${signoZodiacal}`);
const dia = 22;
const mes = "Diciembre";

if ((dia <= 21 && dia >= 30 && mes == "Junio") || (dia >= 1 && dia <= 20 && mes == "Julio")) {
    signoZodiacal = "Cáncer";
} else {
    signoZodiacal = null;
}
console.log(`Tu signo Zodiacal es: ${signoZodiacal} ${typeof(signoZodiacal)}, tu fecha de nacimiento es: ${dia}/${mes}/2023`);
