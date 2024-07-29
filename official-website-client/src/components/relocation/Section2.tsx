//Description: Info and contact section

//Assets
import mainBg from "../../assets/relocation/bg-asset-1.png";

//Translation
import { useTranslation } from "react-i18next";

function Section2() {
  //Translation
  const { t } = useTranslation();

  //Contact Link
  const contactUrl = "https://wa.me/526461839897";

  return (
    <div
      className="h-[300px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="w-full h-full bg-[#174067] bg-opacity-60 flex md:justify-end justify-start pl-10 items-center">
        <div className="w-[50%] h-full flex flex-col justify-center items-start gap-5">
          <div className="flex items-center">
            <div className="w-[8px] h-[90px] bg-[#EC6E30] mr-5"></div>
            <div className="text-white font-bold text-3xl flex flex-col items-start">
              <span>{t("make_the_move")}</span>
              <span>{t("to_baja")}</span>
            </div>
          </div>
          <div className="text-white">
            <span>{t("text_s2")}</span>
          </div>
          <div className="">
            <button className="text-white bg-[#EC6E30] py-1 px-5 rounded-full hover:scale-110 tr cursor-pointer" onClick={() => window.open(contactUrl, "_blank")}>{t('contact')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
