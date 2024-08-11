//Description: Controllers file for wp-18062 back end

//Supabase imports
const { createClient } = require("@supabase/supabase-js");

//Dotenv
require("dotenv").config();

//Supabase connection
const apiKey = process.env.SUPABASE_API_KEY;
const project = process.env.SUPABASE_DB_URL;
const supabase = createClient(project, apiKey);

//GET
//  Get all properties
const getAllProperties = async (req, res) => {
  try {
    // Fetch all properties
    const { data: properties, error: propertiesError } = await supabase
      .from("property")
      .select("*");

    if (propertiesError) throw propertiesError;

    // If there are no properties, return an empty array
    if (properties.length === 0) {
      return res.json([]);
    }

    // Fetch all related attributes for the properties
    const propertyIds = properties.map((property) => property.id);
    const { data: attributes, error: attributesError } = await supabase
      .from("att")
      .select("*")
      .in("fk_property", propertyIds);

    if (attributesError) throw attributesError;

    // Combine properties with their related attributes
    const propertiesWithAttributes = properties.map((property) => ({
      ...property,
      atts: attributes.filter((att) => att.fk_property === property.id),
    }));

    // Send the combined data
    res.json(propertiesWithAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all properties
const getPropertyById = async (req, res) => {
  try {
    // Fetch all properties
    const { data: properties, error: propertiesError } = await supabase
      .from("property")
      .select("*")
      .eq("id", req.params.id);

    if (propertiesError) throw propertiesError;

    // If there are no properties, return an empty array
    if (properties.length === 0) {
      return res.json([]);
    }

    // Fetch all related attributes for the properties
    const propertyIds = properties.map((property) => property.id);
    const { data: attributes, error: attributesError } = await supabase
      .from("att")
      .select("*")
      .in("fk_property", propertyIds);

    if (attributesError) throw attributesError;

    // Combine properties with their related attributes
    const propertiesWithAttributes = properties.map((property) => ({
      ...property,
      atts: attributes.filter((att) => att.fk_property === property.id),
    }));

    // Send the combined data
    res.json(propertiesWithAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get an all images by fk
const getAllImagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("image")
      .select("*")
      .eq("fk_property", id);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get list of allowed users
const getAllowedUsers = async (req, res) => {
  try {
    const { data, error } = await supabase.from("allowed_user").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all for sale
const getAllForSale = async (req, res) => {
  try {
    // Fetch all properties of type 'For Sale'
    const { data: properties, error: propertiesError } = await supabase
      .from("property")
      .select("*")
      .eq("type", "For Sale");

    if (propertiesError) throw propertiesError;

    // If there are no properties, return an empty array
    if (properties.length === 0) {
      return res.json([]);
    }

    // Fetch all related attributes for the properties
    const propertyIds = properties.map((property) => property.id);
    const { data: attributes, error: attributesError } = await supabase
      .from("att")
      .select("*")
      .in("fk_property", propertyIds);

    if (attributesError) throw attributesError;

    // Combine properties with their related attributes
    const propertiesWithAttributes = properties.map((property) => ({
      ...property,
      atts: attributes.filter((att) => att.fk_property === property.id),
    }));

    // Send the combined data
    res.json(propertiesWithAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all for rent
const getAllForRent = async (req, res) => {
  try {
    // Fetch all properties of type 'For Rent'
    const { data: properties, error: propertiesError } = await supabase
      .from("property")
      .select("*")
      .in("type", ["For Rent", "AirBnB"])

    if (propertiesError) throw propertiesError;

    // If there are no properties, return an empty array
    if (properties.length === 0) {
      return res.json([]);
    }

    // Fetch all related attributes for the properties
    const propertyIds = properties.map((property) => property.id);
    const { data: attributes, error: attributesError } = await supabase
      .from("att")
      .select("*")
      .in("fk_property", propertyIds);

    if (attributesError) throw attributesError;

    // Combine properties with their related attributes
    const propertiesWithAttributes = properties.map((property) => ({
      ...property,
      atts: attributes.filter((att) => att.fk_property === property.id),
    }));

    // Send the combined data
    res.json(propertiesWithAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all for Airbnb
const getAllForAirBnb = async (req, res) => {
  try {
    // Fetch all properties of type 'AirBnB'
    const { data: properties, error: propertiesError } = await supabase
      .from("property")
      .select("*")
      .eq("type", "AirBnB");

    if (propertiesError) throw propertiesError;

    // If there are no properties, return an empty array
    if (properties.length === 0) {
      return res.json([]);
    }

    // Fetch all related attributes for the properties
    const propertyIds = properties.map((property) => property.id);
    const { data: attributes, error: attributesError } = await supabase
      .from("att")
      .select("*")
      .in("fk_property", propertyIds);

    if (attributesError) throw attributesError;

    // Combine properties with their related attributes
    const propertiesWithAttributes = properties.map((property) => ({
      ...property,
      atts: attributes.filter((att) => att.fk_property === property.id),
    }));

    // Send the combined data
    res.json(propertiesWithAttributes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
//  Post a new property
const newProperty = async (req, res) => {
  try {

    console.log(req.body.images)
    // Insert the new property and get its ID
    const { data: propertyData, error: propertyError } = await supabase
      .from("property")
      .insert([
        {
          name_es: req.body.name_es,
          name: req.body.name,
          desc_es: req.body.desc_es,
          desc: req.body.desc,
          price: req.body.price,
          type: req.body.type,
          currency: req.body.currency,
          images: req.body.images
        },
      ])
      .select("id");

    if (propertyError) throw propertyError;

    const propertyId = propertyData[0].id;

    // Prepare the attributes for insertion
    const atts = req.body.atts.map((att) => ({
      es: att.es,
      en: att.en,
      fk_property: propertyId,
    }));

    // Insert associated attributes
    const { error: attsError } = await supabase.from("att").insert(atts);

    if (attsError) throw attsError;

    // Send success response
    res.status(201).json({
      message: "Property created successfully",
      id: propertyId,
    });
  } catch (error) {
    // Send error response
    res.status(500).json({ error: error.message });
  }
};

//  Post a new access
const newAccess = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("allowed_user")
      .insert([
        {
          email: req.body.email,
        },
      ])
      .select("id");
    if (error) throw error;
    res
      .status(201)
      .json({ message: "Access created successfully", id: data[0].id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Save an image in the db
const newImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file;
  const filePath = `./${file.name}`;

  try {
    const { data, error } = await supabase.storage
      .from("property_images")
      .upload(filePath, file.data);

    if (error) {
      throw error;
    }

    res.send({ message: "File uploaded successfully", data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

//PUT
// Update an existing property
const updateProperty = async (req, res) => {
  try {
    // Update the property record
    const { error: updateError } = await supabase
      .from("property")
      .update({
        name_es: req.body.name_es,
        name: req.body.name,
        desc_es: req.body.desc_es,
        desc: req.body.desc,
        price: req.body.price,
        type: req.body.type,
        currency: req.body.currency,
        images: req.body.images,
      })
      .eq("id", req.params.id);

    if (updateError) throw updateError;

    // Delete all existing attributes related to the property
    const { error: deleteError } = await supabase
      .from("att")
      .delete()
      .eq("fk_property", req.params.id);

    if (deleteError) throw deleteError;

    // Prepare the new attributes for insertion
    const atts = req.body.atts.map((att) => ({
      es: att.es,
      en: att.en,
      fk_property: req.params.id,
    }));

    // Insert new attributes
    const { error: insertError } = await supabase.from("att").insert(atts);

    if (insertError) throw insertError;

    // Send success response
    res.json({ message: "Property updated successfully" });
  } catch (error) {
    // Send error response
    res.status(500).json({ error: error.message });
  }
};

//DELETE
// Delete a property
const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;

    // Start a transaction
    const { error: deleteAttsError } = await supabase
      .from("att")
      .delete()
      .eq("fk_property", propertyId);

    if (deleteAttsError) throw deleteAttsError;

    // Delete the property record
    const { error: deletePropertyError } = await supabase
      .from("property")
      .delete()
      .eq("id", propertyId);

    if (deletePropertyError) throw deletePropertyError;

    // Send success response
    res.json({
      message: "Property and related attributes deleted successfully",
    });
  } catch (error) {
    // Send error response
    res.status(500).json({ error: error.message });
  }
};

// Delete access
const deleteAccess = async (req, res) => {
  try {
    const { error } = await supabase
      .from("allowed_user")
      .delete()
      .eq("id", req.params.id);
    if (error) {
      res.send(error);
    }
    res.send("deleted!!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllImagesById,
  newImage,
  newProperty,
  getAllProperties,
  updateProperty,
  deleteProperty,
  getAllowedUsers,
  newAccess,
  deleteAccess,
  getAllForSale,
  getAllForRent,
  getAllForAirBnb,
  getPropertyById,
};
