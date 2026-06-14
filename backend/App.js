import dotenv from "dotenv";
// Mengonfigurasi dotenv di baris paling atas agar semua file di bawahnya bisa membaca file .env dengan aman
dotenv.config();

import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import User from "./models/User.js";
import "./models/index.js";
import path from "path";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import certificatesRoutes from "./routes/certificatesRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES CONFIGURATION
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/profile", profileRoutes);
app.use("/certificates", certificatesRoutes);
app.use("/skills", skillsRoutes);
app.use("/projects", projectRoutes);

// UPLOAD FILE
app.use("/uploads", express.static("uploads"));

// TEST API
app.get("/", (req, res) => {
  res.send("API is running...");
});

// DATABASE AUTHENTICATION
sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

// SYNC DATABASE  
sequelize.sync()
  .then(() => console.log("Table created"))
  .catch(err => console.log(err));

/* SERVER CONFIGURATION
  Menggunakan fallback || 5000 sebagai cadangan jika file .env belum terbaca sempurna 
*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});