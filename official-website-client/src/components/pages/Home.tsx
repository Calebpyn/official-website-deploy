//Description: Homepage

//Components
import Footer from "../common/Footer";
import Hero from "../homepage/Hero";
import Section1 from "../homepage/Section1";
import Section2 from "../homepage/Section2";
import Section3 from "../homepage/Section3";

//Assets
import footerImg from "../../assets/homepage/footer-asset-1.png";

//Imports
import { useEffect } from "react";

function Home() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />

      {/* Sections on stand by */}
      <Footer img={footerImg} />
    </div>
  );
}

export default Home;
