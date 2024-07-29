//Description: This is the information display card for properties, works for listings

//Types
import { propertyCardType } from "../../types/common/PropertyCard";

//Translation
import { useTranslation } from "react-i18next";

const PropertyCard: React.FC<propertyCardType> = ({
  atts,
  description,
  img,
  price,
  title,
  width,
  for_sale,
  pets,
}) => {
  //Translation
  const { t, i18n } = useTranslation();
  return (
    <div
      className="flex flex-col justify-start items-center p-5 gap-2"
      style={{ width: `${width}px` }}
    >
      <span className="w-full flex justify-start items-center text-2xl">
        {i18n.language == "es"
          ? title.es
          : i18n.language == "en"
          ? title.en
          : null}
      </span>

      <img src={img} className="w-full rounded-md" />

      <div className="w-full flex justify-start items-start pl-3 flex-col gap-2">
        <span className="text-sm text-zinc-700">
          {i18n.language == "es"
            ? description.es
            : i18n.language == "en"
            ? description.en
            : null}
        </span>
        <span className="text-[#064A8D] font-semibold text-2xl">
          $
          {i18n.language == "es"
            ? price.mx
            : i18n.language == "en"
            ? price.us
            : null}
          {for_sale ? null : ` ${t("per_month")}`}
        </span>
        <span className="-ml-2">
          {atts.map((item, idx) => (
            <span key={idx} className="px-2 text-zinc-400 border-r-zinc-400 border-r-[1px]">
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
