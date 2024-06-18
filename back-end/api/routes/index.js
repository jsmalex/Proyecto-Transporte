// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require("express").Router();

// Usamos el enrutador general para manejar todas las peticiones dirigidas a las direciones definidas para el resto de enrutadores.
router.use("/client", require("./client.router"));
router.use("/order", require("./order.router"));
router.use("/vehicle", require("./vehicle.router"));
router.use("/factory", require("./factory.router"));
router.use("/email", require("./email.router"));
router.use("/employee", require("./employee.router"));
router.use("/reference", require("./reference.router"));
router.use("/phone", require("./phone.router"));

// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;
