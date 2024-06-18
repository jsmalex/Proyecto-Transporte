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
      name: req.body.name,
      CIF: req.body.CIF,
      address: req.body.address,
      CP: req.body.CP,
      city: req.body.city,
      province: req.body.province,
      collection_price: req.body.collection_price,
      until_12T_price: req.body.until_12T_price,
      collection_12T_15T_price: req.body.collection_12T_15T_price,
      collection_Over15T: req.body.collection_Over15T,
      collection_Valencia_3T: req.body.collection_Valencia_3T,
      validated_client: req.body.validated_client,
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
