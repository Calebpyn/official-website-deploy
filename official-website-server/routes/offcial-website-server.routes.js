//Description: Routes file for wp-18062 back end

//Imports
const { Router } = require("express");
const router = new Router();

//Controllers
const {
  helloWorld,
  getPropertyById,
} = require("../controllers/offcial-website-server.controllers");

//GET

//  Test
router.get("/", helloWorld);

//Property display info
router.get("/property/:id", getPropertyById);

module.exports = router;
