import express, { Request, Response } from "express";

import userRouter from "./routes/userRoutes";

const app = express();

// 1) GLOBAL MIDDLEWARES
app.use(express.json());

// 3) ROUTES
app.use("/api/v1/users", userRouter);

export default app;
