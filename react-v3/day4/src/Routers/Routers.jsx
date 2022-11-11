import React from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import About from "../Pages/About/About";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductAdd from "../Pages/Products/ProductAdd";
import ProductEdit from "../Pages/Products/ProductEdit";
import ProductDelete from "../Pages/Products/ProductDelete";
import Profile from "../Pages/User/Profile";
import Login from "../Pages/User/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Thankiu from "../Pages/Checkout/Thankiu";
import FindProducts from "../Pages/Products/FindProducts";
import Url from "../Helper/Url";
const url = new Url();
const CheckUser = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={url.login} />;
};
export default function Routers() {
  return (
    <Routes>
      <Route path={url.home} element={<Home />} />
      <Route path={url.about} element={<About />} />
      <Route path={url.checkout} element={<Checkout />} />
      <Route path={`${url.filters}/:slug`} element={<FindProducts />} />
      <Route path={url.thanks} element={<Thankiu />} />
      <Route element={<CheckUser />}>
        <Route path={url.profile} element={<Profile />} />
      </Route>
      <Route path={url.login} element={<Login />} />
      <Route path={url.products}>
        <Route path={""} element={<Products />} />
        <Route path={"add"} element={<ProductAdd />} />
        <Route path={"edit"} element={<ProductEdit />} />
        <Route path={"delete"} element={<ProductDelete />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
