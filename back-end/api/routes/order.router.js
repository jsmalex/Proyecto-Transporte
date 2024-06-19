const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller.js");

router.get("/", checkAuth, getAllOrders);
router.get("/:id", checkAuth, getOneOrder);
router.post("/", checkAuth, createOrder);
router.put("/:id", checkAuth, updateOrder);
router.delete("/:id", checkAuth, deleteOrder);

module.exports = router;
