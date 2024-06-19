const user = require("../api/models/user.model");
const order = require("../api/models/order.model");
const vehicle = require("../api/models/vehicle.model");
const factory = require("../api/models/factory.model");
const email = require('../api/models/email.model')
const employee = require('../api/models/employee.model')
const phone = require('../api/models/phone.model')
const reference = require('../api/models/reference.model')

const initializeRelations = () => {
  try {
    //here the relations
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
