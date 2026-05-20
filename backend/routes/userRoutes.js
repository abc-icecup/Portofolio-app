import express from "express";

import {
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";

import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();


// GET USERS
router.get("/", verifyToken, getUsers);

// PUT USERS
router.put("/:id", verifyToken, updateUser);

// DELETE USER
router.delete("/:id", verifyToken, deleteUser);

export default router;