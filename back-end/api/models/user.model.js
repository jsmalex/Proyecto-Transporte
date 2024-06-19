// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");

// Definimos un modelo 'Usuario' usando el objeto connection que se refiere a la tabla 'usuarios' en la base de datos
const User = connection.define(
  "user",
  {
    // Definimos una columna 'name' para almacenar el nombre del usuario
    name: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    role: {
      type: DataTypes.ENUM({
        values: ["admin", "client"],
      }),
    },
    CIF: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    address: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    CP: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    city: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    province: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    collection_price: {
      type: DataTypes.INTEGER,
    },
    until_12T_price: {
      type: DataTypes.INTEGER,
    },
    collection_12T_15T_price: {
      type: DataTypes.INTEGER,
    },
    over15T_price: {
      type: DataTypes.INTEGER,
    },
    Valencia_3T_price: {
      type: DataTypes.INTEGER,
    },
    validated_client: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'usuario' para poder usarlo en otras partes de la aplicación
module.exports = User;