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
    const reference = await Reference.create({
      reference_code: req.body.reference_code,
      factory_id: req.body.factory_id,
      order_id: req.body.order_id,
    });
    return res
      .status(200)
      .json({ message: "Reference created", reference: reference });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateReference = async (req, res) => {
  try {
    const reference = await Reference.findByPk(req.params.id);
    const updateReference = await reference.update(req.body);
    reference.save();
    if (updateReference) {
      return res
        .status(200)
        .json({ message: "Reference updated", reference: updateReference });
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
