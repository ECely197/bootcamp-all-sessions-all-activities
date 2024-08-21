import express from "express";

const app = express();

const usuarios = [
  { name: "leia", lastname: "organa" },
  { name: "luke", lastname: "skywalker" },
  { name: "daniela", lastname: "morales" },
  { name: "jessica", lastname: "cheque" },
];

//1. se encaga de responder el listado completo de usuarios
app.get("/api/users/all", function (request, response) {
  //a. buscar lista de usuarios
  //b. una vez tenga el listado, lo envio como respuesta
  return response.json(usuarios);
});
//2. se encarga de responder un usuario en particular

app.get("/api/users/create", function (request, response) {
  console.log(request.query.name);
  console.log(request.query.lastname);

  usuarios.push({
    name: request.query.name,
    lastname: request.query.lastname,
  });

  return response.json(usuarios)
});

app.get("/api/users/:name", function (request, response) {
  //a. dentro del listado de usuarios, recuperar el que se nos ha pedido (daniela) ✅
  //b. una vez tengo el usuario que correpsonde, lo envio como respuesta (json)✅

  for (let usuario of usuarios) {
    if (usuario.name === request.params.name) {
      return response.json(usuario);
    }
  }
  return response.json("no hemos encontrado ningun usuario");
  // response.json(usuarios[0]);
});

//3. se encarga crear un nuevo usuario

app.listen(3000, function () {
  console.log("servidor corriendo en el puerto 300");
});
