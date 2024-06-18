const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Employee = connection.define(
  "employee",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    }
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Employee;
