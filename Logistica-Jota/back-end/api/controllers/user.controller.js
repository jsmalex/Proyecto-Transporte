const e = require("express");
const User = require("../models/user.model.js");

// Importamos las librerías para manejar tokens y cifrado de contraseñas
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();

const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    return response.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
      CIF: req.body.CIF,
      address: req.body.address,
      CP: req.body.CP,
      city: req.body.city,
      province: req.body.province,
      collection_price: req.body.collection_price,
      until_12T_price: req.body.until_12T_price,
      collection_12T_15T_price: req.body.collection_12T_15T_price,
      over15T_price: req.body.over15T_price,
      Valencia_3T_price: req.body.Valencia_3T_price,
      validated_client: req.body.validated_client,
    });
    return res.status(200).json({ message: "User created", User: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const salt = bcrypt.genSaltSync(parseInt("10"));
    // Ciframos la contraseña que viene en el cuerpo de la solicitud (req.body.password) usando la 'sal' generada
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    // Creamos el payload del token, incluyendo el CIF del usuario
    const payload = { CIF: req.body.CIF };
    // Firmamos el token con una clave secreta y establecemos un tiempo de expiración
    const token = jwt.sign(payload, env.parsed.SECRET, { expiresIn: "1h" });
    const updatedUser = await user.update(req.body);
    user.save();
    if (updatedUser) {
      return res
        .status(200)
        .json({ message: "User updated", User: updatedUser,  token  });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProfile = async (req, res) => {
  console.log(res);
  try {
    const user = await User.findByPk(res.locals.user.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
};
