import { Link } from "react-router-dom";
import "./Navbar.scss";
import { LanguageSelector } from "../utils/components/LanguageSelector";
import { useLanguage } from "../utils/contexts/Language";

export const Navbar = () => {
  const { t } = useLanguage();
  return (
    <nav className="navbar">
      <ul>
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
