import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { CartProvider } from "./core/context/CartContext";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>

      <Routes />
    </CartProvider>
  </>
);
