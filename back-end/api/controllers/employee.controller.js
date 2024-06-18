const Employee = require("../models/employee.model.js");

const getAllEmployees = async (request, response) => {
  try {
    const Employees = await Employee.findAll();
    return response.status(200).json(employees);
  } catch (error) {
    console.log(error);
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      return res.status(200).json(employee);
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = await employee.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    return res
      .status(200)
      .json({ message: "Worker created", employee: employee });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const [employeeExist, employee] = await Employee.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (employeeExist !== 0) {
      return res
        .status(200)
        .json({ message: "Worker updated", employee: employee });
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (employee) {
      return res.status(200).json("Worker deleted");
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
