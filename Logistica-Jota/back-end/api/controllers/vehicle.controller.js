const Vehicle = require("../models/vehicle.model.js");

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
      return res.status(404).send("Vehicle not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create({
      employee_id: req.body.employee_id,
      registration: req.body.registration,
      brand: req.body.brand,
      model: req.body.model,
      km: req.body.km,
      MAM: req.body.MAM,
      ITV_expiration: req.body.ITV_expiration,
    });
    return res
      .status(200)
      .json({ message: "Vehicle created", vehicle: vehicle });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    const updatedVehicle = await vehicle.update(req.body);
    vehicle.save();
    if (updatedVehicle) {
      return res
        .status(200)
        .json({ message: "Vehicle updated", Vehicle: updatedVehicle });
    } else {
      return res.status(404).send("Vehicle not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (vehicle) {
      return res.status(200).json("Vehicle deleted");
    } else {
      return res.status(404).send("Vehicle not found");
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
