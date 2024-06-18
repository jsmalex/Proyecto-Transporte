const Pedido = require("../models/order.model.js");

const getAllPedidos = async (request, response) => {
  try {
    const pedidos = await Pedido.findAll();
    return response.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
  }
};

const getOnePedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (pedido) {
      return res.status(200).json(pedido);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPedido = async (req, res) => {
  try {
    const pedido = await Pedido.create({
      cliente_id: req.body.cliente_id,
      fecha_pedido: req.body.fecha_pedido,
      fecha_carga: req.body.fecha_carga,
      carga_total_estimada: req.body.carga_total_estimada,
      carga_total_real: req.body.carga_total_real,
      documentacion: req.body.documentacion,
      observaciones: req.body.observaciones,
    });
    return res.status(200).json({ message: "Order created", pedido: pedido });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePedido = async (req, res) => {
  try {
    const [PedidoExist, Pedido] = await Pedido.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (PedidoExist !== 0) {
      return res.status(200).json({ message: "Order updated", Pedido: Pedido });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePedido = async (req, res) => {
  try {
    const Pedido = await Pedido.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Pedido) {
      return res.status(200).json("Order deleted");
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPedidos,
  getOnePedido,
  createPedido,
  updatePedido,
  deletePedido,
};
