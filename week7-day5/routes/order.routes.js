import express from "express";
import OrderModel from "../models/order.model.js";

const orderRoute = express.Router();

orderRoute.post("/create-order", async (req, res) => {
  try {
    const newOrder = await OrderModel.create(req.body);

    

    return res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

orderRoute.get("/order/:idOrder", async (req, res) => {
  try {
    const { idOrder } = req.params;

    const order = await OrderModel.findById(idOrder).populate({
      path: "products",
      populate: {
        path: "productID",
        model: "Product",
      },
    });

    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

export default orderRoute;
