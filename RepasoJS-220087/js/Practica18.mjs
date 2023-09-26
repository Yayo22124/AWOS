const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
.then( (respuesta) => {
    return respuesta.json();
})
.then( (resultado) => {
    console.log("Resultado casi listo");
})