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
    <div className="w-full bg-[#174067] flex justify-center items-center px-16 h-[700px]">
      <div className="flex flex-col w-full">
        <div className="w-full justify-start mb-5">
          <span className="text-[#e6a146] text-4xl font-bold tracking-wider">
            {t('why_us')}
          </span>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center w-full">
            {/* First card */}
            <div className="bg-white h-[200px] flex justify-between items-center w-[54%] rounded-lg text-xl">
              <div className="p-5 flex flex-col justify-center items-center h-full w-[150px]">
                <FaBrain className="text-[#CABF8F] text-7xl mb-5" />
                <span className="font-bold">{t('experience')}</span>
              </div>

              <div className="w-full px-5">
                <p>
                  {t('experience_text')}
                </p>
              </div>
            </div>
            {/* Second card */}
            <div className="bg-white h-[200px] flex justify-between items-center w-[44%] rounded-lg text-xl">
              <div className="p-5 flex flex-col justify-center items-center h-full w-[150px]">
                <FaPeopleCarry className="text-[#AFCB91] text-7xl mb-5" />
                <span className="font-bold">{t('providers')}</span>
              </div>

              <div className="w-full px-5">
                <p>
                  {t('providers_text')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full mt-5">
            {/* Second card */}
            <div className="bg-white h-[200px] flex justify-between items-center w-[44%] rounded-lg text-xl">
              <div className="p-5 flex flex-col justify-center items-center h-full w-[150px]">
                <BiSolidConversation className="text-[#D59E84] text-7xl mb-5" />
                <span className="font-bold">{t('bilingual')}</span>
              </div>

              <div className="w-full px-5">
                <p>
                  {t('bilingual_text')}
                </p>
              </div>
            </div>
            {/* First card */}
            <div className="bg-white h-[200px] flex justify-between items-center w-[54%] rounded-lg text-xl">
              <div className="p-5 flex flex-col justify-center items-center h-full w-[150px]">
                <FaFlagUsa className="text-[#C6A97C] text-7xl mb-5" />
                <span className="font-bold">{t('culture')}</span>
              </div>

              <div className="w-full px-5">
                <p>
                  {t('culture_text')}
                </p>
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
