import React from "react";
import "./Products.css";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <div>
        <input type="text" placeholder="Search Product" />
      </div>
      <nav>
        <Link to="feature">Feature</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
