import db from "../config/db.js";

export const getAllProducts = (callback) => {
  db.query("SELECT * FROM products ORDER BY created_at DESC", callback);
};

export const createProduct = (data, callback) => {
  db.query("INSERT INTO products SET ?", data, callback);
};

export const updateProduct = (id, data, callback) => {
  db.query("UPDATE products SET ? WHERE id = ?", [data, id], callback);
};

export const deleteProduct = (id, callback) => {
  db.query("DELETE FROM products WHERE id = ?", [id], callback);
};
