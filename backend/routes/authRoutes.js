import express from "express";
import { body } from "express-validator"; 

import {
  register,
  login,
} from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/register", 
  [
    body("username")
      .trim()
      .notEmpty().withMessage("Username wajib diisi")
      .escape(), 
    body("email")
      .isEmail().withMessage("Format email tidak valid"), 
    body("password")
      .isLength({ min: 6 }).withMessage("Password minimal harus 6 karakter")
  ],
  register
);

router.post("/login", login);

export default router;