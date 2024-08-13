//Description: Relocation information section

//Assets
import bgMain from "../../assets/relocation/bg-asset-2.png";

//Icons
import { FaArrowAltCircleUp } from "react-icons/fa";

//Translation
import { useTranslation } from "react-i18next";

function Section3() {
  //Translation
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-auto bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url('${bgMain}')` }}
    >
      <div className="md:p-20 p-5 bg-white bg-opacity-60 flex flex-col gap-5">
        <div>
          <span className="text-[#EC6E30] font-bold text-lg">
            {t("coming_to_baja")}
          </span>
        </div>
        <div>
          <span className="font-bold text-3xl">
            {t("relocation_assistance")}
          </span>
        </div>
        <div className="gap-7 flex flex-col">
          <span>
            <p>
              {t("text_segment_s3_1")}
              <b>{t("bold_text_s3_1")}</b>
              {t("text_segment_s3_2")}
              <b>{t("bold_text_s3_2")}</b>
              {t("text_segment_s3_3")}
              <b>{t("bold_text_s3_3")}</b>
            </p>
          </span>
          <span>
            <p>
              {t("text_segment_s3_4")}
              <b>{t("bold_text_s3_4")}</b>
              {t("text_segment_s3_5")}
              <b>{t("bold_text_s3_5")}</b>
              {t("text_segment_s3_6")}
              <b>2007 </b>
              {t("text_segment_s3_7")}
              <b>{t("bold_text_s3_7")}</b>
              {t("text_segment_s3_8")}
            </p>
          </span>
          <span>{t("text_segment_s3_9")}</span>
          <span>{t("check_our_reviews")}</span>
        </div>
        <div className="flex justify-center items-center w-full">
          <span className="md:w-[60%] w-[90%] text-center text-[#59853C] font-bold">
            {t("bottom_info")}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <FaArrowAltCircleUp className="text-5xl text-[#D19C56] hover:scale-110 tr cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default Section3;
