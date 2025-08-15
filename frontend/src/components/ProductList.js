import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductList = ({ products = [], onDelete }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search & Filter */}
      <div className="mb-4 d-flex justify-content-center gap-2 ">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control w-50 border-success shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-select w-auto border-success shadow-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <h5 className="text-center text-danger mt-4">No Products Found</h5>
      ) : (
        filteredProducts.map((p) => (
          <div className="py-3 row g-3 " key={p.id}>
            <div className="col mx-auto">
              <div className="cardGreen rounded-4 bg-light">
                <div className="card-body text-center">
                  <div className="row align-items-center text-center">
                    
                    <div className="col-md-2 mt-3">
                      <h4 className="card-title fw-bold mb-3">{p.name}</h4>
                    </div>

                    <div className="col-6 col-md-2">
                      <small className="text-muted">Description</small>
                      <p className="fw-semibold">{p.description}</p>
                    </div>

                    <div className="col-6 col-md-2">
                      <small className="text-muted">Price ($)</small>
                      <p className="fw-semibold">{p.price}</p>
                    </div>

                    <div className="col-6 col-md-2">
                      <small className="text-muted">Stock</small>
                      <p className="fw-semibold">{p.stock}</p>
                    </div>

                    <div className="col-6 col-md-2">
                      <small className="text-muted">Category</small>
                      <p className="fw-semibold">{p.category}</p>
                    </div>

                    <div className="col-6 col-md-2 d-flex justify-content-center editDeleteButton">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        title="Edit"
                        onClick={() => navigate(`/edit/${p.id}`)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm ms-2"
                        title="Delete"
                        onClick={() => {
                            onDelete(p.id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};


export default ProductList