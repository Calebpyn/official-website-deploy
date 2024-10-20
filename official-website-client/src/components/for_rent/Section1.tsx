//Description: Listing of all properties for rent

//Imports
import { useState, useEffect } from "react";

//Axios
import axios from "axios";

//Components
import PropertyCard from "../common/PropertyCard";

//Mui
import CircularProgress from "@mui/material/CircularProgress";

//Types
import { propertyDisplayType } from "../../types/for_sale/PropertyInfo";

function Section1() {
  //All for sale properties state
  const [allProperties, setAllProperties] = useState<propertyDisplayType[]>([]);

  //Loading State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //GET all properties for sale
  const handleAllForSale = async () => {
    setIsLoading(true);
    const response = await axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/for_rent`)
      .catch((err) => {
        console.log(err, "axios error");
        alert("Something went wrong...");
      });
    setAllProperties(response!.data);
    setIsLoading(false);
  };

  //Initial fetch
  useEffect(() => {
    handleAllForSale();
  }, []);

  return (
    <div className="w-full bg-white">
      {isLoading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="w-full bg-white p-5 flex-wrap flex justify-around">
          {allProperties.map((item: propertyDisplayType) => (
            <PropertyCard
              key={item.id}
              address={item.address}
              atts_en={item.atts_en}
              id={item.id}
              width="600"
              name={item.name}
              name_es={item.name_es}
              desc={item.desc}
              desc_es={item.desc_es}
              type={item.type}
              price={item.price}
              currency={item.currency}
              atts_es={item.atts_es}
              images={item.images}
              lat={item.lat}
              lng={item.lng}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section1;
