//Description: This is the 'why us?' section

//Translation
import { useTranslation } from "react-i18next";

//Icons
import { FaBrain } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import { BiSolidConversation } from "react-icons/bi";
import { FaFlagUsa } from "react-icons/fa";

function Section3() {
  //Translation
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#174067] flex justify-center items-center md:px-16 px-5 md:h-[700px] py-5 md:py-0">
      <div className="flex flex-col w-full">
        <div className="w-full justify-start mb-5">
          <span className="text-[#e6a146] text-4xl font-bold tracking-wider">
            {t("why_us")}
          </span>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex md:flex-row flex-col justify-between items-center w-full gap-3 md:gap-0">
            {/* First card */}
            <div className="bg-white h-[220px] md:h-[200px] flex justify-between items-center md:w-[54%] rounded-lg text-xl">
              <div className="md:p-5 ml-3 md:ml-0 flex flex-col justify-center items-center h-full md:w-[150px] w-[100px]">
                <FaBrain className="text-[#CABF8F] md:text-7xl mb-5 text-5xl" />
                <span className="font-bold text-base">{t("experience")}</span>
              </div>

              <div className="w-full px-5">
                <p className="text-sm lg:text-lg">{t("experience_text")}</p>
              </div>
            </div>
            {/* Second card */}
            <div className="bg-white h-[220px] md:h-[200px] flex justify-between items-center md:w-[44%] rounded-lg text-xl">
              <div className="md:p-5 ml-3 md:ml-0 flex flex-col justify-center items-center h-full md:w-[150px] w-[100px]">
                <FaPeopleCarry className="text-[#AFCB91] md:text-7xl mb-5 text-5xl" />
                <span className="font-bold text-base">{t("providers")}</span>
              </div>

              <div className="w-full px-5">
                <p className="text-sm lg:text-lg">{t("providers_text")}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:flex-row flex-col items-center w-full mt-3 md:mt-5 gap-3 md:gap-0">
            {/* Second card */}
            <div className="bg-white h-[220px] md:h-[200px] flex justify-between items-center md:w-[44%] rounded-lg text-xl">
              <div className="md:p-5 ml-3 md:ml-0 flex flex-col justify-center items-center h-full md:w-[150px] w-[100px]">
                <BiSolidConversation className="text-[#D59E84] md:text-7xl mb-5 text-5xl" />
                <span className="font-bold text-base">{t("bilingual")}</span>
              </div>

              <div className="w-full px-5">
                <p className="text-sm lg:text-lg">{t("bilingual_text")}</p>
              </div>
            </div>
            {/* First card */}
            <div className="bg-white h-[220px] md:h-[200px] flex justify-between items-center md:w-[54%] rounded-lg text-xl">
              <div className="md:p-5 ml-3 md:ml-0 flex flex-col justify-center items-center h-full md:w-[150px] w-[100px]">
                <FaFlagUsa className="text-[#C6A97C] md:text-7xl mb-5 text-5xl" />
                <span className="font-bold text-base">{t("culture")}</span>
              </div>

              <div className="w-full px-5">
                <p className="text-sm lg:text-lg">{t("culture_text")}</p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
