//Description: This is the services list section

//Components
import Card from "../common/Card";

//Assets
import asset1 from "../../assets/homepage/section2-asset-1.png";
import asset2 from "../../assets/homepage/section2-asset-2.png";
import asset3 from "../../assets/homepage/section2-asset-3.png";

//Imports
import { useState } from "react";

//Types
import { cardOptions } from "../../types/homepage/Section2Types";

function Section2() {

  //Card settings
  const [cardOptions] = useState<cardOptions>({
    width: "300",
    height: "500",
  });

  return (
    <div className="w-full flex flex-col md:flex-row md:h-[700px] bg-white justify-around gap-4 px-2 items-center py-5 md:py-0">
      <Card
        width={cardOptions.width}
        height={cardOptions.height}
        redirect="for_sale"
        image={asset1}
        text="real_estate"
      />
      <Card
        width={cardOptions.width}
        height={cardOptions.height}
        redirect="property_m"
        image={asset2}
        text="property_management"
      />
      <Card
        width={cardOptions.width}
        height={cardOptions.height}
        redirect="relocation"
        image={asset3}
        text="relocation"
      />
    </div>
  );
}

export default Section2;
