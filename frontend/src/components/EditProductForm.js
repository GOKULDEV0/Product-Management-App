import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const EditProductForm = ({ onSubmit, products }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setDescription(product.description || "");
      setPrice(product.price || "");
      setCategory(product.category || "");
      setStock(product.stock || "");
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock) {
      alert("⚠ Please fill in all required fields.");
      return;
    }
    onSubmit({
      id: product.id,
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
    });
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-3" style={{ backgroundColor: "#fff8e1" }}>
      <div className="card-body">
        <h3 className="mb-4 fw-bold text-warning text-center">Edit Product</h3>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control border-warning shadow-sm"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>


          <div className="mb-3">
            <label className="form-label fw-semibold">Description <span className="text-danger">*</span></label>
            <textarea className="form-control border-warning shadow-sm"
              value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required />
          </div>


          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Price ($) <span className="text-danger">*</span></label>
              <input type="number" step="0.01" className="form-control border-warning shadow-sm"
                value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input type="text" className="form-control border-warning shadow-sm"
                value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Stock Quantity <span className="text-danger">*</span></label>
            <input type="number" className="form-control border-warning shadow-sm"
              value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-warning btn-lg w-100 fw-bold shadow-sm text-white">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
