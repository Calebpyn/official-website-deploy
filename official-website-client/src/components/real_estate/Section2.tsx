//Description: Real estate info section 2

//Translation
import { useTranslation } from "react-i18next";

function Section2() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full bg-secondary-yellow p-16 text-2xl text-justify">
      <div className="flex flex-col gap-10">
        <p>{t("content_re_s2_1")}</p>
        <p>{t("content_re_s2_2")}</p>
        <span className="text-left">
          {t("content_re_s2_3")}
          <br />
          Gracias
        </span>
      </div>
    </div>
  );
}

export default Section2;
