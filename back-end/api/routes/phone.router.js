const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllPhones,
  getOnePhone,
  createPhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phone.controller.js");

router.get("/", checkAuth, getAllPhones);
router.get("/:id", checkAuth, getOnePhone);
router.post("/", checkAuth, createPhone);
router.put("/:id", checkAuth, updatePhone);
router.delete("/:id", checkAuth, deletePhone);

module.exports = router;
