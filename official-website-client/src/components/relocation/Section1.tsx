//Components
import Carousel from "../common/Carousel";

//Assets
import carousel_aaset1 from "../../assets/relocation/carousel/asset_carousel_1.jpg";
import carousel_aaset2 from "../../assets/relocation/carousel/asset_carousel_2.jpg";
import carousel_aaset3 from "../../assets/relocation/carousel/asset_carousel_3.jpg";
import carousel_aaset4 from "../../assets/relocation/carousel/asset_carousel_4.jpg";
import carousel_aaset5 from "../../assets/relocation/carousel/asset_carousel_5.jpg";
import carousel_aaset6 from "../../assets/relocation/carousel/asset_carousel_6.jpg";
import carousel_aaset7 from "../../assets/relocation/carousel/asset_carousel_7.jpg";

//Imports
import { useEffect, useState } from "react";

//Translation
import { useTranslation } from "react-i18next";
import { carouselType } from "../../types/common/CarouselTypes";

function Section1() {
  const { t } = useTranslation();

  //Carousel assets state
  const [carouselImgs] = useState<Array<string>>([
    carousel_aaset1,
    carousel_aaset2,
    carousel_aaset3,
    carousel_aaset4,
    carousel_aaset5,
    carousel_aaset6,
    carousel_aaset7,
  ]);

  const [carouselOpts, setCarouselOpts] = useState<carouselType>({
    imgArray: carouselImgs,
    width: "450",
    height: "700",
  });

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCarouselOpts({
        ...carouselOpts,
        width: "250",
        height: "310",
      });
    }
  }, []);

  return (
    <div className="py-10 w-full flex justify-center items-center bg-white md:flex-row flex-col">
      <div className="md:w-[30%] px-5 mb-8 md:mb-0 md:px-0 flex flex-col justify-start items-start mr-10 gap-5">
        <div className="w-full flex justify-start items-center">
          <span className="text-[#FF9B3B] text-4xl">{t("coming_to_baja")}</span>
        </div>
        <div className="w-full flex justify-start items-center">
          <span className="text-black text-3xl font-bold">
            {t("the_relocation_tour")}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <p className="font-extralight text-2xl">
            <b className="font-bold">{t("moving_to_baja")}</b>{" "}
            {t("text_segment_1")}{" "}
            <b className="font-bold">{t("bold_text_1")}</b>
            {t("text_segment_2")}
            <br />
            <br />
            <b className="font-bold">{t("the_relocation_tour")}</b>
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
      <Carousel
        imgArray={carouselOpts.imgArray}
        width={carouselOpts.width}
        height={carouselOpts.height}
      />
    </div>
  );
}

export default Section1;
