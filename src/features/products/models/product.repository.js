import { CustomError } from "../../../utils/errorHandler.js";
import productModel from "./product.model.js";

export default class ProductRepository {
  async getAll() {
    return await productModel.find();
  }

  async getProductById(id) {
    return await productModel.findById(id);
  }

  // Method to add new product
  async add(data) {
    const product = new productModel(data);
    return await product.save();
  }

  // Method to update product quantity
  async update(productId, quantity) {
    if (quantity < 0) {
      throw new CustomError(400, "Quantity must be >= 0");
    }

    const product = await this.getProductById(productId);
    if (!product) {
      throw new CustomError(400, "Product not found");
    }

    product.quantity = quantity;
    return await product.save();
  }

  // Method to delete a product with productId
  async delete(productId) {
    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) throw new CustomError(400, "Product can't be deleted");

    return deletedProduct;
  }
}
