import productoController from "../controllers/productController.js";
import manipularReq from "../middlewares/manipularReq.js";
import productValidation from "../middlewares/productValidation.js";
import express from "express";
const router = express.Router();


router.get("/", function (req, res) {
    return res.json("Bienvenido a nuestra API");
  });

router.get("/api/products", productoController.getAll);

router.post(
  "/api/products",
  productValidation.createProduct,
  productoController.createProduct
);

router.patch("/api/products/:id", productoController.updateProduct);

router.get("/api/products/:id", manipularReq, productoController.findProduct);

router.delete("/api/products/:id", productoController.destroyProduct);

export default router;
