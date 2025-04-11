import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { App } from "./app";
import { About } from "./about";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/About",
    Component: About,
  },
  {
    path: "*",
    Component: App,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
