//Description: Info Section

//Translation
import { useTranslation } from "react-i18next";

function Section4() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white flex p-16 justify-center items-center">
      <div className="flex flex-col gap-10 text-2xl">
        <div className="flex flex-col gap-5 lg:text-2xl mmd:text-xl text-base">
          <span className="lg:text-3xl mmd:text-2xl text-lg font-black">
            {t("title_pm_s4_1")}
          </span>

          <span className="flex flex-col gap-5 ">
            <p>{t("content_pm_s4_1")}</p>
            <p>{t("content_pm_s4_1_2")}</p>
          </span>
        </div>
        <div className="flex md:gap-16 gap-8 justify-between items-start md:flex-row flex-col">
          <div className="md:w-1/2 flex justify-start flex-col lg:text-2xl md:text-xl text-base text-left gap-5 md:gap-0">
            <span className="font-black md:min-h-[120px]">
              {t("title_pm_s4_2")}
            </span>
            <p className="">{t("content_pm_s4_2")}</p>
          </div>
          <div className="md:w-1/2 flex justify-start flex-col lg:text-2xl md:text-xl text-base text-left gap-5 md:gap-0">
            <span className="font-black md:min-h-[120px]">
              {t("title_pm_s4_3")}
            </span>
            <p>{t("content_pm_s4_3")}</p>
          </div>
        </div>
        <div className="flex md:gap-16 gap-8 justify-between items-start md:flex-row flex-col">
          <div className="md:w-1/2 flex justify-start flex-col lg:text-2xl md:text-xl text-base text-left gap-5 md:gap-0">
            <span className="font-black md:min-h-[120px]">
              {t("title_pm_s4_4")}
            </span>
            <p>{t("content_pm_s4_4")}</p>
          </div>
          <div className="md:w-1/2 flex justify-start flex-col lg:text-2xl md:text-xl text-base text-left gap-5 md:gap-0">
            <span className="font-black md:min-h-[120px]">
              {t("title_pm_s4_5")}
            </span>
            <p>{t("content_pm_s4_5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
