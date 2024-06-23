const user = require("../api/models/user.model");
const order = require("../api/models/order.model");
const factory = require("../api/models/factory.model");
const email = require("../api/models/email.model");
const phone = require("../api/models/phone.model");
const reference = require("../api/models/reference.model");
const initializeRelations = () => {
  //RELACIONES
  try {
    //USUARIO-TELEFONO
    user.hasMany(phone);
    phone.belongsTo(user);
    //USUARIO-EMAIL
    user.hasMany(email);
    email.belongsTo(user);
    //USUARIO-PEDIDO
    user.hasMany(order);
    order.belongsTo(user);
    //PEDIDO-FABRICA
    order.belongsToMany(factory, {through: "orders_factories"});
    factory.belongsToMany(order, {through: "orders_factories"});
    //PEDIDO-REFERENCIAS
    order.hasMany(reference);
    reference.belongsTo(order);
    //FABRICA-REFERENCIA
    factory.hasMany(reference);
    reference.belongsTo(factory);
    
    
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
