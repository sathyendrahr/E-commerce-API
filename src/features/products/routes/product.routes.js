import express from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", (req, res, next) =>
  productController.getAll(req, res, next)
);

productRouter.post("/create", (req, res, next) =>
  productController.addProduct(req, res, next)
);

productRouter.post("/:id/update_quantity/", (req, res, next) =>
  productController.updateProductQuantity(req, res, next)
);

productRouter.delete("/:id", (req, res, next) =>
  productController.deleteProduct(req, res, next)
);

export default productRouter;
