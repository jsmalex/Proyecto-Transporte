const user = require("../api/models/user.model");
const order = require("../api/models/order.model");
const vehicle = require("../api/models/vehicle.model");
const factory = require("../api/models/factory.model");
const email = require("../api/models/email.model");
const employee = require("../api/models/employee.model");
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
    //PEDIDO-REFERENCIA
    order.hasMany(reference);
    reference.belongsTo(order);
    //FABRICA-REFERENCIA
    factory.hasMany(reference);
    reference.belongsTo(factory);
    //PEDIDO-EMPLEADO
    order.belongsToMany(employee, { through: "orders_employees" });
    employee.belongsToMany(order, { through: "orders_employees" });
    //EMPLEADO-VEHICULO
    employee.hasOne(vehicle);
    vehicle.belongsTo(employee);
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
