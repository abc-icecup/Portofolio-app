import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet"; 
import rateLimit from "express-rate-limit"; 
import sequelize from "./config/database.js";
import User from "./models/User.js";
import "./models/index.js";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import certificatesRoutes from "./routes/certificatesRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

if (process.env.NODE_ENV === 'test') {
  sequelize.sync({ force: false }).catch(() => {});
}

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: {
    message: "Terlalu banyak permintaan dari IP ini, silakan coba lagi nanti."
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

if (process.env.NODE_ENV !== 'test') {
  app.use(limiter);
}

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/profile", profileRoutes);
app.use("/certificates", certificatesRoutes);
app.use("/skills", skillsRoutes);
app.use("/projects", projectRoutes);

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

if (process.env.NODE_ENV !== 'test') {
  sequelize.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error: " + err));

  sequelize.sync()
    .then(() => console.log("Table created"))
    .catch(err => console.log(err));
}

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;