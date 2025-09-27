import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./shared/hooks/useCart";
import { router } from "./router";
import { AuthProvider } from "./shared/context/AuthContext";
import "./index.css";
import './App.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </AuthProvider>
);
