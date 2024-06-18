const router = require("express").Router();
const {
  getAllFactories,
  getOneFactory,
  createFactory,
  updateFactory,
  deleteFactory,
} = require("../controllers/factories.controller.js");

router.get("/", getAllFactories);
router.get("/:id", getOneFactory);
router.post("/", createFactory);
router.put("/:id", updateFactory);
router.delete("/:id", deleteFactory);

module.exports = router;
