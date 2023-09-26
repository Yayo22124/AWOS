// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 08:  en JavaScript
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
// 
// --------------------------------------------------------------------------------

// Estilizacion de secciones
const bg8 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style8 = `background: ${bg8}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const subStyle8 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;

// Personalizacion de las Salidas en consola
console.warn(" ----- Practica 08:  en JavaScript -----");

// Declaración de un Arreglo 
console.log("%c1.- Utilizando el Bucle FOR", style8);
let tecnologias = ["HTML", "JavaScript", "Python", "MySQL", "Angular", "Flutter", "React", "Django", "Flask", "Jira", "Git", "Swagger","HTML"];
for (let i = 0; i < tecnologias.length; i++) {
    console.log(`Elemento en la posición ${i}: ${tecnologias[i]}`);
}
// i ya no existe

//Reto WHILE :)
console.log("%c1.2.- RETO WHILE", subStyle8);

// Utilizando un bucle(ciclo) FOREACH - Para cada
console.log("%c2.- Utilizando el Bucle FOREACH", style8);
tecnologias.forEach((elemento) => console.log(`Elemento en la posicion ?? : ${elemento}`));


// Reto FOREACH
console.log("%c1.2.- RETO FOREACH", subStyle8);
tecnologias.forEach((elemento,i) => console.log(`Elemento en la posicion ?? : ${elemento}`));
tecnologias.forEach((elemento) => console.log(`Elemento en la posicion ${tecnologias.indexOf(elemento)} : ${elemento}`));

// MAP
console.log("%c3.- Utilizando MAP para transformar los elementos", style8);
tecnologias.map((elemento) => console.log(elemento));
tecnologias.pop(tecnologias);

let tecnologiasTipo = tecnologias.map(
    (elemento) => {
        if (["HTML", "Angular", "React"].includes(elemento)){
            return elemento + ", Frontend";
        } 
        else if (["Python", "MySQL", "Jira", "Flask"].includes(elemento)) {
            return elemento + ", Backend";
        } 
        else {
            return elemento + ", Frontend y Backend";
        }
    }
);
console.table(tecnologiasTipo)

// TAREA
// En un arreglo poner el nombre de 10 materias y en otro arreglo poner el nombre de 10 alumnos (estaticos), el tercer arreglo es dinamico
// En el tercero poner el indice del alumno con el indice de la materia y su calificacion