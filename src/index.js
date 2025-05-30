import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { App } from "./app";
import { About } from "./about";
import { Producte } from "./producte";
import { Cataleg } from "./cataleg";
import { Inicio } from "./inicio";
import { LanguageProvider } from "./utils/contexts/Language.jsx";
import { Carrito } from "./carrito";
import { CarritoProvider } from "./carrito/CarritoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <CarritoProvider>
        {" "}
        {/* El proveedor del carrito debe envolver toda la app */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Inicio />} />
              <Route path="inicio" element={<Inicio />} />
              <Route path="about" element={<About />} />
              <Route path="producte/:id" element={<Producte />} />
              <Route path="cataleg" element={<Cataleg />} />
              <Route path="carrito" element={<Carrito />} />{" "}
              {/* Ruta del carrito */}
            </Route>
          </Routes>
        </HashRouter>
      </CarritoProvider>
    </LanguageProvider>
  </React.StrictMode>
);
