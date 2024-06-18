const Client = require("../models/client.model.js");

const getAllClients = async (request, response) => {
  try {
    const clients = await Client.findAll();
    return response.status(200).json(clients);
  } catch (error) {
    console.log(error);
  }
};

const getOneClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (cliente) {
      return res.status(200).json(client);
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createClient = async (req, res) => {
  try {
    const client = await Client.create({
      nombre: req.body.nombre,
      CIF: req.body.CIF,
      direccion: req.body.direccion,
      CP: req.body.CP,
      ciudad: req.body.ciudad,
      provincia: req.body.provincia,
      tarifa_recogida: req.body.tarifa_recogida,
      tarifa_hasta_12T: req.body.tarifa_hasta_12T,
      tarifa_12T_15T: req.body.tarifa_12T_15T,
      tarifa_Mas15T: req.body.tarifa_Mas15T,
      tarifa_Valencia_3T: req.body.tarifa_Valencia_3T,
      cliente_validado: req.body.cliente_validado,
    });
    return res.status(200).json({ message: "Client created", client: client });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateClient = async (req, res) => {
  try {
    const [clienteExist, cliente] = await Client.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (clienteExist !== 0) {
      return res
        .status(200)
        .json({ message: "Client updated", cliente: cliente });
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = await Cliente.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (client) {
      return res.status(200).json("Client deleted");
    } else {
      return res.status(404).send("Client not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient,
};
