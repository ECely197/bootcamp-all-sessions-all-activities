import express from "express";
const app = express();

let products = [
  {
    id: 1,
    titulo: "Smartphone",
    descripcion:
      "Un teléfono inteligente con pantalla de 6.5 pulgadas, 128GB de almacenamiento y cámara de 48MP.",
  },
  {
    id: 2,
    titulo: "Laptop",
    descripcion:
      "Una laptop ultradelgada con procesador Intel i7, 16GB de RAM y 512GB de SSD.",
  },
  {
    id: 3,
    titulo: "Auriculares Inalámbricos",
    descripcion:
      "Auriculares Bluetooth con cancelación de ruido y una duración de batería de hasta 20 horas.",
  },
  {
    id: 4,
    titulo: "Reloj Inteligente",
    descripcion:
      "Un reloj inteligente resistente al agua con monitoreo de frecuencia cardíaca y GPS integrado.",
  },
];

app.get("/", function (req, res) {
  return res.json("Bienvenido a nuestra API");
});

app.get("/api/products/all", function (req, res) {
  return res.json(products);
});

app.get("/api/products/create", function (req, res) {
  if (req.query.id && req.query.titulo && req.query.descripcion) {
    const newProduct = {
      id: Number(req.query.id),
      titulo: req.query.titulo,
      descripcion: req.query.descripcion,
    };
    products.push(newProduct);
    return res.json(products);
  }
});

app.get("/api/products/edit/:id", function (req, res) {
  const productId = Number(req.params.id);
  for (const product of products) {
    if (product.id === productId) {
      product.titulo = req.query.titulo;
      product.descripcion = req.query.descripcion;

      return res.json({
        message: `Se han actualizado los datos del producto ${product.id}`,
      });
    }
  }
  return res.json({ message: "No se ha encontrado un producto con ese ID" });
});

app.get("/api/products/:id", function (req, res) {
  const productId = Number(req.params.id);
  for (const product of products) {
    if (product.id === productId) {
      return res.json(product);
    }
  }
  return res.json({ message: "No se ha encontrado un producto con ese ID" });
});

app.get("/api/products/delete/:id", function (req, res) {
  const productId = Number(req.params.id);
  const nuevoArrayDeProductos = [];
  for (const product of products) {
    if (product.id !== productId) {
      nuevoArrayDeProductos.push(product);
    }
  }
  products = nuevoArrayDeProductos;
  return res.json({ message: `se ha eliminado el producto ${req.params.id}` });
});

app.listen(3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
