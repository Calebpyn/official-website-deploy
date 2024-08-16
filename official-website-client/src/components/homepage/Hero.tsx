//Description: Hero section

//Translation
import { useTranslation } from "react-i18next";

//Assets
import mainBg from "../../assets/homepage/hero-asset-1.jpg";

function Hero() {
  //Translation
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-[400px] bg-cover bg-center shadow-md"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#FDB42D] to-transparent flex justify-center md:justify-start items-center">
        <span className="md:pl-16 text-white font-bold text-7xl tracking-wide leading-snug text-center md:text-left">
          {t("thinking")}
          <br />
          {t("about_moving")}
          <br />
          {t("to_baja")}
        </span>
      </div>
    </div>
  );
}

export default Hero;
