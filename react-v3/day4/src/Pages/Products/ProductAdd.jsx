import React from "react";
import Url from "../../Helper/Url";
import { Link } from "react-router-dom";
const url = new Url();
export default function ProductAdd() {
  return (
    <>
      <h1>Product Add</h1>
      <Link to={`${url.products}`}>Product</Link>
      <Link to={`${url.products}/edit`}>Edit</Link>
      <Link to={`${url.products}/delete`}>Delete</Link>
    </>
  );
}
