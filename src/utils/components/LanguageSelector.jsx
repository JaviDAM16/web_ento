import { useLanguage } from "../contexts/Language";
import "./LanguageSelector.css";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};
