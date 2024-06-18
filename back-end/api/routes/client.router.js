const router = require("express").Router();
const {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/client.controller.js");

router.get("/", getAllClients);
router.get("/:id", getOneClient);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
