import mongoose from "mongoose";

export class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err, req, res, next) => {
  // If mongoose validation error, printing the message , else it will be caught as default error
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  // errors of CustomError Class will be handled here
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Default error message
  console.log(err);
  res.status(500).json({ error: "something went wrong" });
};
