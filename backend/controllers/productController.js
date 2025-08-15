import * as Product from "../models/productModel.js";

export const getProducts = (req, res) => {
  Product.getAllProducts((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const addProduct = (req, res) => {
  const { name, description, price, category, stock } = req.body;
  if (!name || !description || !price || !stock)
    return res.status(400).json({ error: "All required fields must be filled" });

  Product.createProduct(
    { name, description, price, category, stock },
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId });
    }
  );
};

export const editProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, stock } = req.body;
  Product.updateProduct(
    id,
    { name, description, price, category, stock },
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Product updated" });
    }
  );
};

export const removeProduct = (req, res) => {
  const { id } = req.params;
  Product.deleteProduct(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Product deleted" });
  });
};
