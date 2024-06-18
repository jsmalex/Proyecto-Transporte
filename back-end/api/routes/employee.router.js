const router = require("express").Router();
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller.js");

router.get("/", getAllEmployees);
router.get("/:id", getOneEmployee);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
