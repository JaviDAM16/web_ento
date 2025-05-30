import "./App.css";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Notifications } from "../utils/components";

export const App = () => {
  return (
    <div className="app-container">
      <Notifications />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
