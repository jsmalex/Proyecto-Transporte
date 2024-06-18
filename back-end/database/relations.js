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