//Description: Controllers file for wp-18062 back end

const helloWorld = (req, res) => {
  res.json("Hello, world!");
};

//GET
//  Property display info
const getPropertyById = async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  
  try {
    //Mock
    res.json({
      id: 1,
      images: [
        "../../assets/relocation/carousel/asset_carousel_1.png",
        "../../assets/relocation/carousel/asset_carousel_2.png",
        "../../assets/relocation/carousel/asset_carousel_3.png",
      ],
      description:
        "Available July 17th 2023\nFully Furnished ocean view APARTMENT for Rent in Ensenada B.C\n1 bedroom\n1 bathroom\n5 min. From CICESE/ UABC and Coral y Marina.\nSome services included.\nImportant to mention, this  apartment is on a 3rd floor.",
      price: "20,000",
      currency: "MX",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  helloWorld,
  getPropertyById,
};
