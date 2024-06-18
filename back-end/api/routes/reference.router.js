const router = require("express").Router();
const {
  getAllReferences,
  getOneReference,
  createReference,
  updateReference,
  deleteReference,
} = require("../controllers/reference.controller.js");

router.get("/", getAllReferences);
router.get("/:id", getOneReference);
router.post("/", createReference);
router.put("/:id", updateReference);
router.delete("/:id", deleteReference);

module.exports = router;
