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

function getAll(req, res) {
  return res.json(products);
}

function createProduct(req, res) {
  if (req.body.id && req.body.titulo && req.body.descripcion) {
    const newProduct = {
      id: Number(req.body.id),
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
    };
    products.push(newProduct);
    return res.status(201).json({ message: `Se ha creado el producto` });
  }
}

function updateProduct(req, res) {
  const productId = Number(req.params.id);
  for (const product of products) {
    if (product.id === productId) {
      product.titulo = req.body.titulo || product.titulo;
      product.descripcion = req.body.descripcion || product.descripcion;

      return res.json({
        message: `Se han actualizado los datos del producto ${product.id}`,
      });
    }
  }
  return res
    .status(404)
    .json({ message: "No se ha encontrado un producto con ese ID" });
}

function getProduct(req, res) {
  const productId = Number(req.params.id);
  for (const product of products) {
    if (product.id === productId) {
      return res.json(product);
    }
  }
  return res.json({ message: "No se ha encontrado un producto con ese ID" });
}

function destroyProduct(req, res) {
  const productId = Number(req.params.id);
  const nuevoArrayDeProductos = [];
  for (const product of products) {
    if (product.id !== productId) {
      nuevoArrayDeProductos.push(product);
    }
  }
  products = nuevoArrayDeProductos;
  return res.json({ message: `se ha eliminado el producto ${req.params.id}` });
}

export default {
  getAll: getAll,
  createProduct: createProduct,
  updateProduct: updateProduct,
  getProduct: getProduct,
  destroyProduct: destroyProduct,
};
