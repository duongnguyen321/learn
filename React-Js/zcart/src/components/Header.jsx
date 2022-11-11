import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Giỏ hàng</h1>
        </a>
      </div>
      <div>
        <a href="#/back">Quay lại</a>
      </div>
    </header>
  );
}
