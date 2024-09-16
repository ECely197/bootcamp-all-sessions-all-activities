import express from "express";

const app = express();

const usuarios = [
  { name: "leia", lastname: "organa" },
  { name: "luke", lastname: "skywalker" },
  { name: "daniela", lastname: "morales" },
  { name: "jessica", lastname: "cheque" },
];

app.get("/api/users/all", function (request, response) {

  return response.json(usuarios);
});


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

  for (let usuario of usuarios) {
    if (usuario.name === request.params.name) {
      return response.json(usuario);
    }
  }
  return response.json("no hemos encontrado ningun usuario");
});


app.listen(3000, function () {
  console.log("servidor corriendo en el puerto 300");
});
