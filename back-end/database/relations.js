const cliente = require('../api/models/cliente.model')

const initializeRelations = () => {
  try {
    //here the relations
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;