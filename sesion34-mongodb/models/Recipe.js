import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    title: String,
    description: String,
    preparation: {
      ingredients: String,
      cooking: String,
      total: String,
    },
    instructions: [String],
  });
  
  const Recipe = mongoose.model("Recipe", recipeSchema);

  export default Recipe;