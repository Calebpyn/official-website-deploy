//Routes
import { HashRouter, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/common/NavBar";
import Home from "./components/pages/Home";
import ContactButton from "./components/common/ContactButton";
import Relocation from "./components/pages/Relocation";
import PropertyManagement from "./components/pages/PropertyManagement";
import PropertyDisplay from "./components/pages/PropertyDisplay";
import ForSale from "./components/pages/ForSale";
import ForRent from "./components/pages/ForRent";

function App() {
  return (
    <HashRouter>
      <div className="bg-[#072C4F] w-full flex flex-col items-center justify-start">
        <div className="max-w-screen-2xl w-full flex flex-col items-center justify-start relative">
          <NavBar />
          {/* Navbar spacer */}
          <div className="h-[170px] bg-[#174067] w-full"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relocation" element={<Relocation />} />
            <Route path="/property_m" element={<PropertyManagement />} />
            <Route path="/real_estate/:id" element={<PropertyDisplay />} />
            <Route path="/for_sale" element={<ForSale />} />
            <Route path="/for_rent" element={<ForRent />} />
          </Routes>
          <ContactButton/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
