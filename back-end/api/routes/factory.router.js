const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllFactories,
  getOneFactory,
  createFactory,
  updateFactory,
  deleteFactory,
} = require("../controllers/factory.controller.js");

router.get("/", checkAuth, checkAdmin, getAllFactories);
router.get("/:id", checkAuth, getOneFactory);
router.post("/", checkAuth, createFactory);
router.put("/:id", checkAuth, updateFactory);
router.delete("/:id", checkAuth, deleteFactory);

module.exports = router;
