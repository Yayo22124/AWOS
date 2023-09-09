// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 05: Objetos en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg2 = 'linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)';

const style3 = `background: ${bg2}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;


// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 05: Objetos en JavaScript -----");

// UNSIGNED
console.log("%c1.- Variables Independientes", style3);

console.log("Leyendo los datos desde variables independientes del Producto.");
let Nombre_Producto = "ASUS TUF F15"
console.log(`Nombre: ${Nombre_Producto} ${typeof(Nombre_Producto)}`);

let Precio_Producto = 17999;
console.log(`Precio: $${Precio_Producto} ${typeof(Precio_Producto)}`);

let Disponibilidad_Producto = true
console.log(`Nombre: ${Disponibilidad_Producto} ${typeof(Disponibilidad_Producto)}`);

// -------------------- OBJETOS --------------------
console.log("%c2.- Objetos", style3);
let productoObjeto = {
    nombre: "ROG Zephyrus 14",
    precio: 24000,
    disponibilidad: true
}

console.log(productoObjeto);
console.table(productoObjeto);

console.log("Leyendo los datos desde variables independientes del Producto.");
console.log(`Nombre: ${productoObjeto.nombre} ${typeof(productoObjeto.nombre)}`);
console.log(`Precio: $${productoObjeto.precio} ${typeof(productoObjeto.precio)}`);
console.log(`Nombre: ${productoObjeto.disponibilidad} ${typeof(productoObjeto.disponibilidad)}`);

// -------------------- DESESTRUCTURACION DE OBJETOS --------------------
console.log("%c3.- Desestructuración de Objetos", style3);
let {nombre: productName, precio: productPrice, disponibilidad: productAvailability} = productoObjeto;
let productCategory;

console.log(productName);
productPrice = productPrice / 20;
console.log(productPrice);
console.log(productAvailability);


console.log();
if (productAvailability === true) {
    productAvailability = 'Product Available'
} else {
    productAvailability = 'Product Not Available'
}
if (productPrice >= 100) {
    productPrice = "Expensive";
} else {
    productPrice = "Cheap";
}
if (productName.includes("ROG")) {
    productCategory="Gamer";
} else {
    productCategory="Laptop";
}

console.log(`Leyendo los datos desestructuraos: Name: ${productCategory}, Price: ${productPrice}, Disponibility: ${productAvailability}`);

console.table(productoObjeto);

// -------------------- DESESTRUCTURACION DE OBJETOS --------------------
console.log("%c4.- Mejora de Objetos (Object Literal Enhancent)", style3);
const ObjetoRehecho = {productName, productPrice, productAvailability, productCategory}
console.table(ObjetoRehecho);