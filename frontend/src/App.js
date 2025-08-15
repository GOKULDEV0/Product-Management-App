import React, { useState, useEffect } from "react";
import api from "./api";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import EditProductForm from "./components/EditProductForm";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const App=()=> {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (product) => {
    await api.post("/products", product);
    fetchProducts();
    navigate("/");
  };

  const handleEditProduct = async (product) => {
    await api.put(`/products/${product.id}`, product);
    setSelectedProduct(null);
    fetchProducts();
    navigate("/");
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  return (
    <div >
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                onEdit={(p) => {
                  setSelectedProduct(p);
                  navigate(`/edit/${p.id}`);
                }}
                onDelete={handleDelete}
              />
            }
          />
          <Route
            path="/add"
            element={<AddProductForm onSubmit={handleAddProduct} />}
          />

            <Route path="/edit/:id" element={<EditProductForm products={products} onSubmit={handleEditProduct} />} />

        </Routes>
      </div>
    </div>
  );
}

export default App