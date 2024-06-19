const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllVehicles,
  getOneVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicle.controller.js");

router.get("/", checkAuth, checkAdmin, getAllVehicles);
router.get("/:id", checkAuth, getOneVehicle);
router.post("/", checkAuth, createVehicle);
router.put("/:id", checkAuth, updateVehicle);
router.delete("/:id", checkAuth, deleteVehicle);

module.exports = router;
