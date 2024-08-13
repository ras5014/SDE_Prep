import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Context-API import
import { CounterProvider } from "./context/Counter-Context";
import { CartProvider } from "./context/Cart-Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
