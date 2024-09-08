//Description: Homepage

//Components
import Footer from "../common/Footer";
import Hero from "../homepage/Hero";
import Section1 from "../homepage/Section1";
import Section2 from "../homepage/Section2";
import Section3 from "../homepage/Section3";

//Assets
import footerImg from "../../assets/homepage/footer-asset-1.jpg";

//Imports
import { useEffect } from "react";
// import Section4 from "../homepage/Section4";
import Section5 from "../homepage/Section5";
import Section6 from "../homepage/Section6";

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
      {/* <Section4 /> */}

      <Section5 />

      <Section6 />

      {/* Sections on stand by */}
      <Footer img={footerImg} />
    </div>
  );
}

export default Home;
