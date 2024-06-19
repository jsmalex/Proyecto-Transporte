const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Reference = connection.define(
  "reference",
  {
    code_ref: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Reference;
