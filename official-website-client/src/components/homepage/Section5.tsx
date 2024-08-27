//Description: Are you planning to move? Section

//Translation
import { useTranslation } from "react-i18next";

//Assets
import bgImage from "../../assets/homepage/section5-asset-1.jpg";
import profileImage from "../../assets/common_profile_image.jpg";

function Section5() {
  //Translation
  const { t } = useTranslation();

  //Contact link
  const contactUrl = "https://wa.me/526461839897";
  return (
    <div
      className="md:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full py-10 md:py-0 md:flex-row flex-col-reverse bg-[#174067] bg-opacity-60 flex justify-between items-center">
        <div className="md:w-[60%] px-10 flex flex-col gap-10">
          <span className="text-[#FDB42D] font-bold text-5xl">
            {t("tilte_section5")}
          </span>
          <div className="flex flex-col gap-5 text-white items-start">
            <span>{t("content_section5")}</span>
            <span>{t("muchas_gracias")}</span>
            <span>{t("sign")}</span>
            <button
              className="mt-5 py-2 px-6 bg-[#FDB42D] rounded-full shadow-lg hover:scale-105 tr cursor-pointer"
              onClick={() => window.open(contactUrl, "_blank")}
            >
              {t("lets_talk")}
            </button>
          </div>
        </div>

        <div className="md:w-[40%] px-10 mb-5 md:mb-0">
          <div style={{backgroundImage: `url(${profileImage})`}} className="h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] rounded-full bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
