import express from "express";
import {
  forgotPassword,
  login,
  logout,
  protect,
  refresh,
  resetPassword,
  restrictTo,
  singUp,
  updatePassword,
} from "../controllers/authController";
import {
  assignRole,
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

// Assign role to user (SUPER_ADMIN only)
router.post("/assign-role", protect, restrictTo("SUPER_ADMIN"), assignRole);

export default router;
