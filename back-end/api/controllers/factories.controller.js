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
      cliente_id: req.body.cliente_id,
      fecha_Factory: req.body.fecha_Factory,
      fecha_carga: req.body.fecha_carga,
      carga_total_estimada: req.body.carga_total_estimada,
      carga_total_real: req.body.carga_total_real,
      documentacion: req.body.documentacion,
      observaciones: req.body.observaciones,
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
