import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderState from "./Context/ProviderState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderState>
      <App />
    </ProviderState>
  </React.StrictMode>
);
