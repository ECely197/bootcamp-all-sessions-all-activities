const tituloPrincipal = document.querySelector("h1");
const subtitulo = document.querySelector ("h2");
const parrafo = document.querySelector ("#parrafo1");
const elementosDeLista = document.querySelectorAll("li");
const itemDestacado = document.querySelector(".item-destacado");
const buttonDestacado = document.querySelector("#button-destacado");
const buttonItalicas = document.querySelector("#button-italicas");
const toggleMenu = document.querySelector("#toggle-menu");
const mainMenu = document.querySelector("nav")

console.log(parrafo.style);


// itemDestacado.classList.add("item-super-destacado");

tituloPrincipal.addEventListener("click", () => {
    console.log("Se ha hecho click en el titulo principal");
} );

buttonDestacado.addEventListener("click", () => {
    itemDestacado.classList.toggle("item-super-destacado");
})

buttonItalicas.addEventListener("click", () => {
    // parrafo.classList.add("italicas")
    if (parrafo.classList.contains("italicas")){
        parrafo.classList.remove("italicas");
    }else{
        parrafo.classList.add("italicas");
    }
});


 toggleMenu.addEventListener("click", () =>{
     mainMenu.classList.toggle("hide"); // directamente para ocultar o mostrar alguna clase o elemento, sirve para ocultar o cambiar cualquier tipo de estilo en css
 })

// hover
