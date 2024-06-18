const Reference = require("../models/reference.model.js");

const getAllReferences = async (request, response) => {
  try {
    const references = await Reference.findAll();
    return response.status(200).json(references);
  } catch (error) {
    console.log(error);
  }
};

const getOneReference = async (req, res) => {
  try {
    const reference = await Reference.findByPk(req.params.id);
    if (reference) {
      return res.status(200).json(reference);
    } else {
      return res.status(404).send("Reference not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createReference = async (req, res) => {
  try {
    const reference = await reference.create({
      client_id: req.body.client,
      reference: req.body.reference,
    });
    return res
      .status(200)
      .json({ message: "References created", reference: reference });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateReference = async (req, res) => {
  try {
    const [referenceExist, reference] = await Reference.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (referenceExist !== 0) {
      return res
        .status(200)
        .json({ message: "Reference updated", reference: reference });
    } else {
      return res.status(404).send("Reference not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteReference = async (req, res) => {
  try {
    const reference = await Reference.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (reference) {
      return res.status(200).json("Reference deleted");
    } else {
      return res.status(404).send("Reference not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllReferences,
  getOneReference,
  createReference,
  updateReference,
  deleteReference,
};
