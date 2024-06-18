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
      employee_id: req.body.cliente_id,
      registration: req.body.registration,
      brand: req.body.brand,
      model: req.body.model,
      km: req.body.km,
      MAM: req.body.MAM,
      ITV_expiration: req.body.ITV_expiration,
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
