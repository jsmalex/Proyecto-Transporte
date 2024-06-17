// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");

// Definimos un modelo 'Cliente' usando el objeto connection que se refiere a la tabla 'clientes' en la base de datos
const Cliente = connection.define(
  "cliente",
  {
    // Definimos una columna 'name' para almacenar el nombre del usuario
    nombre: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    CIF: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    direccion: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    CP: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    ciudad: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    provincia: {
      type: DataTypes.STRING, // Establece el tipo de dato como cadena de texto
    },
    tarifa_recogida: {
      type: DataTypes.INTEGER,
    },
    tarifa_hasta_12T: {
      type: DataTypes.INTEGER,
    },
    tarifa_12T_15T: {
      type: DataTypes.INTEGER,
    },
    tarifa_Mas15T: {
      type: DataTypes.INTEGER,
    },
    tarifa_Valencia_3T: {
      type: DataTypes.INTEGER,
    },
    cliente_validado: {
        type: DataTypes.BOOLEAN,
    }
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'Cliente' para poder usarlo en otras partes de la aplicación
module.exports = Cliente;
