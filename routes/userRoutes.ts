import express from "express";
import { login, singUp } from "../controllers/authController";
import {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/signup", singUp);
router.post("/login", login);

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUser).delete(deleteUser);

export default router;
