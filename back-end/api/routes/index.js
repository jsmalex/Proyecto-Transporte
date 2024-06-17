// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require("express").Router();

// Usamos el enrutador para manejar todas las peticiones dirigidas a '/cliente' usando el enrutador definido en 'cliente.router'.
router.use("/cliente", require("./cliente.router"));

//Aqui iran todas las demas rutas






// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;
