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
      className="flex items-center justify-between"
      style={{ width: `${width}px` }}
    >
      <div>
        <span className="text-[#112D5E] font-bold pt-5 text-xs text-nowrap">{reviewer}</span>
      </div>
      <div className="px-5 min-w-[100px]">
        <img src={logo} className="h-[60px] rounded-full w-[60px]" />
      </div>

      <div
        className="flex flex-col"
      >
        <span className="text-[#112D5E] font-serif">{t(`${content}`)}</span>
      </div>
    </div>
  );
};

export default HReview;
