//Description: Contact Us + Image

//Assets
import mainProfileImg from "../../assets/property_m/profile_img.jpg";

//Translation
import { useTranslation } from "react-i18next";

function Section2() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between bg-[#D5C3A3] items-center h-auto">
      <div className="flex">
        <img src={mainProfileImg} className="w-[400px]" />
        <div className="w-[50px] -translate-x-[100%] bg-gradient-to-l from-[#D5C3A3]"></div>
      </div>

      <div className="flex flex-col h-full items-start gap-10 w-[50%]">
        <span className="flex items-center gap-5">
          <div className="h-[40px] w-[7px] bg-[#EC6E30]"></div>
          <span className="text-white text-6xl font-semibold">
            {t("contact_us_title_1")}
            <br />
            {t("contact_us_title_2")}
          </span>
        </span>
        <button className="bg-[#EC6E30] text-white rounded-full py-2 px-5 hover:scale-110 tr font-bold">
          {t("contact")}
        </button>
      </div>
    </div>
  );
}

export default Section2;
