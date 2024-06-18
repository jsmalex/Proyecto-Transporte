// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require("express").Router();

// Usamos el enrutador para manejar todas las peticiones dirigidas a '/cliente' usando el enrutador definido en 'cliente.router'.
router.use("/email", require("./email.router"));
router.use("/employee", require("./employee.router"));
router.use("/reference", require("./reference.router"));
router.use("/phone", require("./phone.router"));

// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;
