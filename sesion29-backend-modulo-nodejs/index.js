import productoController from "./controllers/productController.js";
import express from "express";
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  return res.json("Bienvenido a nuestra API");
});

app.get("/api/products", productoController.getAll);

app.post("/api/products", productoController.createProduct);

app.patch("/api/products/:id", productoController.updateProduct);

app.get("/api/products/:id", productoController.getProduct);

app.delete("/api/products/:id", productoController.destroyProduct);

app.get("*", (req, res) => res.status(404).json(`Not Found`));

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
