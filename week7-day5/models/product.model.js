import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    quantity: {type: Number, min: 0}
  },
  { timestamps: true }
);

const ProductModel = model("Product", productSchema);

export default ProductModel;
