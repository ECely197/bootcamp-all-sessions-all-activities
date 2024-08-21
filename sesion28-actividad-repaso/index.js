import express from "express";
import { bienvenida, verLista, addUser, searchUser } from "./usuarios.js";
const app = express();


app.get("/", bienvenida);
app.get("/api/users", verLista);
app.get("/api/users/create", addUser);
app.get("/api/users/name/:name", searchUser);


app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
