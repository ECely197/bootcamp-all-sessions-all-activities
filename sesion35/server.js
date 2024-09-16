import express from "express";
import connectDB from "./config/db.js";
const app = express();
const PORT = 3000;



app.listen(PORT, () =>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})