// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 07: Arreglos en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg3 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style4 = `background: ${bg3}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
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
meses.push('Diciembre');
console.table(meses);

// Agregar elementos a un array (al inicio)
console.log("Para agregar elementos a un array al inicio del mismo se usa el método PUSH  ");
meses.unshift('Enero')
console.table(meses);

