const lista = document.querySelector("ul");
const buttonAddCard = document.querySelector("#agregar-card");
const cardContainer = document.querySelector(".cards");

lista.insertAdjacentHTML("beforeend", "<li>Item 2</li>");

// buttonAddCard.addEventListener("click", () => {
//   cardContainer.insertAdjacentHTML(
//     "beforeend",
//     `<div class='cards'>
//     <img src='https://i.blogs.es/3c0eff/totoro-poster/1366_2000.jpg' alt=''>
//     <h1>Lorem, ipsum.</h1>
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse animi et blanditiis aut. A modi tenetur maxime, magnam vitae aperiam tempore quisquam veniam facere ipsa!</p>`
//   );
// });

buttonAddCard.addEventListener("click", ()=>{
    const nuevaCard = document.createElement("div");
    const imagen = document.createElement("img");
    const subtitulo = document.createElement("h2");
    const parrafo = document.createElement("p");

    imagen.setAttribute("src", "https://i.blogs.es/3c0eff/totoro-poster/1366_2000.jpg");
    imagen.setAttribute("alt", "imagen de totoro");

    const contenidoSubtitulo = document.createTextNode("Ad lorem impsum");
    subtitulo.appendChild(contenidoSubtitulo);

    const contenidoParrafo = document.createTextNode("titulo de la card");
    parrafo.appendChild(contenidoParrafo);

    nuevaCard.appendChild(imagen);
    nuevaCard.appendChild(subtitulo);
    nuevaCard.appendChild(parrafo);

    cardContainer.appendChild(nuevaCard);
})

//ES6

const nombre = "Leia";
const apellido = "Organa";

console.log("Hola, mi nombre es " + nombre + " " + apellido);

console.log(`Hola, mi nombre es ${nombre} ${apellido}`);
