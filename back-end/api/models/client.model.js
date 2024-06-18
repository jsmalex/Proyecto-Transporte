// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");

// Definimos un modelo 'Cliente' usando el objeto connection que se refiere a la tabla 'clientes' en la base de datos
const Client = connection.define(
  "client",
  {
    // Definimos una columna 'name' para almacenar el nombre del usuario
    name: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
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
    collection_Over15T_price: {
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

// Exportamos el modelo 'Cliente' para poder usarlo en otras partes de la aplicación
module.exports = Client;
