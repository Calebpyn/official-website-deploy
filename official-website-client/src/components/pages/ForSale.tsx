//Description: For sale page, this should bring the posts from the backend

//Components
import Footer from "../common/Footer";
import BasicHeroV2 from "../common/BasicHeroV2";
import RedirectionSection from "../common/RedirectionSection";
import Section1 from "../for_sale/Section1";
import Section2 from "../for_sale/Section2";
import ComplexMarkerMap from "../common/ComplexMarkerMap";

//Assets
import footerBg from "../../assets/for_sale/footer-asset-1.jpg";
import heroBg from "../../assets/for_sale/hero-asset-1.png";
import commonHero from "../../assets/common_hero_asset_1.jpg";

//Hooks
import { useEffect } from "react";

function ForSale() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <BasicHeroV2 img={heroBg} title="title_fs" />
      <Section1 />
      <RedirectionSection
        img={commonHero}
        redirect="for_rent"
        title="title_fr"
      />
      <Section2 />
      <ComplexMarkerMap />
      <Footer img={footerBg} />
    </div>
  );
}

export default ForSale;
