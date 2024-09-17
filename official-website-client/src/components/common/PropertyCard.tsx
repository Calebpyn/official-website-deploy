//Description: This is the information display card for properties, works for listings

//Types
import { useNavigate } from "react-router-dom";
import { propertyCardType } from "../../types/common/PropertyCard";

//Translation
import { useTranslation } from "react-i18next";

//Icons
import { FaAirbnb } from "react-icons/fa";

const PropertyCard: React.FC<propertyCardType> = ({
  atts,
  id,
  description,
  img,
  price,
  currency,
  title,
  width,
  for_sale,
  airbnb,
}) => {
  //Translation
  const { t, i18n } = useTranslation();

  //Navigation
  const navigate = useNavigate();

  //Price format
  function convertStringToFormattedFloat(value: string): string {
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
  return (
    <div
      className="flex flex-col justify-start items-center p-5 gap-2 hover:scale-105 tr cursor-pointer hover:shadow-lg rounded-md"
      style={{ width: `${width}px` }}
      onClick={() => navigate(`/real_estate/${id}`)}
    >
      <span className="w-full flex justify-between items-center text-2xl">
        {i18n.language == "es"
          ? title.es
          : i18n.language == "en"
          ? title.en
          : null}
        {airbnb ? (
          <span className="flex items-center gap-1 bg-[#FF5A5F] rounded-full text-white px-3">
            AirBnB <FaAirbnb />
          </span>
        ) : null}
      </span>

      <div className="h-[300px] overflow-hidden flex justify-center items-center">
        <img src={img} className="w-full rounded-md" />
      </div>

      <div className="w-full flex justify-start items-start pl-3 flex-col gap-2">
        <span className="text-sm text-zinc-700 h-[100px] overflow-y-clip relative">
          {i18n.language == "es"
            ? description.es
            : i18n.language == "en"
            ? description.en
            : null}

          <div className="absolute w-full h-full top-0 bg-gradient-to-b from-transparent to-white flex justify-end items-end"></div>
        </span>
        <span className="text-[#064A8D] font-semibold text-2xl">
          ${convertStringToFormattedFloat(price)} {currency}
          {for_sale ? null : ` ${t("per_month")}`}
        </span>
        <span className="-ml-2">
          {atts.map((item, idx) => (
            <span
              key={idx}
              className="px-2 text-zinc-400 border-r-zinc-400 border-r-[1px]"
            >
              {i18n.language == "es"
                ? item.es
                : i18n.language == "en"
                ? item.en
                : null}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
