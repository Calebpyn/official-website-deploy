//Description: List of for sale properties

//Components
import PropertyCard from "../common/PropertyCard";

//Assets
import example_1 from "../../assets/for_sale/mocks/example_1.jpg";

function Section1() {
  return (
    <div className="w-full bg-white p-5 flex-wrap flex justify-around">
      <PropertyCard
        atts={[
          {
            en: "2 Bed",
            es: "2 Camas",
          },
          {
            en: "1 Bath",
            es: "1 Baño",
          },
          {
            en: "1 Kitchen",
            es: "1 Cocina",
          },
          {
            en: "Patio",
            es: "Patio",
          },
        ]}
        description={{
          es: "Casa completamente amueblada disponible para rentar en Ensenada, BC.",
          en: "Fully Furnished home available For Rent in Ensenada BC.",
        }}
        img={example_1}
        price={{ mx: "2,000,000 mx", us: "100,000 us" }}
        title={{
          es: "CASA EN LA BAHÍA",
          en: "BAY HOUSE",
        }}
        width="600"
        for_sale={true}
        pets={false}
      />

<PropertyCard
        atts={[
          {
            en: "2 Bed",
            es: "2 Camas",
          },
          {
            en: "1 Bath",
            es: "1 Baño",
          },
          {
            en: "1 Kitchen",
            es: "1 Cocina",
          },
          {
            en: "Patio",
            es: "Patio",
          },
        ]}
        description={{
          es: "Casa completamente amueblada disponible para rentar en Ensenada, BC.",
          en: "Fully Furnished home available For Rent in Ensenada BC.",
        }}
        img={example_1}
        price={{ mx: "2,000,000 mx", us: "100,000 us" }}
        title={{
          es: "CASA EN LA BAHÍA",
          en: "BAY HOUSE",
        }}
        width="600"
        for_sale={false}
        pets={false}
      />
    </div>
  );
}

export default Section1;
