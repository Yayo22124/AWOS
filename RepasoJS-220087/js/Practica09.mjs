// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 09: Funciones en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg9 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style9 = `background: ${bg8}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto9 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle9 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;

// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 09: Funciones en JavaScript -----");

console.log("%c1.- Utilizando FUNCTION DECLARATION - Declaracion Formal", style9);
console.log("%c1.1.- Sin Parámetros", subStyle9);
suma()

function suma() {
    console.log(2+2);
}
suma()
suma()
suma()

console.log("%c1.2.- Con Parámetros", subStyle9);
function suma2numeros(numero1, numero2) {
    return numero1 + numero2;
}

console.log(`El resultado de la suma es: ${suma2numeros(3,8)}`);
console.log(`El resultado de la suma es: ${suma2numeros(9,2)}`);
console.log(`El resultado de la suma es: ${suma2numeros(-5,2)}`);
console.log(`El resultado de la suma es: ${suma2numeros(-5,"asdf")}`);
console.log(`El resultado de la suma es: ${suma2numeros(1,2,3)}`);

// Reto
console.log("%c RETO VALIDACION", reto9);
function sumaValidacion(numero1, numero2) {
    if (typeof(numero1) != "number" || typeof(numero2) != "number") {
        console.log("Uno de tus numeros ingresados no es numerico");
    } else {
        console.log(numero1+numero2);
    }
}

sumaValidacion(1,2)
sumaValidacion(-2,3)
sumaValidacion(-2,"2")
sumaValidacion(-2,"asda")

console.log("%c1.3.- Con Parámetros por DEFECTO", style9);
function multiplicar(a = 1, b = 5) {
    return (a*b)
}
console.log(`El resultado de la multiplicación es: ${multiplicar(5,2)}`);
console.log(`El resultado de la multiplicación es: ${multiplicar(5)}`);


console.log("%c1.4.- Cuando retornan un resultado de tipo objeto", style9);
function saludoHora(persona, hora = new Date(), saludoHora) {
    // console.log(`La hora actual es: ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
    let horas = hora.getHours(), minutos = hora.getMinutes(), segundos = hora.getSeconds();
    if (horas >= 6 && horas < 12) {
        saludo = "Buenos Días"
    } else if (horas > 12 && horas < 19) {
        saludo = "Buenas Tardes"
    } else {
        saludo = "Buenas Noches"
    }
    return [persona, horas, ${saludo}, ${persona}]
}

let saludo = saludoHora("Juan");
console.table(saludo);

let [,,saludoWeb] = saludo;
console.log(saludoWeb ||);