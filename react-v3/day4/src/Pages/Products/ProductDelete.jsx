import React from "react";
import Url from "../../Helper/Url";
import { Link } from "react-router-dom";
const url = new Url();
export default function ProductDelete() {
  return (
    <>
      <h1>Product Delete</h1>
      <Link to={`${url.products}`}>Product</Link>
      <Link to={`${url.products}/add`}>Add</Link>
      <Link to={`${url.products}/edit`}>Edit</Link>
    </>
  );
}
