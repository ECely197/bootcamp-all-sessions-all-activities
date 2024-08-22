
/// esto se debe correr en run js 

const users = [
    { id: 1, name: "Leia", lastname: "Organa" },
    { id: 2, name: "Luk", lastname: "Skywalker" },
    { id: 3, name: "Han", lastname: "Solo" },
  ];
  
   const numeros = [ 1, 2, 3, 4, 5, 6];
  
   const nuevoArrayDeNumeros = numeros.map(function(numero){
       return numero + 1;
   });
  
   // console.log(`Este es el nuevo array ->`, nuevoArrayDeNumeros);
  
  const userId = 3;
  const otroId = 2;
  const newName = "Obi-Wan";
  const newLastname = "Kenobi";
  
  //const nuevoArrayDeUsuarios = users.map(function (user) {
   // user.slug = user.name + user.lastname;
   // return user
  //});
  
  /////// metodo maps de array========================
  
  const nuevoArrayDeUsuario = users.map(function(user){
    if (user.id === userId){
      user.name = newName;
      user.lastname = newLastname;
    }
    return user;
  })
  
  
  //console.log(nuevoArrayDeUsuario);
  
  //// mtodo filter de arrays ==================
  
  const numerosPares = numeros.filter (function (numero){
    return numero % 2 === 0
  });
  
  const usuariosFiltrados = users.filter (function (user){
    if (user.id !== userId && user.id !== otroId){
      return true
    }else {
      return false
    }
    
    //return user.id !== userId && user.id !== otroId se puede escribir de las dos formas y saldra el mismo resultado 
    
  })
  
  console.log(usuariosFiltrados)
  
  //console.log (numerosPares)
  
  
  
  
  
  
  
  