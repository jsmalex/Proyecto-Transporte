const cliente = require("../api/models/client.model");
const pedido = require("../api/models/order.model");
const vehiculo = require("../api/models/vehicles.model");

const initializeRelations = () => {
  try {
    //here the relations
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
