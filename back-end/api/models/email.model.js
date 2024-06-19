const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Email = connection.define(
  "email",
  {
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Email;
