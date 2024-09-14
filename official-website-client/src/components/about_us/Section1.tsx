//Description: Section 1, about us info

//Assets
import mainProfileImage from "../../assets/common_profile_image_2.jpg";
import waIcon from "../../assets/icons/wa_icon.png";
import fbIcon from "../../assets/icons/fb_icon.png";
import ytIcon from "../../assets/icons/yt_icon.png";
import igIcon from "../../assets/icons/ig_icon.png";
import ttIcon from "../../assets/icons/tt_icon.png";
import gIcon from "../../assets/icons/g_icon.png";

//Translation
import { useTranslation } from "react-i18next";

// URLS
const Facebook = "https://www.facebook.com/gvictoricabajaservices";

const Youtube = "https://www.youtube.com/@GvBajaRealty";

const Tik_Tok = "https://www.tiktok.com/@gvbajarealty?_t=8nrROaEGxBF&_r=1";

const Instagram =
  "https://www.instagram.com/gvbajarealty?igsh=YjlvcXZobDkwNmtm";

const Google_Business =
  "https://maps.app.goo.gl/GrY4qNVTVKDKUhd6A?g_st=com.google.maps.preview.copy";

const contactUrl = "https://wa.me/526461839897";

function Section1() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div
        className="w-full lg:h-[700px] bg-cover bg-center md:h-[600px] h-[500px]"
        style={{ backgroundImage: `url(${mainProfileImage})` }}
      ></div>
      <div>
        <div className="bg-white w-full p-16 flex flex-col">
          <div className="flex flex-col gap-10 text-2xl text-justify">
            <p>{t("content_p_1")}</p>
            <p>{t("content_p_2")}</p>
          </div>
          <div className="w-full flex flex-col gap-16 justify-center items-center mt-16">
            <span>
              Whatsapp: Justin McEntee- (760-315-0576)
              <br />
              Gabriela Victorica McEntee- (646-183-9897)
            </span>

            <span className="w-[50%] text-center">{t("content_p_3")}</span>

            <span className="flex gap-5 justify-center items-center">
              <img
                src={waIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(contactUrl, "_blank");
                }}
              />
              <img
                src={fbIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(Facebook, "_blank");
                }}
              />
              <img
                src={igIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(Instagram, "_blank");
                }}
              />
              <img
                src={ttIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(Tik_Tok, "_blank");
                }}
              />
              <img
                src={gIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(Google_Business, "_blank");
                }}
              />
              <img
                src={ytIcon}
                className="h-[50px] hover:scale-105 tr cursor-pointer"
                onClick={() => {
                  window.open(Youtube, "_blank");
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
