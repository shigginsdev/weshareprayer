import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./landing.css"; // keep your global CSS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);