import "./App.css";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};
