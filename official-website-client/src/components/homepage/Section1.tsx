//Description: This is the video section

//Types
import { videoType } from "../../types/homepage/Section1Types";

//Components
import YouTubeEmbed from "../common/YoutubeEmbed";

//Imports
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

function Section1() {
  //Translation
  const { t } = useTranslation();

  //Video options
  const [videoOpts] = useState<videoType>({
    videoId: "i8e6LjAnoRM",
    width: "500",
    height: "300",
  });

  return (
    <div className="w-full py-5 min-h-[400px] bg-[#174067] flex flex-col md:flex-row md:text-left text-center gap-5 justify-between items-center px-16">
      <div className="rounded-lg overflow-hidden">
        <YouTubeEmbed
          videoId={videoOpts.videoId}
          width={videoOpts.width}
          height={videoOpts.height}
        />
      </div>

      <div className="w-[50%]">
        <span className="text-white font-bold text-4xl leading-normal">{t("section_text")}</span>
      </div>
    </div>
  );
}

export default Section1;
