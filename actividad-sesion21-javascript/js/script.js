const peliculas = [
  {
    portadaPelicula: "https://playmax.xyz/img/c/400/396/1717578881/197663.jpg",
    nombrePelicula: "Inside Out 2",
    añoLanzamiento: "2024",
    duracionPelicula: "98 minutos",
    dineroRecaudado: "$626.8 millones",
  },
  {
    portadaPelicula: "https://playmax.xyz/img/c/400/396/1717578881/197663.jpg",
    nombrePelicula: "Inside Out 2",
    añoLanzamiento: "2024",
    duracionPelicula: "98 minutos",
    dineroRecaudado: "$626.8 millones",
  },
  {
    portadaPelicula: "https://playmax.xyz/img/c/400/396/1717578881/197663.jpg",
    nombrePelicula: "Inside Out 2",
    añoLanzamiento: "2024",
    duracionPelicula: "98 minutos",
    dineroRecaudado: "$626.8 millones",
  },
  {
    portadaPelicula: "https://playmax.xyz/img/c/400/396/1717578881/197663.jpg",
    nombrePelicula: "Inside Out 2",
    añoLanzamiento: "2024",
    duracionPelicula: "98 minutos",
    dineroRecaudado: "$626.8 millones",
  },
];

const infoPelicula = document.querySelector("#lista-peliculas");

for (let pelicula of peliculas) {
//    console.log(pelicula)
  infoPelicula.insertAdjacentHTML(
    "beforeend",
    `
    <article>
         
            <img src="${pelicula.portadaPelicula}" alt="" / class="img-peliculas">
                <h2>${pelicula.nombrePelicula}</h2>
                    <ul>
                      <li>${pelicula.añoLanzamiento}</li>
                      <li>${pelicula.duracionPelicula}</li>
                       <li>${pelicula.dineroRecaudado}</li>
                  </ul>
        
    </article>
        `
  );
}
