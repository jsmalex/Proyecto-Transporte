// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");

// Definimos un modelo 'Vehiculo' usando el objeto connection que se refiere a la tabla 'Vehiculos' en la base de datos
const Vehicle = connection.define(
  "vehicle",
  {
    registration: {
      type: DataTypes.STRING,
      unique: true,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    km: {
      type: DataTypes.INTEGER,
    },
    MAM: {
      type: DataTypes.INTEGER,
    },
    ITV_expiration: {
      type: DataTypes.DATE,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'Vehiculo' para poder usarlo en otras partes de la aplicación
module.exports = Vehicle;
