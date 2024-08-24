import pruebaMiddleware from "./middlewares/pruebaMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

import express from "express";
const app = express();

app.use(express.json());
app.use(pruebaMiddleware);

app.use(productRoutes);

app.get("*", (req, res) => res.status(404).json(`Not Found`));

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
