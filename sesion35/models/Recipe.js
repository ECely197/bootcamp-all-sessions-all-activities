import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title es required"],
    },
    description: String,
    preparation: {
      ingredients: String,
      cookins: String,
      total: String,
    },
    instructions: [String],
    deleteAt:{
        type: Date,
        default: null,
    },
  },
  {
    timestamps: [true],
    
  },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
