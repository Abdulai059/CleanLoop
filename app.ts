import express, { Request, Response } from "express";

import userRouter from "./routes/userRoutes";

const app = express();

// 1) GLOBAL MIDDLEWARES

// 3) ROUTES
app.use("/api/v1/users", userRouter);

export default app;
