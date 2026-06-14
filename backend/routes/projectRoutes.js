import express from "express";

import verifyToken from "../middleware/authMiddleware.js";

import uploadProject from "../middleware/uploadProjects.js";

import {
  addProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  uploadProject.array(
    "images",
    5
  ),
  addProject
);

export default router;