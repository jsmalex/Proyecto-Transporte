const router = require("express").Router();
const {
  getAllPedidos,
  getOnePedido,
  createPedido,
  updatePedido,
  deletePedido,
} = require("../controllers/order.controller.js");

router.get("/", getAllPedidos);
router.get("/:id", getOnePedido);
router.post("/", createPedido);
router.put("/:id", updatePedido);
router.delete("/:id", deletePedido);

module.exports = router;
