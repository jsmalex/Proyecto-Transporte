const Factory = require("../models/vehicles.model.js");

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
    const Factory = await Factory.findByPk(req.params.id);
    if (Factory) {
      return res.status(200).json(Factory);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createFactory = async (req, res) => {
  try {
    const Factory = await Factory.create({
      reference_id: req.body.reference_id,
      name: req.body.name,
      fecha_carga: req.body.fecha_carga,
      CIF: req.body.CIF,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
    });
    return res.status(200).json({ message: "Order created", Factory: Factory });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateFactory = async (req, res) => {
  try {
    const [FactoryExist, Factory] = await Factory.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (FactoryExist !== 0) {
      return res
        .status(200)
        .json({ message: "Order updated", Factory: Factory });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFactory = async (req, res) => {
  try {
    const Factory = await Factory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Factory) {
      return res.status(200).json("Order deleted");
    } else {
      return res.status(404).send("Order not found");
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
