//Description: Property Management info section

//Translation
import { useTranslation } from "react-i18next";

function Section6() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white p-16">
      <div className="flex flex-col gap-10 text-justify">
        <div className="flex flex-col items-center gap-10 text-2xl">
          <span className="font-bold lg:text-3xl md:text-2xl text-xl">
            {t("title_pm_s6_1")}
          </span>
          <div className="flex justify-between w-full gap-10 md:flex-row flex-col lg:text-2xl md:text-xl text-lg">
            <span className="md:w-1/2">{t("content_pm_s6_1")}</span>
            <span className="md:w-1/2">{t("content_pm_s6_2")}</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-10 text-justify text-2xl">
          <span className="font-bold lg:text-3xl md:text-2xl text-xl">
            {t("title_pm_s6_2")}
          </span>
          <div className="md:w-[80%] flex flex-col gap-10">
            <span className="lg:text-2xl md:text-xl text-lg">
              {t("content_pm_s6_3")}
            </span>
            <span className="text-center lg:text-2xl md:text-xl text-lg">
              {t("content_pm_s6_4")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
