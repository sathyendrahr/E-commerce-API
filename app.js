// Main Server file

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRouter from "./src/features/products/routes/product.routes.js";
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// default route
app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

// Product routes
app.use("/products", productRouter);

// Invalid path route
app.use((req, res, next) => {
  res.status(400).json({ error: "Invalid URL path" });
});

// Generic Error handler
app.use(errorHandler);

export default app;
