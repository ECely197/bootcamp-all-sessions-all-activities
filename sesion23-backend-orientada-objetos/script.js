// Mascotas - nombre - extremidades - edad
// Usuarios- nombre - apellido - email - password
class usuario {
    estado = "activo"; 
     constructor (nombre, apellido, email, password){
     this.nombre = nombre
       this.apellido = apellido 
       this.email = email
       this.password = password
     }
   }
   
   
   
   class Mascota {
       constructor (nombre, extremidades, edad){
         this.name = nombre 
         this.legs = extremidades
         this.age = edad
       }
     }
     
     const primeraMascota = new Mascota ("Sevda", 4, 1.5);
     const otraMascota = new Mascota ("Hade", 4, 1.5);
   const usuario1 = new usuario ("edwin", "cely", "edwincely6@magil.com", "123123");
   
     console.log (usuario1);
     console.log (primeraMascota);
     console.log (otraMascota);
   
   
   
   //////////////////
   
   
   function sumar (numeroA = 0, numeroB = 0){
     return numeroA + numeroB
   }
   console.log(sumar(100                                  ))