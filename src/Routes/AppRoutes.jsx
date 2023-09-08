import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
