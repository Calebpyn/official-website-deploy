//Description: About us page

//Hooks
import { useEffect } from "react";

//Components
import BasicHeroV2 from "../common/BasicHeroV2";
import Section1 from "../about_us/Section1";
import Footer from "../common/Footer";

//Assets
import heroImg from "../../assets/about_us/hero-asset-1.png";
import footerImg from "../../assets/about_us/footer-asset-1.jpg";

function AboutUs() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <BasicHeroV2 img={heroImg} title="about_us" />
      <Section1 />

      <Footer img={footerImg} />
    </div>
  );
}

export default AboutUs;
