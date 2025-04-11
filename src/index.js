import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { App } from "./app";
import { About } from "./about";
import { Navbar } from "./components";

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
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
