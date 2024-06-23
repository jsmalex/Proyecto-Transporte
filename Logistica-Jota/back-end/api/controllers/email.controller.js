const Email = require("../models/email.model.js");

const getAllEmails = async (request, response) => {
  try {
    const emails = await Email.findAll();
    return response.status(200).json(emails);
  } catch (error) {
    console.log(error);
  }
};

const getOneEmail = async (req, res) => {
  try {
    const email = await Email.findByPk(req.params.id);
    if (email) {
      return res.status(200).json(email);
    } else {
      return res.status(404).send("Email not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createEmail = async (req, res) => {
  try {
    const email = await Email.create({
      user_id: req.body.user_id,
      email: req.body.email
    });
    return res
      .status(200)
      .json({ message: "Email created", email: email });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateEmail = async (req, res) => {
  try {
    const email = await Email.findByPk(req.params.id);
    const updateEmail = await email.update(req.body);
    email.save();
    if (updateEmail) {
      return res
        .status(200)
        .json({ message: "Email updated", email: updateEmail });
    } else {
      return res.status(404).send("Email not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteEmail = async (req, res) => {
  try {
    const email = await Email.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (email) {
      return res.status(200).json("Email deleted");
    } else {
      return res.status(404).send("Email not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllEmails,
  getOneEmail,
  createEmail,
  updateEmail,
  deleteEmail,
};
