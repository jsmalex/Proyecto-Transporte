const Factory = require("../models/factory.model.js");

const getAllFactories = async (request, response) => {
  try {
    const Factories = await Factory.findAll();
    return response.status(200).json(Factories);
  } catch (error) {
    console.log(error);
  }
};

const getOneFactory = async (req, res) => {
  try {
    const factory = await Factory.findByPk(req.params.id);
    if (factory) {
      return res.status(200).json(factory);
    } else {
      return res.status(404).send("Factory not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createFactory = async (req, res) => {
  try {
    const factory = await Factory.create({
      reference_id: req.body.reference_id,
      name: req.body.name,
      CIF: req.body.CIF,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
    });
    return res
      .status(200)
      .json({ message: "Factory created", factory: factory });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateFactory = async (req, res) => {
  try {
    const factory = await Factory.findByPk(req.params.id);
    const updatedFactory = await factory.update(req.body);
    factory.save();
    if (updatedFactory) {
      return res
        .status(200)
        .json({ message: "Factory updated", Factory: updatedFactory });
    } else {
      return res.status(404).send("Factory not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFactory = async (req, res) => {
  try {
    const factory = await Factory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (factory) {
      return res.status(200).json("Factory deleted");
    } else {
      return res.status(404).send("Factory not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFactories,
  getOneFactory,
  createFactory,
  updateFactory,
  deleteFactory,
};
