import express from "express";
import slugify from "slugify";
const app = express();

const users = [
  { id: 1, name: "Leia", lastname: "Organa", slug: "Leia-Organa" },
  { id: 2, name: "Luke", lastname: "Skywalker", slug: "Luke-Skywalker" },
  { id: 3, name: "Han", lastname: "Solo", slug: "Han-Solo" },
  { id: 4, name: "Danii", lastname: "Bohorquez" },
];

// Rutas
app.get("/", function (req, res) {
  return res.json(
    "Te damos la bienvenida a nuestra API de personajes de Star Wars"
  );
});

app.get("/api/users/all", function (req, res) {
  return res.json(users);
});

app.get("/api/users/create", function (req, res) {
  if (req.query.id && req.query.name && req.query.lastname) {
    const newUser = {
      id: Number(req.query.id),
      name: req.query.name,
      lastname: req.query.lastname,
      slug: slugify(`${req.query.name} ${req.query.lastname}`, {lower:true}),
    };
    users.push(newUser);
    return res.json("Se ha creado un nuevo usuario");
  }

  return res.json(
    "Es necesario pasar los datos ID, name y lastname para crear nuevo usuario"
  );
});

app.get("/api/users/name/:name", function (req, res) {
    const nameParam = req.params.name;
    for (const user of users) {
      if (user.name === nameParam) {
        return res.json(user);
      }
    }
    return res.json("No se ha encontrado ningun usuario con ese slug");
  });

  app.get("/api/users/lastname/:lastname", function (req, res) {
    const lastnameParam = req.params.lastname;
    for (const user of users) {
      if (user.lastname === lastnameParam) {
        return res.json(user);
      }
    }
    return res.json("No se ha encontrado ningun usuario con ese slug");
  });

app.get("/api/users/:slug", function (req, res) {
  const slugParam = req.params.slug;
  for (const user of users) {
    if (user.slug === slugParam) {
      return res.json(user);
    }
  }
  return res.json("No se ha encontrado ningun usuario con ese slug");
});



app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
