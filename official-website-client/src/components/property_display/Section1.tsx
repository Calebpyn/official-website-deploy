//Description: Info display

//Components
import PresentationCard from "../common/PresentationCard";

//Assets
import pcImage from "../../assets/property_m/profile_img.jpg";

//Imports
import { useState } from "react";
import Carousel from "../common/Carousel";

//Translation
import { useTranslation } from "react-i18next";

function Section1() {
  //Translation
  const {t, i18n} = useTranslation()

  //Phone Numbers
  const [phoneNumbers] = useState({
    mx: "MX (646) 183-9897",
    usa: "US (760) 315-576",
  });

  //Description info
  const [info] = useState({content_es: "Fully Furnished home available For Rent in Ensenada BC. (North side).\nLong term or 6 months\nIdeal for up to 2 persons.\n2 bedrooms\n1 full bath\n1 half bath\nPatio\nIn a great neighborhood and close to stores and cafes.\nSorry no Pets\nPlease pm for further details."
  })

  //Fromated content
  const formattedContent = info.content_es.replace(/\n/g, "<br />");

  //Price
  const [price] = useState({
    mx: "20,000.00 mx",
    us: "1,000.00 us"
  })

  return (
    <div className="w-full flex justify-center items-center p-10 bg-[#F4F2E2]">
      <div className="w-[80%] flex justify-between items-start">
        <div className="w-full mr-5 flex-col justify-start">
          <div className="flex justify-center items-center bg-white rounded-lg py-4 shadow-lg mb-5">
            <Carousel height="400" imgArray={[pcImage]} width="400"/>
          </div>

          <div className="flex justify-center items-center bg-white rounded-lg p-5 shadow-lg">
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <span className="bg-[#F7657D] px-5 py-3 text-white font-semibold">{t('home_details')}</span>

              <p dangerouslySetInnerHTML={{ __html: formattedContent }} className="leading-7 text-zinc-600 font-light"></p>
            </div>
          </div>

          <div className="flex justify-center items-start px-10 bg-white rounded-lg p-5 shadow-lg mt-5 flex-col">
            <span className="font-semibold mb-1">{t('price')}</span>
            <span className="text-[#C9A117] text-3xl">${i18n.language == "en" ? price.us : price.mx}</span>
          </div>
        </div>

        <div className="">
          <PresentationCard
            width="350"
            title="title_pd_s1"
            content="content_pd_s1"
            external_links={{
              whatsapp: "",
              facebook: "https://www.facebook.com/gvictoricabajaservices",
              instagram: "https://www.instagram.com/gvbajarealty?igsh=YjlvcXZobDkwNmtm",
              tiktok: "https://www.tiktok.com/@gvbajarealty?_t=8nrROaEGxBF&_r=1",
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
    </div>
  );
}

export default Section1;
