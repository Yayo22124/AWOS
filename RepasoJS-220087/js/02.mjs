// Practica 04: Tipos de Datos en JavaScript
// Elaborado por: Eli Haziel Ortiz Ramirez

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
let entero = 123456789012;
console.log(`El valor es de: ${entero}, ${typeof(entero)}`);
let valor = 123124234321212412112123;
let enteroGrande = BigInt(valor)
console.log(`El valor es de: ${enteroGrande}, ${typeof(enteroGrande)}`);

// Symbol - Símbolo
let simbolo = Symbol(2);
console.log(typeof(simbolo));

