const Order = require("../models/order.model.js");

const getAllOrders = async (request, response) => {
  try {
    const Orders = await Order.findAll();
    return response.status(200).json(Orders);
  } catch (error) {
    console.log(error);
  }
};

const getOneOrder = async (req, res) => {
  try {
    const Order = await Order.findByPk(req.params.id);
    if (Order) {
      return res.status(200).json(Order);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const Order = await Order.create({
      cliente_id: req.body.cliente_id,
      date_Order: req.body.date_Order,
      date_load: req.body.date_load,
      total_load_estimada: req.body.total_load_estimada,
      total_load_real: req.body.total_load_real,
      documentacion: req.body.documentacion,
      observaciones: req.body.observaciones,
    });
    return res.status(200).json({ message: "Order created", Order: Order });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const [OrderExist, Order] = await Order.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (OrderExist !== 0) {
      return res.status(200).json({ message: "Order updated", Order: Order });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const Order = await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Order) {
      return res.status(200).json("Order deleted");
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
