//Imports
import React from "react";

//Assets
import logo from "../../assets/logo-main.jpg";

//Types
import { basicReview } from "../../types/common/BasicReviewTypes";

//Translation
import { useTranslation } from "react-i18next";

const HReview: React.FC<basicReview> = ({ content, reviewer, width }) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div
      className="flex md:items-center justify-between md:flex-row flex-col-reverse items-start px-3"
      style={{ maxWidth: `${width}px` }}
    >
      <div className="flex md:flex-row items-center mt-5 self-end md:self-center">
        <div>
          <span className="text-[#112D5E] font-bold pt-5 text-xs text-nowrap">
            {reviewer}
          </span>
        </div>
        <div className="md:px-5 md:min-w-[100px] ml-5 md:mr-5">
          <img src={logo} className="h-[60px] rounded-full w-[60px]" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-[#112D5E] font-serif">{t(`${content}`)}</span>
      </div>
    </div>
  );
};

export default HReview;
