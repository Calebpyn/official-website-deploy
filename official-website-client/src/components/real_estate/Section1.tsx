//Deacription: Info display

//Translation
import { useTranslation } from "react-i18next";

function Section1() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white p-10">
      <div className="flex flex-col gap-10">
        <div className="w-full text-justify text-2xl p-6">
          <p>{t("content_re_s1")}</p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <span className="text-3xl font-bold text-title-blue text-center">
            {t("title_re_s1")}
          </span>

          <div className="flex flex-col gap-10 text-justify">
            <div className="bg-title-blue p-6 text-white text-2xl rounded-2xl flex">
              <span className="mr-1">1.</span>
              <span>{t("content_re_s1_2")}</span>
            </div>
            <div className="bg-title-blue p-6 text-white text-2xl rounded-2xl flex">
              <span className="mr-1">2.</span>
              <span>{t("content_re_s1_3")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
