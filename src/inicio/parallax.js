import { useLanguage } from "../utils/contexts/Language";

export const Parallax = ({ children, text1, text2 }) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="parallax parallax1">
        <div className="parallax-text">{t(text1)}</div>
      </div>
      {children}
      <div className="parallax parallax2">
        <div className="parallax-text">{t(text2)}</div>
      </div>
    </>
  );
};
