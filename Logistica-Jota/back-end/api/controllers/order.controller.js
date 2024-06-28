const Order = require("../models/order.model.js");
const Factory = require("../models/factory.model")
const Reference = require("../models/reference.model");
const User = require("../models/user.model.js");

const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.findAll({
      include: [Reference,Factory,User]
    });
    return response.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

const getAllOrdersClient = async (request, response) => {
  try {
    const orders = await Order.findAll({
      where:{
        userId: response.locals.user.id
      },
      include: [Reference,Factory]

    });
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
    //Aqui escribo en la tabla de order
    const order = await Order.create({
      userId: res.locals.user.id,
    });
console.log(req.body)
    //Aqui escribo en la tabla de Fabricas
    req.body.map(async (miniOrder)=>{

      const factoryOrder = await Factory.findByPk(miniOrder.Factory_id)
      await order.addFactory(factoryOrder);

      //Aqui escribo en la tabla de referencias
      miniOrder.referencies.map(async (oneReference)=>{
        const reference = await Reference.create({
          reference_code : oneReference,
          orderId : order.id,
          factoryId : factoryOrder.id
        })
      })

    })
    
    console.log(req.body);
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
  getAllOrdersClient,
};
