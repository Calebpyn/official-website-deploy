//Description: Property Management info section

//Translation
import { useTranslation } from "react-i18next";

//Assets
import noteBook1 from "../../assets/icons/notebook_icon.png";
import noteBook2 from "../../assets/icons/notebook_2_icon.png";
import truck from "../../assets/icons/truck_icon.png";
import report from "../../assets/icons/report_icon.png";

function Section5() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full bg-secondary-yellow-2 p-16">
      <div>
        <div className="flex flex-col w-full gap-10 items-center">
          <span className="font-bold lg:text-4xl md:text-3xl text-2xl text-center">
            {t("title_pm_s5_1")}
          </span>

          <div className="flex flex-col items-center md:text-2xl text-lg font-bold md:gap-10 gap-5">
            <div className="flex justify-between md:items-center items-start w-full md:flex-row flex-col gap-5 md:gap-0">
              <span className="md:w-1/2 flex items-center gap-6">
                <span className="min-w-[100px]">
                  <img src={noteBook1} className="w-[100px]" />
                </span>
                <span className="">{t("subtitle_pm_s5_1")}</span>
              </span>
              <span className="md:w-1/2 flex items-center gap-6">
                <span className="min-w-[100px]">
                  <img src={report} className="w-[100px]" />
                </span>
                <span className="">{t("subtitle_pm_s5_3")}</span>
              </span>
            </div>
            <div className="flex justify-between md:items-center items-start w-full md:flex-row flex-col gap-5 md:gap-0">
              <span className="md:w-1/2 flex items-center gap-6">
                <span className="min-w-[100px]">
                  <img src={noteBook2} className="w-[100px]" />
                </span>
                <span className="">{t("subtitle_pm_s5_2")}</span>
              </span>
              <span className="md:w-1/2 flex items-center gap-6">
                <span className="min-w-[100px]">
                  <img src={truck} className="w-[100px]" />
                </span>
                <span className="">{t("subtitle_pm_s5_4")}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
