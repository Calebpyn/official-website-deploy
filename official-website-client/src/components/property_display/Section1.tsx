//Description: Info display

//Components
import PresentationCard from "../common/PresentationCard";

//Mui
import { CircularProgress } from "@mui/material";

//Assets
import pcImage from "../../assets/property_m/profile_img.jpg";

//Imports
import { useEffect, useState } from "react";
import Carousel from "../common/Carousel";

//Translation
import { useTranslation } from "react-i18next";

//Axios
import axios from "axios";

//Types
import { propertyDisplayType } from "../../types/for_sale/PropertyInfo";
import { propertyDsiplay } from "../../types/property_display/Section1";

//Icons
import { FaAirbnb } from "react-icons/fa";

const Section1: React.FC<propertyDsiplay> = ({ id }) => {
  //Loading State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Translation
  const { t, i18n } = useTranslation();

  //Phone Numbers
  const [phoneNumbers] = useState({
    mx: "MX (646) 183-9897",
    usa: "US (760) 315-576",
  });

  //Images
  const [images, setImages] = useState<string[]>([]);

  //Carousel Options
  const [carousleOpts, setCarouselOpts] = useState<string>("400");

  //PropertyInfo
  const [propertyInfo, setPropertyInfo] = useState<propertyDisplayType>();

  //Bring property by id
  const bringPropertyById = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/property/${id}`
      );
      setPropertyInfo(response.data[0]);
      setImages(response.data[0].images);
    } catch (err) {
      console.error("Error fetching property:", err);
      alert("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  };

  //Init page
  useEffect(() => {
    bringPropertyById(id);
    if (window.innerWidth < 930) {
      setCarouselOpts("200");
    }
  }, []);

  //Price format
  function convertStringToFormattedFloat(value: string): string {
    if (value) {
      // Parse the string to a float
      const floatValue = parseFloat(value);

      // Check if parsing was successful
      if (isNaN(floatValue)) {
        throw new Error("Invalid input string");
      }

      // Format the float to two decimal places and add commas
      return floatValue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return "?";
  }
  
  return (
    <div className="w-full flex justify-center items-center p-10 bg-[#F4F2E2]">
      {isLoading ? (
        <div className="h-[400px] w-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="md:w-[80%] flex justify-between items-start md:flex-row flex-col w-[95%] gap-5 md:gap-0">
          <div className="md:min-w-[60%] w-full md:mr-5 flex-col justify-start">
            <div className="flex justify-center items-center bg-white rounded-lg py-4 shadow-lg mb-5">
              <Carousel
                height={carousleOpts}
                imgArray={images}
                width={carousleOpts}
              />
            </div>

            <div className="flex justify-center items-center bg-white rounded-lg p-5 shadow-lg">
              <div className="w-full flex flex-col justify-start items-start gap-5">
                <div className="w-full flex justify-between">
                  <span className="bg-[#F7657D] px-5 py-3 text-white font-semibold">
                    {t("home_details")}
                  </span>

                  {propertyInfo?.type == "AirBnB" ? (
                    <span className="flex items-center gap-1 bg-[#FF5A5F] rounded-full text-white px-3">
                      AirBnB <FaAirbnb />
                    </span>
                  ) : null}
                </div>

                <p className="leading-7 text-zinc-600 font-light">
                  {i18n.language == "en"
                    ? propertyInfo?.desc
                    : propertyInfo?.desc_es}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-start px-10 bg-white rounded-lg p-5 shadow-lg mt-5 flex-col">
              <span className="font-semibold mb-1">{t("price")}</span>
              <span className="text-[#C9A117] text-3xl">
                ${convertStringToFormattedFloat(propertyInfo?.price!)}{" "}
                {propertyInfo?.currency}
              </span>
            </div>
          </div>

          <div className="w-full">
            <PresentationCard
              title="title_pd_s1"
              content="content_pd_s1"
              external_links={{
                whatsapp: "",
                facebook: "https://www.facebook.com/gvictoricabajaservices",
                instagram:
                  "https://www.instagram.com/gvbajarealty?igsh=YjlvcXZobDkwNmtm",
                tiktok:
                  "https://www.tiktok.com/@gvbajarealty?_t=8nrROaEGxBF&_r=1",
              }}
              image={pcImage}
              mail="info@gvbajaservices.com"
              phone={{
                mx: phoneNumbers.mx,
                usa: phoneNumbers.usa,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
