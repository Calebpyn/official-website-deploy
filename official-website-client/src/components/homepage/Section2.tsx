//Description: This is the services list section

//Components
import Card from "../common/Card"

//Assets
import asset1 from "../../assets/homepage/section2-asset-1.png"
import asset2 from "../../assets/homepage/section2-asset-2.png"
import asset3 from "../../assets/homepage/section2-asset-3.png"

//Imports
import { useState } from "react"

//Types
import { cardOptions } from "../../types/homepage/Section2Types"

//Translation
// import { useTranslation } from "react-i18next"

function Section2() {

    //Translation
    // const {t} = useTranslation()

    const [cardOptions] = useState<cardOptions>({
        width: "300",
        height: "400"
    })

  return (
    <div className="w-full flex flex-col md:flex-row h-[700px] bg-white justify-around items-center">
        <Card width={cardOptions.width} height={cardOptions.height} redirect="for_sale" image={asset1} text='real_estate'/>
        <Card width={cardOptions.width} height={cardOptions.height} redirect="property_m" image={asset2} text='property_management'/>
        <Card width={cardOptions.width} height={cardOptions.height} redirect="relocation" image={asset3} text='relocation'/>
    </div>
  )
}

export default Section2