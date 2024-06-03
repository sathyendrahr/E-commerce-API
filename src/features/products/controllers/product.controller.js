import { CustomError } from "../../../utils/errorHandler.js";
import ProductRepository from "../models/product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  // Method to return all products
  async getAll(req, res, next) {
    try {
      const products = await this.productRepository.getAll();

      if (!products || products.length == 0) {
        return res.status(404).json({ data: { message: "no products" } });
      }

      res.status(200).json({ data: { products } });
    } catch (err) {
      next(err);
    }
  }

  // Method to create new product
  async addProduct(req, res, next) {
    try {
      const product = await this.productRepository.add(req.body);
      if (!product) {
        throw new CustomError(500, "product can't be created");
      }

      res.status(200).json({ data: { product } });
    } catch (err) {
      next(err);
    }
  }

  // Method to update product quantity
  async updateProductQuantity(req, res, next) {
    try {
      const productId = req.params.id;
      const quantity = req.query.number;

      // if number is not passed as query parameter, throw error message
      if (!quantity) {
        throw new CustomError(400, "'number' is required in query parameters");
      }

      const product = await this.productRepository.update(productId, quantity);

      if (!product) {
        throw new CustomError(500, "product can't be updated");
      }

      res
        .status(200)
        .json({ data: { product, message: "updated successfully" } });
    } catch (err) {
      next(err);
    }
  }

  // method to delete a product
  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;

      const deletedProduct = await this.productRepository.delete(productId);

      res.status(200).json({ data: { message: "product deleted" } });
    } catch (err) {
      next(err);
    }
  }
}
