import express from "express";
import connectDB from "./config/database.js";
import User from "./models/User.js";
import Recipe from "./models/Recipe.js";

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

//rutas

app.get("/", (req, res) => {
  return res.json("Probando MongoDB");
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    return res.json(user);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
});

app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    return res.json(recipes);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
    });
    return res.json(newUser);
  } catch (error) {
    return res.status(500).json("Error en el servidor");
  }
});

app.post("/api/recipe", async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      title: req.body.title,
      description: req.body.description,
      preparation: {
        ingredients: req.body.preparation.ingredients,
        cooking: req.body.preparation.cooking,
        total: req.body.preparation.total,
      },
      instructions: req.body.instructions,
    });
    return res.json(newRecipe);
  } catch (error) {
    return res.status(501).json("Error en el servidor");
  }
});

app.get("/api/recipe/:id", async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    return res.json(recipe);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
