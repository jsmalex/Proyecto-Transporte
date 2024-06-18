const client = require("../api/models/client.model");
const order = require("../api/models/order.model");
const vehicle = require("../api/models/vehicle.model");
const factory = require("../api/models/factory.model");

const initializeRelations = () => {
  try {
    //here the relations
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
