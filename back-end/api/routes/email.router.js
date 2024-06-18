const router = require("express").Router();
const {
  getAllEmails,
  getOneEmail,
  createEmail,
  updateEmail,
  deleteEmail,
} = require("../controllers/email.controller.js");

router.get("/", getAllEmails);
router.get("/:id", getOneEmail);
router.post("/", createEmail);
router.put("/:id", updateEmail);
router.delete("/:id", deleteEmail);

module.exports = router;
