import { body, validationResult } from "express-validator";
const productValidation = {
  createProduct: [
    body("id")
      .notEmpty()
      .withMessage("El campo id es obligatorio")
      .isNumeric()
      .withMessage("El campo debe ser un numero"),
    body("titulo")
      .notEmpty()
      .withMessage("El valor es obligatorio")
      .isString()
      .withMessage("el valor debe ser de texto sin caracteres especiales"),
    body("descripcion")
      .notEmpty()
      .withMessage("La descripcion debe ser obligatoria")
      .isString()
      .withMessage("La descrpcion debe tener texto sin caracteres especiales"),
  ],
  updateProduct: [
    body("id")
      .notEmpty()
      .withMessage("El campo id es obligatorio para encontrar que producto quieres editar")
      .isNumeric()
      .withMessage("El campo debe ser un numero"),
    body("titulo")
      .notEmpty()
      .withMessage("El valor es obligatorio")
      .isString()
      .withMessage("el valor debe ser de texto sin caracteres especiales"),
    body("descripcion")
      .notEmpty()
      .withMessage("La descripcion debe ser obligatoria")
      .isString()
      .withMessage("La descrpcion debe tener texto sin caracteres especiales"),
  ],
  findProduct: [],
  destroyProduct: [],
};

export default productValidation;
