//Description: Property Management Page

//Imports
import { useEffect } from "react";

//Components
import BasicHero from "../common/BasicHero";
import Section1 from "../property_m/Section1";
import Section2 from "../property_m/Section2";
import Section3 from "../property_m/Section3";
import Footer from "../common/Footer";

//Assets
import heroBg from "../../assets/property_m/hero-asset-1.png";
import footerBg from "../../assets/property_m/footer-asset-1.jpg";

function PropertyManagement() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <BasicHero img={heroBg} title="property_management" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer img={footerBg} />
    </div>
  );
}

export default PropertyManagement;
