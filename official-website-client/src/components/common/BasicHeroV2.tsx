//Description: This is a basic hero, used in real estate pages

//Types
import { basicHeroV2Type } from "../../types/common/BasicHeroTypesV2";

//Translation
import { useTranslation } from "react-i18next";

const BasicHeroV2: React.FC<basicHeroV2Type> = ({ img, title }) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div
        className="w-full h-[150px] bg-top bg-cover"
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className="w-full h-full bg-[#1A5994] bg-opacity-50 flex justify-center items-center">
          <span className="text-5xl font-bold text-white">{t(`${title}`)}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicHeroV2;
