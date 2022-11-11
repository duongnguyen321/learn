import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Url from "../../Helper/Url";
const url = new Url();
export default function Checkout() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name) {
          navigate(url.thanks);
        }
      }}
    >
      <input
        type="text"
        placeholder="tên"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit">Thanh Toán</button>
    </form>
  );
}
