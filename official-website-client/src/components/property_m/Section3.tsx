//Description: Property Management: Review section

//Components
import BasicReview from "../common/BasicReview";

//Assets
import logo from "../../assets/logo-main.jpg";

//Translation
import { useTranslation } from "react-i18next";

function Section3() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col px-10 bg-white pb-10 items-center">
      <div className="w-full py-5 px-1">
        <div className="w-full bg-zinc-200 h-[1px]"></div>
      </div>
      <div className="flex justify-center items-start w-[80%]">
        <BasicReview
          content="review_s3_1"
          reviewer="JOHN KEMPSKI"
          width="400"
        />

        {/* This review is divided in 2 text, will not use the basic review component, this is an special case */}
        <div className="flex items-start justify-start">
          <div className="px-5">
            <img src={logo} className="h-[60px] rounded-full min-w-[60px]" />
          </div>

          <div className="flex">
            <span className="italic text-zinc-700">{t("review_s3_2_1")}</span>
            <div className="ml-5 flex flex-col">
              <span className="italic text-zinc-700">{t("review_s3_2_2")}</span>
              <span className="text-[#112D5E] font-bold pt-5">
                MIGUEL LOPEZ CHALAMANCH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
