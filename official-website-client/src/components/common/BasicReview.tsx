//Imports
import React from "react";

//Assets
import logo from "../../assets/logo-main.jpg";

//Types
import { basicReview } from "../../types/common/BasicReviewTypes";

//Translation
import { useTranslation } from "react-i18next";

const BasicReview: React.FC<basicReview> = ({ content, reviewer, width }) => {
  //Translation
  const { t } = useTranslation();

  return (
    <div className="flex items-start justify-between md:flex-row flex-col px-5 md:px-0" style={{maxWidth: `${width}px`}}>
      <div className="md:px-5 mb-5 md:mb-0">
        <img src={logo} className="h-[60px] rounded-full min-w-[60px]"/>
      </div>

      <div className="flex flex-col" style={{maxWidth: `${parseInt(width)-100}px`}}>
        <span className="italic text-zinc-700 text-sm md:text-base">{t(`${content}`)}</span>
        <span className="text-[#112D5E] font-bold pt-5">{reviewer}</span>
      </div>
    </div>
  );
};

export default BasicReview;
