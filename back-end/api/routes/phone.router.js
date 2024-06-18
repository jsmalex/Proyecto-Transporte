const router = require("express").Router();
const {
  getAllPhones,
  getOnePhone,
  createPhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phone.controller.js");

router.get("/", getAllPhones);
router.get("/:id", getOnePhone);
router.post("/", createPhone);
router.put("/:id", updatePhone);
router.delete("/:id", deletePhone);

module.exports = router;
