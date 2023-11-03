const url = "https://jsonplaceholder.typicode.com/comments";

console.warn("---- Practica 18: Fetch a una API ----");
// Promises
const consultarAPI = () => {
    fetch(url)
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('Network response was not ok');
            }
            return respuesta.json();
        })
        .then((resultado) => {
            resultado.forEach(comentario => {
                console.log(comentario);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Async Await
const consultarAPIaw = async () => {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }
        const resultado = await respuesta.json();
        resultado.forEach(comentario => {
            console.log(comentario);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función que desees
consultarAPIaw();  // o consultarAPI();