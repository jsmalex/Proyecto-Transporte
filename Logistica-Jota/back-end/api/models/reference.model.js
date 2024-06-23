const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Reference = connection.define(
  "reference",
  {
    reference_code: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Reference;
