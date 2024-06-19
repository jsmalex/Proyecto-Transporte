const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllEmails,
  getOneEmail,
  createEmail,
  updateEmail,
  deleteEmail,
} = require("../controllers/email.controller.js");

router.get("/", checkAuth, getAllEmails);
router.get("/:id", checkAuth, getOneEmail);
router.post("/", checkAuth, createEmail);
router.put("/:id", checkAuth, updateEmail);
router.delete("/:id", checkAuth, deleteEmail);

module.exports = router;
