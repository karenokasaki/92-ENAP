import express from "express";
import ProductModel from "../models/product.model.js";

const productRoute = express.Router();

productRoute.post("/create-product", async (req, res) => {
  try {
    const createNewProduct = await ProductModel.create(req.body);

    return res.status(201).json(createNewProduct);
  } catch (error) {
    console.log(error);

    return res.status(400).json(error.errors);
  }
});

export default productRoute
