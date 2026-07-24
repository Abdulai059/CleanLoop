import express, { Request, Response, NextFunction } from "express";

import userRouter from "./routes/userRoutes";
import AppError from "./utils/AppError";
import globalErrorHandler from "./controllers/errorController";

const app = express();

// 1) GLOBAL MIDDLEWARES
app.use(express.json());

// 3) ROUTES
app.use("/api/v1/users", userRouter);

// Handle undefined routes
app.all("*splat", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
