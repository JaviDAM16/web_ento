import { Link } from "react-router-dom";
import "./Navbar.scss";
import { LanguageSelector } from "../utils/components/LanguageSelector";
import { useLanguage } from "../utils/contexts/Language";
import imagenes from "../images";



export const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/inicio">
          <img src={imagenes.logozoro} alt="Zoro Shop Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/inicio">{t("start")}</Link>
        </li>
        <li>
          <Link to="/cataleg">{t("catalog")}</Link>
        </li>
        <li>
          <Link to="/about">{t("about")}</Link>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};
