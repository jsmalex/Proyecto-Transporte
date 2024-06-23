const Order = require("../models/order.model.js");

const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.findAll();
    return response.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      return res.status(200).json(order);
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      user_id: req.body.user_id,
      date_order: req.body.date_order,
      date_load: req.body.date_load,
      total_estimated_load: req.body.total_estimated_load,
      total_real_load: req.body.total_real_load,
      documentation: req.body.documentation,
      observations: req.body.observations,
    });
    return res.status(200).json({ message: "Order created", Order: order });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    const updatedOrder = await order.update(req.body);
    order.save();
    if (updatedOrder) {
      return res
        .status(200)
        .json({ message: "Order updated", Order: updatedOrder });
    } else {
      return res.status(404).send("Order not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (order) {
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
