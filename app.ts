import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import hpp from "hpp";

import userRouter from "./routes/userRoutes";
import locationRouter from "./routes/locationRouters";
import householdRouter from "./routes/householdRoutes";
import materialRouter from "./routes/materialRoutes";
import recoveryRouter from "./routes/recoveryRoutes";
import pointRuleRouter from "./routes/pointRuleRoutes";
import walletRouter from "./routes/walletRoutes";
import rewardRouter from "./routes/rewardRoutes";
import redemptionRouter from "./routes/redemptionRoutes";

import AppError from "./utils/AppError";
import globalErrorHandler from "./controllers/errorController";
import cookieParser from "cookie-parser";

const app = express();

// 1) GLOBAL MIDDLEWARES

// Set security HTTP headers
app.use(helmet());

app.use(cookieParser());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from the same IP

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json());

// Prevent HTTP parameter pollution
app.use(hpp());

// 3) ROUTES
app.use("/api/v1/users", userRouter);
app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/households", householdRouter);
app.use("/api/v1/materials", materialRouter);
app.use("/api/v1/recoveries", recoveryRouter);
app.use("/api/v1/point-rules", pointRuleRouter);
app.use("/api/v1/wallet", walletRouter);
app.use("/api/v1/rewards", rewardRouter);
app.use("/api/v1/redemptions", redemptionRouter);

// Handle undefined routes
app.all("*splat", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
