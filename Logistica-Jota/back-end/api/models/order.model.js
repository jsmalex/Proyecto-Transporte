// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");

// Definimos un modelo 'Order' usando el objeto connection que se refiere a la tabla 'Orders' en la base de datos
const Order = connection.define(
  "order",
  {
    date_order: {
      type: DataTypes.DATE,
    },
    date_load: {
      type: DataTypes.DATE,
    },
    total_estimated_load: {
      type: DataTypes.DOUBLE,
    },
    total_real_load: {
      type: DataTypes.DOUBLE,
    },
    documentation: {
      type: DataTypes.BLOB,
    },
    observations: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'Order' para poder usarlo en otras partes de la aplicación
module.exports = Order;
