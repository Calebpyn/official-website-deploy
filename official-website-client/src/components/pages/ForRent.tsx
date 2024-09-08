//Description: This is the for rent section

//Assets
import heroBg from "../../assets/for_sale/hero-asset-1.png";
import commonHero from "../../assets/common_hero_asset_1.jpg";
import footerBg from "../../assets/for_rent/footer-asset-1.jpg";

//Components
import BasicHeroV2 from "../common/BasicHeroV2";
import Section1 from "../for_rent/Section1";
import RedirectionSection from "../common/RedirectionSection";
import Section2 from "../for_sale/Section2";
import ComplexMarkerMap from "../common/ComplexMarkerMap";
import Footer from "../common/Footer";

//Hooks
import { useEffect } from "react";

function ForRent() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <BasicHeroV2 img={heroBg} title="title_fr" />
      <Section1 />
      <RedirectionSection
        img={commonHero}
        redirect="for_sale"
        title="title_fs"
      />
      <Section2 />
      <ComplexMarkerMap />
      <Footer img={footerBg} />
    </div>
  );
}

export default ForRent;
