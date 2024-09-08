//Description: Real estate info page

//Hooks
import { useEffect } from "react";

//Components
import BasicHeroV3 from "../common/BasicHeroV3";
import Section1 from "../real_estate/Section1";
import Section2 from "../real_estate/Section2";
import Footer from "../common/Footer";

//Assets
import heroBg from "../../assets/real_estate/hero-asset-1.png";
import footerBg from "../../assets/real_estate/footer-asset-1.jpg";

function RealEstate() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      <BasicHeroV3 img={heroBg} title="hero_title" />
      <Section1 />
      <Section2 />
      <Footer img={footerBg} />
    </div>
  );
}

export default RealEstate;
