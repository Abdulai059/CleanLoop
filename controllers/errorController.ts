import { Request, Response, NextFunction } from "express";
import { Prisma } from "../prisma/generated/client";
import AppError from "../utils/AppError";

// Handle Prisma unique constraint violation (replaces handleDuplicateFieldsDB)
const handlePrismaDuplicateError = (
  err: Prisma.PrismaClientKnownRequestError,
) => {
  const field = (err.meta?.target as string[])?.[0] || "field";
  const message = `Duplicate ${field}. Please use another value!`;
  return new AppError(message, 400);
};

// Handle Prisma "record not found"
const handlePrismaNotFoundError = () => {
  return new AppError("No record found with that ID.", 404);
};

// Handle JWT errors
const handleJWTError = () => {
  return new AppError("Invalid token. Please log in again!", 401);
};
// Handle JWT expired error
const handleJWTExpiredError = () => {
  return new AppError("Token expired. Please log in again!", 401);
};

// Send error in development mode
const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Send error in production mode
const sendErrorProd = (err: any, res: Response) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Log unexpected errors
    console.error("ERROR 💥", err);

    // Send generic error message to client
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Development mode
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;

    if (error.code === "P2002") {
      error = handlePrismaDuplicateError(error);
    }

    if (error.code === "P2025") {
      error = handlePrismaNotFoundError();
    }

    if (error.name === "JsonWebTokenError") error = handleJWTError();
    if (error.name === "TokenExpiredError") error = handleJWTExpiredError();

    sendErrorProd(error, res);
  }
};
