const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllReferences,
  getOneReference,
  createReference,
  updateReference,
  deleteReference,
} = require("../controllers/reference.controller.js");

router.get("/", checkAuth, checkAdmin, getAllReferences);
router.get("/:id", checkAuth, getOneReference);
router.post("/", checkAuth, createReference);
router.put("/:id", checkAuth, updateReference);
router.delete("/:id", checkAuth, deleteReference);

module.exports = router;
