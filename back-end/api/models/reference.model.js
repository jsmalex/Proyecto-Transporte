const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Reference = connection.define(
  "reference",
  {
    code_ref: {
      type: DataTypes.STRING,
    },
    order_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Reference;
