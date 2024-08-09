var usuario1 = ["Leia", "organa", 29];
var usuario2 = ["luke", "skywalker", 29];

var nuevoUsuario1 ={
    nombre: "leia",
    apellido: "organa",
    edad: 29,
    hobbies: ["videojuegos", "programar"],
    saludar: function(){
        return "Hola soy " + this.nombre;
    }
}

console.log(nuevoUsuario1.saludar());
console.log(nuevoUsuario1.hobbies[0]);