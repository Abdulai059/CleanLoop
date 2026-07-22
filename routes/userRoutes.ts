import express from "express";
import { singUp } from "../controllers/authController";

const router = express.Router();

router.post("/signup", singUp);
// router.post('/login', login)

export default router;
