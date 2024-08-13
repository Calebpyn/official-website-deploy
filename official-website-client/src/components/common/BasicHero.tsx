//Description: This is a basic hero, used in most service pages

//Types
import { basicHero } from "../../types/common/BasicHeroTypes";

//Translation
import { useTranslation } from "react-i18next";

const BasicHero: React.FC<basicHero> = ({ img, title }) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url('${img}')` }}
        className="w-full h-[200px] bg-top bg-cover"
      >
        <div className="w-full h-full bg-[#FDB42D] bg-opacity-50 flex justify-center items-center flex-col">
          <span className="md:text-5xl text-2xl font-bold text-white">{t(`${title}`)}</span>
          <span className="text-5xl text-white">.............</span>
        </div>
      </div>
    </div>
  );
};

export default BasicHero;
