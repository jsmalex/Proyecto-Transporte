const router = require("express").Router();
const {
  getAllClientes,
  getOneCliente,
  createCliente,
  updateCliente,
  deleteCliente
} = require("../controllers/client.controller.js");

router.get("/", getAllClientes);
router.get("/:id", getOneCliente);
router.post("/", createCliente);
router.put("/:id",updateCliente);
router.delete("/:id", deleteCliente);

module.exports = router;
