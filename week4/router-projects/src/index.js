import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter> {/* Isso vai dizer ao nosso app, que estamos prontos para ter ROTAS */}
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
