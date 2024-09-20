import mongoose, { mongo } from "mongoose";
import User from "./user.js";
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
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: [true],
    
  },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
