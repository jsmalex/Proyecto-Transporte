const router = require("express").Router();
const {
  getAllVehicles,
  getOneVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicle.controller.js");

router.get("/", getAllVehicles);
router.get("/:id", getOneVehicle);
router.post("/", createVehicle);
router.put("/:id", updateVehicle);
router.delete("/:id", deleteVehicle);

module.exports = router;
