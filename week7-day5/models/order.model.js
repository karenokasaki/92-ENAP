import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    products: [
      {
        productID: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, min: 0 },
      },
    ],
  },
  { timestamps: true }
);

const OrderModel = model("Order", orderSchema)

export default OrderModel