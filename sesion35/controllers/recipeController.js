import Recipe from "../models/Recipe.js";

async function getAll(req, res) {
  try {
    const recipes = await Recipe.find({deleteAt: null});
    return res.json(recipes);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
  return res.json("Listado completo de recetas...");
}

async function getRecipe(req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    return res.json(recipe);
  } catch (error) {
    return res.status(404).json(`Error no hay una receta con este ID`);
  }
}

async function createRecipe(req, res) {
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
    console.log(error.errors.title.properties.message);
    return res.status(501).json("Error en el servidor");
  }
}

async function updateRecipe(req, res) {
  const recipeToUpdate = await Recipe.findById(req.params.id);

  if (recipeToUpdate !== null) {
    const { title, description, preparation, instructions } = req.body;

    recipeToUpdate.title = title || recipeToUpdate.title;
    recipeToUpdate.description = description || recipeToUpdate.description;
    recipeToUpdate.preparation = preparation || recipeToUpdate.preparation;
    recipeToUpdate.instructions = instructions || recipeToUpdate.instructions;

    await recipeToUpdate.save();

    return res.json("La receta ha sido actualizada");
  } else {
    return res.json("No existe ninguna receta con el ID");
  }
}

async function destroyRecipe(req, res) {
const recipeTodelete = await Recipe.findById(req.params.id);

recipeTodelete.deleteAt = Date.now();
recipeTodelete.save();
return res.json("La receta se ha eliminado");
};

export default {
  getAll: getAll,
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  updateRecipe: updateRecipe,
  destroyRecipe: destroyRecipe
};
