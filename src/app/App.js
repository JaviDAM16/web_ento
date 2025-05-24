import "./App.css";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
