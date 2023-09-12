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

// VARIABLES INDEPENDIENTES
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

// -------------------- Mejora de Objetos --------------------
console.log("%c4.- Mejora de Objetos (Object Literal Enhancent)", style3);
const ObjetoRehecho = {productName, productPrice, productAvailability, productCategory}
console.table(ObjetoRehecho);
// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 06: Continuación de Objetos en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// -------------------- Agregar propiedades a un Objeto --------------------
console.log("%c5.- Agregar propiedades de Objetos", style3);
console.table(productoObjeto);
productoObjeto['Marca'] = "ASUS Republic of Gamers";
productoObjeto['imagen'] = "https://m.media-amazon.com/images/I/71o6nKXmjTL.jpg";
productoObjeto['color'] = "Gris Metalico Puro";
console.table(productoObjeto);

// -------------------- Eliminar propiedades a un Objeto --------------------
console.log("%c6.- Eliminar propiedades de Objetos", style3);
console.table(productoObjeto);
delete productoObjeto['color'];
console.table(productoObjeto);

// -------------------- Modificar el valor de una propiedad a un Objeto --------------------
console.log("%c7.- Modificar el valor de una propiedad a un objeto existente", style3);
console.table(productoObjeto);
productoObjeto.nombre = "MSI GT79";
productoObjeto.Marca = "MSI";
productoObjeto.precio = 42999.99;
console.table(productoObjeto);

// -------------------- Métodos para el control de modificaciones el objeto --------------------
// Freeze: Congela a un Objeto provocando que no se pueda modificar nada del mismo
console.log("%c8.- Métodos para el control de modificaciones el objeto", style3);
console.table(productoObjeto);
// Object.freeze(productoObjeto);
productoObjeto.Marca = "DELL";
productoObjeto.nombre = "DELL Victus 16";
productoObjeto.precio = 22999.99;
console.table(productoObjeto);


// -------------------- Métodos para el control de modificaciones el objeto --------------------
// Seal: Se pueden modificar los valores de las propuedades exitentes pero no se puede moficiar la estructura del objeto.
console.log("%c9.- Sellado de un objeto < SEAL >", style3);

let clienteObjeto = {
    nombre : "Eli Haziel Ortiz Ramirez",
    correo : "ya-yo22124@outlook.com",
    tipo : "Frecuente"
};

console.table(clienteObjeto);
Object.seal(clienteObjeto);
clienteObjeto.correo = "haziel.ortiz04@gmail.com";
clienteObjeto["Direccion"] = "Venustiano Carranza No. 112";
delete clienteObjeto['tipo'];
console.table(clienteObjeto);


// -------------------- Métodos para el control de modificaciones el objeto --------------------
// Los objetos se convierten en variables y por ende deben renombrarse para evitar problemas o errores con nombres de variables existentes.
console.log("%c10.- Desestructuración de 2 o más objetos ", style3);

const { nombre: nombreP, precio: precioP, disponibilidad: disponibilidadP } = productoObjeto;
const {nombre: nombreC, correo: correoC, tipo: tipoC } = clienteObjeto;

console.log(nombreP, precioP, disponibilidadP);
console.log(nombreC, correoC, tipoC);

let ventaObjeto;
// -------------------- Unión de objetos con Assign (asignar) --------------------
console.log("%c11.- Unión de 2 o más Objetos usando Assign", style3);
// ventaObjeto = Object.assign(productoObjeto, clienteObjeto);
console.log('Objeto Venta: ');
console.table(ventaObjeto);
console.log('Objeto Producto: ');
console.table(productoObjeto);
console.log('Objeto Cliente: ');
console.table(clienteObjeto);

// -------------------- Unión de objetos con SpreadOperator (...) --------------------
console.log("%c12.- Unión de 2 o más Objetos usando SpreadOperator (...) ", style3);
ventaObjeto = {
    producto: {...productoObjeto},
    cliente: {...clienteObjeto}
};
console.log('Objeto Venta: ');
console.log(ventaObjeto);

console.log('Objeto Producto: ');
console.log(productoObjeto);

console.log('Objeto Cliente: ');
console.log(clienteObjeto);

clienteObjeto.correo = "220087@utxicotepec.edu.mx";
console.log('Objeto Cliente Modificado: ');
console.log(clienteObjeto);

console.log('Objeto Venta Modificado: ');
console.log(ventaObjeto);