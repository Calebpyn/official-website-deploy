//Description: This is the video section

//Types
import { videoType } from "../../types/homepage/Section1Types";

//Components
import YouTubeEmbed from "../common/YoutubeEmbed";

//Imports
import { useEffect, useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

function Section1() {
  //Translation
  const { t } = useTranslation();

  //Video options
  const [videoOpts, setVideoOpts] = useState<videoType>({
    videoId: "i8e6LjAnoRM",
    width: "500",
    height: "300",
  });

  //Inner width state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {

    //Updating the state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    //Event listener
    window.addEventListener("resize", handleResize);

    //Clean up function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Use Effect over the reactive state
  useEffect(() => {
    let responsiveWidth = (windowWidth/2)*.70
    let responsiveHeight = responsiveWidth/1.6
    setVideoOpts({
      ...videoOpts,
      width: responsiveWidth.toString(),
      height: responsiveHeight.toString()
    })
  }, [windowWidth]);


  return (
    <div className="w-full py-5 md:min-h-[400px] bg-[#174067] flex flex-col md:flex-row md:text-left text-center md:gap-5 justify-between items-center md:px-16">
      <div className="rounded-lg overflow-hidden">
        <YouTubeEmbed
          videoId={videoOpts.videoId}
          width={videoOpts.width}
          height={videoOpts.height}
        />
      </div>

      <div className="md:w-[50%] w-[90%] mt-2 md:mt-0">
        <span className="text-white font-bold text-2xl md:text-4xl leading-normal">{t("section_text")}</span>
      </div>
    </div>
  );
}

export default Section1;
