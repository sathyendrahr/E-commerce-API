import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  quantity: {
    type: Number,
    required: true,
    min: [0, "quantity must be >= 0"],
    default: 0,
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
