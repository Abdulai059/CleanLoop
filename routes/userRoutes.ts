import express, { Router } from "express";
import {
  forgotPassword,
  login,
  protect,
  resetPassword,
  singUp,
  updatePassword,
} from "../controllers/authController";
import {
  getAllUsers,
  createUser,
  getUser,
  updateMe,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/signup", singUp);
router.post("/login", login);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword", resetPassword);

router.patch("/updatePassword", protect, updatePassword);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateMe).delete(deleteUser);

export default router;
