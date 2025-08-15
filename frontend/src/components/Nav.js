import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarCustom px-4 py-2 sticky-top">
      <NavLink className="navbar-brand" to="/">
        Product Management App
      </NavLink>

      <button
        className="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto align-items-lg-center me-5">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Add Product
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
