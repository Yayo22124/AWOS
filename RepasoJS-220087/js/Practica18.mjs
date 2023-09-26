const url = "https://jsonplaceholder.typicode.com/comments";


// Promises
const consultarAPI = () => {
    fetch(url)
        .then((respuesta) => respuesta.json())

        .then((resultado) => {
            resultado.forEach(comentario => {
                console.log(comentario);
            });
        })
}


// Async Await
const consultarAPIaw = async () => {
    const respuesta = await fetch(url)
    console.log('antes de la respuesta');
    const resultado = await respuesta.json();
    console.log('despues del resulado');
}
consultarAPIaw();