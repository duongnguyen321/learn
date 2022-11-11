import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import SearchProducts from "../components/SearchProducts";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" index element={<SearchProducts />} />
      <Route path=":id" element={<Products/>} />
    </Routes>
  );
}
