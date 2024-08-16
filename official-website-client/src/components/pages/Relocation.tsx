//Description: Relocation

//Assets
import mainBg from "../../assets/relocation/hero-asset-1.png";
import footerBg from "../../assets/relocation/footer-asset-1.jpg";


//Components
import BasicHero from "../common/BasicHero";
import Footer from "../common/Footer";
import Section1 from "../relocation/Section1";
import Section2 from "../relocation/Section2";
import Section3 from "../relocation/Section3";
import Section4 from "../relocation/Section4";


//Imports
import { useEffect } from "react";

function Relocation() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="w-full">
      <BasicHero img={mainBg} title="relocation_hero_title" />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>

      <Footer img={footerBg}/>
    </div>
  );
}

export default Relocation;
