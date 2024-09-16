import express from "express";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";
import recipeController from "./controllers/recipeController.js";

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

/////// RUTAS

app.use(recipeRoutes);

////// FIN RUTAS

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
