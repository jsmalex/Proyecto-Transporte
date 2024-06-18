const Vehicle = require("../models/vehicles.model.js");

const getAllVehicles = async (request, response) => {
  try {
    const Vehicles = await Vehicle.findAll();
    return response.status(200).json(Vehicles);
  } catch (error) {
    console.log(error);
  }
};

const getOneVehicle = async (req, res) => {
  try {
    const Vehicle = await Vehicle.findByPk(req.params.id);
    if (Vehicle) {
      return res.status(200).json(Vehicle);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createVehicle = async (req, res) => {
  try {
    const Vehicle = await Vehicle.create({
      cliente_id: req.body.cliente_id,
      fecha_Vehicle: req.body.fecha_Vehicle,
      fecha_carga: req.body.fecha_carga,
      carga_total_estimada: req.body.carga_total_estimada,
      carga_total_real: req.body.carga_total_real,
      documentacion: req.body.documentacion,
      observaciones: req.body.observaciones,
    });
    return res.status(200).json({ message: "Order created", Vehicle: Vehicle });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateVehicle = async (req, res) => {
  try {
    const [VehicleExist, Vehicle] = await Vehicle.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (VehicleExist !== 0) {
      return res
        .status(200)
        .json({ message: "Order updated", Vehicle: Vehicle });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const Vehicle = await Vehicle.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Vehicle) {
      return res.status(200).json("Order deleted");
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllVehicles,
  getOneVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
