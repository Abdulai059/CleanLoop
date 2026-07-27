import express, { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  protect,
  refresh,
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
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/signup", singUp);
router.post("/login", login);

router.post("/refresh", refresh);
router.post("/logout", logout);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword", resetPassword);

router.patch("/updatePassword", protect, updatePassword);

router.route("/updateMe").patch(protect, updateMe);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
