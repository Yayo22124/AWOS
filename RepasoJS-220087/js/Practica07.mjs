// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 07: Arreglos en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg3 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style4 = `background: ${bg3}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const style5 = `background: gray; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const logStyle = 'background: #222; font-weight: bold;'


// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 07: Arreglos en JavaScript -----");

// Declaración de un Arreglo 
console.log("%c1.- Declaración de un Arreglo", style4);
const meses = [ "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

console.log(meses);
console.log(typeof(meses));

// Arreglo Mixto
let arregloMixto = ["String", 10, -58.9, false, Symbol(45), 'a', -19999999999999999999999999999999999999999999999999999999999, true, {prop1:'valor', prop2: '2'}];
console.log('Arreglo usando console.log: ');
console.log(arregloMixto);
console.log('Arreglo usando console.table: ');
console.table(arregloMixto);
console.log(typeof(arregloMixto));

// Matriz / Arreglos Multidimensionales
let matriz = [
    [1,2,3,4],['a', 'b', 'c', 'd']
]
console.log(matriz);
console.log(typeof(matriz));

// Recuperar datos de un array
console.log("%c2.- Recuperar valores de los elementos de un arreglo", style4);
console.log(`Accediendo al elemento 8 del arreglo meses: ${meses[8]}, que en realidad es el noveno mes, pero los arreglas comienzan en 0`);
console.log(`Accediendo al elemento en la posicion 12 del arreglo mixto: ${arregloMixto[12]}`);


// Recuperar datos de un array
console.log("%c3.- Funciones de un Arreglo (Array Methods)", style4);
console.log("Para saber el total de elementos de un arreglo utilizaremos el método LENGTH  ");
console.log(`El arreglo de MESES tiene: ${meses.length}, elementos.`);
console.log(`El arregloMixto tiene: ${arregloMixto.length}, elementos.`);

// Agregar elementos a un array (al final)
console.log("Para agregar elementos a un array al final del mismo se usa el método PUSH  ");
meses.push('Gato');
console.table(meses);

// Agregar elementos a un array (al inicio)
console.log("Para agregar elementos a un array al inicio del mismo se usa el método UNSHIFT  ");
meses.unshift('Perro')
console.table(meses);

// Eliminar el elemento en la última posición: POP
console.log(`Para eliminar el elemento en la última posición se utiliza el método: POP`);
console.log(`Eliminando el elemento en la última posición: ${meses[meses.length - 1]}`);
meses.pop();
meses.push("Diciembre")
console.log("El arreglo actual es: ");
console.table(meses);

// Eliminar el elemento en la primera posición: SHIFT
console.log(`Para eliminar el elemento en la primera posición: ${meses[0]}`);
meses.shift();
meses.unshift("Enero");


// Dividir el arreglo orifinal, sacar los primeros 3 elementos
console.log('Dividir el arreglo, sacar los primeros 3 elementos. ');
// meses.splice(3) Si no mando 2 parametros, elimina los restantes.
meses.splice(7, 1);
console.table(meses);

// Metodos para la manipulación de arreglos inmutables
console.log("%c4.- Métodos para la manipulación de arreglos inmutables", style4);

// Destructuración de arreglos
// console.log("%c5.- Destructuración de Arreglos", style4);
// let [signo0, signo1, signo2, signo3, signo4, signo5, signo6, signo7] = signosZodiacales;
// console.log(`El signo zodiacal en la posicion [0]: ${signo0}`);
// console.log(`El signo zodiacal en la posicion [7]: ${signo7}`);

// let [signo_0,,,,,,signo_7] = signosZodiacales;
// console.log(`El signo zodiacal en la posicion [0]: ${signo_0}`);
// console.log(`El signo zodiacal en la posicion [7]: ${signo_7}`);

// // Destructuración de arreglos
// console.log("%c6.- Métodos de Arreglos que crean un nuevo arreglo, para no modificar el original", style4);
// // ---- Filter ----
// console.log("%c6.1.- Filter", style5);
// console.log(`El arreglo original es: `);
// console.log(signosZodiacales);
// console.log(`Filtrando Datos........`);
// let signosFiltrados = signosZodiacales.Filter((signosZodiacales) => signosZodiacales.length > 6);
// console.log("Filtrado terminado");
// console.log("El arreglo resultante es: ");
// console.log(signosFiltrados);

// ---- Map ----
console.log("%c6.1.- Map", style5);
const numeros = [1,2,3,4,5];
const dobles = numeros.map( numero => numero*2);
console.log("El arreglo original es: ");
console.log(numeros);
console.log("El arreglo del doble de los elementos del original es: ");
console.log(dobles);

// ---- Reduce ----
console.log("%c6.1.- Reduce", style5);
const numeros2 = [1,30,25,12,-5,17.5]
const sumaTotal = numeros2.reduce((totalParcial, elemento) => totalParcial + elemento)
console.log("El arreglo de número original es: ");
console.log(numeros2);
console.log(`La suma de los elementos es: ${sumaTotal}`);