//Description: Information Card, only used in proprty display / encapsulation principle.

//Types
import { PresentationCardType } from "../../types/common/PresentationCardTypes";

//Imports

//Translation
import { useTranslation } from "react-i18next";

//Icons
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const PresentationCard: React.FC<PresentationCardType> = ({
  title,
  image,
  content,
  phone,
  mail,
}) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-start items-center gap-4 w-full"
    >
      <div className="w-full flex justify-center items-center">
        <span className="text-xl font-semibold">{t(`${title}`)}</span>
      </div>
      <div className="h-[300px] overflow-clip rounded-md shadow-sm">
        <img src={image} className="" />
      </div>

      <div className="">
        <span>{t(`${content}`)}</span>
      </div>

      <div className="flex flex-col justify-start items-start w-full gap-2">
        <span className="flex">
          <FaPhoneSquareAlt className="text-[#E6A045] text-2xl mr-2" />
          {phone.usa}
        </span>
        <span className="flex">
          <FaPhoneSquareAlt className="text-[#E6A045] text-2xl mr-2" />
          {phone.mx}
        </span>
        <span className="flex">
          <FaMailBulk className="text-[#E6A045] text-2xl mr-2" />
          {mail}
        </span>
        <span className="flex">
          <FaWhatsappSquare className="text-[#E6A045] text-2xl mr-2" />
          <a>Whatsapp</a>
        </span>
        <span className="flex">
          <FaFacebookSquare className="text-[#E6A045] text-2xl mr-2" />
          <a>Facebook</a>
        </span>
        <span className="flex">
          <FaInstagram className="text-[#E6A045] text-2xl mr-2" />
          <a>Instagram</a>
        </span>
        <span className="flex">
          <FaTiktok className="text-[#E6A045] text-2xl mr-2" />
          <a>TikTok</a>
        </span>
      </div>
    </div>
  );
};

export default PresentationCard;
