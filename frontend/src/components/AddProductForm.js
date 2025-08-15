import React, { useState } from "react";

const AddProductForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price || !stock) {
      alert("⚠ Please fill in all required fields.");
      return;
    }
    onSubmit({
      name,
      description,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
    });

    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setStock("");
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-3" style={{ backgroundColor: "#f1f8f4" }}>
      <div className="card-body">
        <h3 className="mb-4 fw-bold text-success text-center"> Add New Product</h3>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Product Name <span className="text-danger">*</span></label>
            <input type="text" className="form-control border-success shadow-sm"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>


          <div className="mb-3">
            <label className="form-label fw-semibold">Description <span className="text-danger">*</span></label>
            <textarea className="form-control border-success shadow-sm"
              value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Price ($) <span className="text-danger">*</span></label>
              <input type="number" step="0.01" className="form-control border-success shadow-sm"
                value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Category</label>
              <input type="text" className="form-control border-success shadow-sm"
                value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
          </div>


          <div className="mb-4">
            <label className="form-label fw-semibold">Stock Quantity <span className="text-danger">*</span></label>
            <input type="number" className="form-control border-success shadow-sm"
              value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-success btn-lg w-100 fw-bold shadow-sm">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
