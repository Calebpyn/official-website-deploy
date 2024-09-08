//Description: This is a basic hero, used in real estate info page

//Types
import { basicHero } from "../../types/common/BasicHeroTypes";

//Translation
import { useTranslation } from "react-i18next";

const BasicHeroV3: React.FC<basicHero> = ({ img, title }) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-[150px] bg-cover bg-center shadow-md"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full h-full bg-gradient-to-r from-[#FDB42D] to-transparent flex justify-center items-center">
        <span className="text-white font-bold md:text-5xl text-2xl text-center">
          {t(title)}
        </span>
      </div>
    </div>
  );
};

export default BasicHeroV3;
