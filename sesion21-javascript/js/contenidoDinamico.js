const personajes = [
  {
    nombreCompleto: "Rick Sanchez",
    imagen:
      "https://i.pinimg.com/236x/6a/6e/dc/6a6edc477e677e29ebcea9f6be626259.jpg",
  },
  {
    nombreCompleto: "Morty Smith",
    imagen:
      "https://e7.pngegg.com/pngimages/549/614/png-clipart-morty-smith-rick-sanchez-pocket-mortys-rick-and-morty-child-face.png",
  },
  {
    nombreCompleto: "Summer Smith",
    imagen:
      "https://www.gamespot.com/a/uploads/scale_landscape/1574/15746725/3690265-gsu_rickmorty_summer_site.jpg",
  },
  {
  nombreCompleto: "Pickle Rick", imagen: "https://www.latercera.com/resizer/2BQR5bdjlsg-ZDUjkyKEQ-wqICY=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/JCU5UKJNONEFVDRVG25DNG4LMI.jpg"
  },
];

const listaPersonajes = document.querySelector("#lista-personajes");

for (personaje of personajes) {
  // console.log(personaje);
  listaPersonajes.insertAdjacentHTML(
    "beforeend",
    `
        <article>
            <img src="${personaje.imagen}" alt="" />
            <h2>${personaje.nombreCompleto}</h2>
        </article>
    `
  );
}
