//Description: Routes file for wp-18062 back end

//Imports
const { Router } = require("express");
const router = new Router();

//Controllers
const {
  newProperty,
  getAllProperties,
  updateProperty,
  newImage,
  getAllImagesById,
  deleteProperty,
  getAllowedUsers,
  newAccess,
  deleteAccess,
  getAllForSale,
  getAllForRent,
  getAllForAirBnb,
  getPropertyById,
} = require("../controllers/offcial-website-server.controllers");

//GET
//  Get all properties
router.get("/all_properties", getAllProperties);
//  Get property by id
router.get("/property/:id", getPropertyById);
//  Get images by id
router.get("/all_images/:id", getAllImagesById);
//  Get allowed users
router.get("/allowed", getAllowedUsers);
//  Get for sale properties
router.get("/for_sale", getAllForSale);
//  Get for sale properties
router.get("/for_rent", getAllForRent);
//  Get for sale properties
router.get("/for_airbnb", getAllForAirBnb);

//POST
//  Create new property
router.post("/new_property", newProperty);
//  Post new image
router.post("/new_image", newImage);
//  Post a new acces
router.post("/new_access", newAccess);

//PUT
// Update an existing property
router.put("/update_property/:id", updateProperty);

//DELETE
// Delete a property
router.delete("/delete_property/:id", deleteProperty);
// Delete access
router.delete("/delete_access/:id", deleteAccess);

module.exports = router;
