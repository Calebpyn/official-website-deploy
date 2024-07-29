//Description: This section has a redirection button between for sale and rent.

//Translation
import { useTranslation } from "react-i18next";

//Types
import { redirectionSectionType } from "../../types/common/RedirectionSectionTypes";

//Icons
import { FiHome } from "react-icons/fi";

//Imports
import { useNavigate } from "react-router-dom";

const RedirectionSection: React.FC<redirectionSectionType> = ({
  img,
  title,
  redirect,
}) => {
  //Translation
  const { t } = useTranslation();

  //Navigation
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-[200px] bg-center bg-cover"
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="bg-[#D4A857] w-full h-full bg-opacity-50 flex justify-around items-center">
        <span className="text-white text-5xl font-bold text-wrap max-w-[500px]">{t(`${title}`)}</span>
        <button
          className="flex items-center text-2xl text-white bg-[#FDB42D] px-4 py-2 rounded-full font-bold hover:scale-110 tr shadow-lg"
          onClick={() => navigate(`/${redirect}`)}
        >
          <FiHome className="mr-3 text-3xl" />
          {t("go")}
        </button>
      </div>
    </div>
  );
};

export default RedirectionSection;
