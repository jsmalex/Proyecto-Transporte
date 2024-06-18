const Phone = require("../models/phone.model.js");

const getAllPhones = async (request, response) => {
  try {
    const phones = await Phone.findAll();
    return response.status(200).json(phones);
  } catch (error) {
    console.log(error);
  }
};

const getOnePhone = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    if (phone) {
      return res.status(200).json(phone);
    } else {
      return res.status(404).send("Phone not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPhone = async (req, res) => {
  try {
    const phone = await phone.create({
      cliente_id: req.body.cliente,
      phone: req.body.phone,
    });
    return res
      .status(200)
      .json({ message: "Telephone number created", phone: phone });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePhone = async (req, res) => {
  try {
    const [phoneExist, phone] = await Phone.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (phoneExist !== 0) {
      return res
        .status(200)
        .json({ message: "Telephone number updated", phone: phone });
    } else {
      return res.status(404).send("Telephone number not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePhone = async (req, res) => {
  try {
    const phone = await Phone.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (phone) {
      return res.status(200).json("Telephone number deleted");
    } else {
      return res.status(404).send("Telephone number not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPhones,
  getOnePhone,
  createPhone,
  updatePhone,
  deletePhone,
};
