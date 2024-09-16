import mongoose from "mongoose";

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/baseDeDatosDePrueba"
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;
