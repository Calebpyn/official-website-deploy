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
    videoId: "WUvtM1MnCI0",
    width: "",
    height: "",
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
    let responsiveWidth = (windowWidth / 2) * 0.7;
    let responsiveHeight = responsiveWidth / 1.8;
    if (windowWidth < 550) {
      setVideoOpts({
        ...videoOpts,
        width: "300",
        height: "166",
      });
    } else {
      setVideoOpts({
        ...videoOpts,
        width: responsiveWidth.toString(),
        height: responsiveHeight.toString(),
      });
    }
  }, [windowWidth]);

  return (
    <div className="w-full py-5 md:min-h-[400px] bg-[#174067] flex flex-col md:flex-row md:text-left text-center md:gap-5 justify-between items-center">
      <div className="rounded-lg overflow-hidden md:ml-16">
        <YouTubeEmbed
          videoId={videoOpts.videoId}
          width={videoOpts.width}
          height={videoOpts.height}
        />
      </div>

      <div className="md:w-[50%] w-[90%] mt-2 md:mt-0">
        <div className="bg-[#FDB42D] p-5 md:rounded-r-none rounded-lg border-4 border-black md:border-r-0 border-r-4">
          <span className="text-white font-bold text-2xl md:text-4xl leading-normal italic">
            "{t("section_text")}"
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section1;
