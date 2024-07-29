//Components
import Carousel from "../common/Carousel";

//Assets
import carousel_aaset1 from "../../assets/relocation/carousel/asset_carousel_1.png";
import carousel_aaset2 from "../../assets/relocation/carousel/asset_carousel_2.png";
import carousel_aaset3 from "../../assets/relocation/carousel/asset_carousel_3.png";
import carousel_aaset4 from "../../assets/relocation/carousel/asset_carousel_4.png";
import carousel_aaset5 from "../../assets/relocation/carousel/asset_carousel_5.png";
import carousel_aaset6 from "../../assets/relocation/carousel/asset_carousel_6.png";
import carousel_aaset7 from "../../assets/relocation/carousel/asset_carousel_7.png";

//Imports
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

function Section1() {
  const { t } = useTranslation();

  //Carousel assets state
  const [carouselImgs, setCarouselImgs] = useState<Array<string>>([
    carousel_aaset1,
    carousel_aaset2,
    carousel_aaset3,
    carousel_aaset4,
    carousel_aaset5,
    carousel_aaset6,
    carousel_aaset7,
  ]);

  return (
    <div className="py-10 w-full flex justify-center items-center bg-white">
      <div className="w-[30%] flex flex-col justify-start items-start mr-10 gap-5">
        <div className="w-full flex justify-start items-center">
          <span className="text-[#FF9B3B]">{t("coming_to_baja")}</span>
        </div>
        <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl font-bold">
            {t("the_relocation_tour")}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <p className="text-base font-extralight">
            <b className="font-bold">{t("moving_to_baja")}</b>{" "}
            {t("text_segment_1")}{" "}
            <b className="font-bold">{t("bold_text_1")}</b>
            {t("text_segment_2")}
            <br />
            <br />
            {t("text_segment_2_1")}
            <br />
            <br />
            {t("text_segment_2_2")}
            <b className="font-bold"> {t("bold_text_2")}</b>{" "}
            {t("text_segment_3")}
            <br />
            <br />
            {t("text_segment_3_1")}
            <b className="font-bold"> {t("bold_text_3")}</b>
            {t("text_segment_4")}
            <b className="font-bold"> {t("bold_text_4")}</b>
            {t("text_segment_5")}
            <b className="font-bold"> {t("bold_text_5")}</b>
            {t("text_segment_6")}
            <b className="font-bold"> {t("bold_text_6")} </b>
            {t("text_segment_7")}
          </p>
        </div>
      </div>
      <Carousel imgArray={carouselImgs} width="450" height="700" />
    </div>
  );
}

export default Section1;
