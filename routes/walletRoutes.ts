import express from "express";
import * as walletController from "../controllers/walletController";
import { protect } from "../controllers/authController";

const router = express.Router();

router.get("/", protect, walletController.getMyWallet);
router.get("/transactions", protect, walletController.getMyTransactions);

export default router;
