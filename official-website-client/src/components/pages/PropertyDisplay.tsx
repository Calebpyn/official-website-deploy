//Description: Property Info Display Page

//Imports
import { useParams } from "react-router-dom";

//Translation
import { useTranslation } from "react-i18next";
import Section1 from "../property_display/Section1";
import Footer from "../common/Footer";

//Assets
import mainFooter from "../../assets/property_display/footer-asset-1.jpg";

//Hooks
import { useEffect } from "react";

function PropertyDisplay() {

  //Params
  const { id } = useParams<{ id: string }>();

  //Translation
  const {} = useTranslation();

  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Section1 id={id!}/>
      <Footer img={mainFooter} />
    </div>
  );
}

export default PropertyDisplay;
