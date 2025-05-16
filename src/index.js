import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./app";
import { About } from "./about";
import { Producte } from "./producte";
import { Cataleg } from "./cataleg";
import { Inicio } from "./inicio";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/about", // Convención: las rutas suelen ir en minúsculas
        element: <About />,
      },
      {
        path: "/producte/:id",
        element: <Producte />,
      },
      {
        path: "/cataleg",
        element: <Cataleg />,
      },
      {
        path: "/inicio",
        element: <Inicio />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
