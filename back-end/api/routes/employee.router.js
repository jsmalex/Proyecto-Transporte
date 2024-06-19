const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller.js");

router.get("/", checkAuth, getAllEmployees);
router.get("/:id", checkAuth, getOneEmployee);
router.post("/", checkAuth, createEmployee);
router.put("/:id", checkAuth, updateEmployee);
router.delete("/:id", checkAuth, deleteEmployee);

module.exports = router;
