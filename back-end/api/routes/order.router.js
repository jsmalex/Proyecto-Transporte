const router = require("express").Router();
const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller.js");

router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
