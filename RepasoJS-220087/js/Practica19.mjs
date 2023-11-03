const bg20 = 'radial-gradient(circle, rgba(95,251,63,1) 0%, rgba(70,252,174,0.907527977011117) 100%)';
const bg21 = 'radial-gradient(circle, rgb(251, 160, 63) 0%, rgba(237, 252, 70, 0.91) 100%)';

const style20 = `background: ${bg20}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const style21 = `background: ${bg21}; color: white; border-radius: 12px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;
const reto14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;
const subStyle14 = `background: red; color: white; border-radius: 12px; padding: 4px 3px;margin-left: 20px; font-size: 1.0rem; font-weight: bold;`;


console.warn(" ----- Practica 19: Multiples pedidos a una API -----");

   const endpointPostsURL = "https://jsonplaceholder.typicode.com/comments"
   const endpointPhotosURL = "https://jsonplaceholder.typicode.com/photos"
   // Promises
   
   
   console.warn("Práctica 19. Multiples petidios a un API")
   
   const consultaAPI_Posts = async() =>
   {
     const respuestaPosts = await fetch(endpointPostsURL)
     console.log("He regrasado con los datos de los POST...")
     const resultadoPosts = await respuestaPosts.json()   // le da formato de JSON al objeto resultante de la API
     /*console.log("Ya convertí los resultados  de los POST en formato JSON")
     resultadoPosts.forEach(post => console.log(post))
     console.log("He terminado de imprimir los resultados de los POST devueltos por el API")*/
   }
   
   
   const consultaAPI_Photos = async() =>
   {
     const respuestaPhotos = await fetch(endpointPhotosURL)
     console.log("He regrasado con los datos de las PHOTOS...")
     const resultadoPhotos = await respuestaPhotos.json()   // le da formato de JSON al objeto resultante de la API
     /*console.log("Ya convertí los resultados de las PHOTOS en formato JSON")*/
     /*resultadoPhotos.forEach(photos => console.log(photos))
     console.log("He terminado de imprimir los resultados de las PHOTOS devueltas por el API.")*/
   }
   
   
   const consulta_Paralela_API=  async() =>
   {
       const [respuestaPost2, respuestaPhotos2] = await Promise.all([fetch(endpointPostsURL), fetch(endpointPhotosURL)]);
   
       const resultadoPosts = await respuestaPost2.json()
       const resultadoPhotos = await respuestaPhotos2.json()
   
       console.log(resultadoPosts)
       console.log(resultadoPhotos)
   }
   
   
   const llamadoSERIE =  async() => {
       const inicio = performance.now()
       console.log("%cIniciando los llamados en SERIE", style20)
       console.log("%cConsultado los POSTS", style20)
       await consultaAPI_Posts();
       console.log("%cConsultado las PHOTOS", style20)
       await consultaAPI_Photos();
       const fin = performance.now()
       console.log(`Llamado en SERIE ${fin-inicio} ms.`)
   }
   
   const llamadoPARALELO = () =>
   {
       const inicio = performance.now()
       console.log("%cIniciando los llamados en PARALELO", style21)
       console.log("%cConsultado los POSTS y PHOTOS al mismo tiempo", style21)
       consulta_Paralela_API()
       const fin = performance.now()
       console.log(`Llamado en PARALELO ${fin-inicio} ms.`)
   }
   
   
   llamadoSERIE()
   llamadoPARALELO()