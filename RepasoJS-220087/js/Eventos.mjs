// --------------------------------------------------------------------------------
//                          Repaso de JavaScript
// Practica 16: Creando nuevos elementos en el DOM (Document Object Model)
// Realizado por: Eli Haziel Ortiz Ramirez 220087 4B DSM
//
// --------------------------------------------------------------------------------
const bg20 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';

const style20 = `background: ${bg20}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto20 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle20 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Tarea: Probando eventos en el DOM -----");

console.log('%c 1. select ', style20)
function handleSelect(event) {
    const selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log('Texto seleccionado:', selectedText);
}

console.log('%c 2. volumechange ', style20)
const video = document.getElementById('miVideo'); // Selecciona el elemento de video

// Agregar evento para volumechange
video.addEventListener('volumechange', () => {
    console.log('Se ha cambiado el volumen.');
});

console.log('%c 2. canplaytrough ', style20)
// Agregar evento para canplaythrough
video.addEventListener('canplaythrough', () => {
    const notificacionDiv = document.createElement('div');
    notificacionDiv.innerText = 'El video puede reproducirse sin interrupciones.';
    notificacionDiv.classList.add('notificacion');
    document.body.appendChild(notificacionDiv);
    console.log("Se puede reproducir pai");
});
