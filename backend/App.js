import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import User from "./models/User.js";
import "./models/index.js";
import dotenv from "dotenv";
import path from "path";

//ROUTES
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import certificatesRoutes from "./routes/certificatesRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/profile", profileRoutes);
app.use("/certificates", certificatesRoutes);

//UPLOAD FILE
app.use("/uploads", express.static("uploads"));

//TEST API
app.get("/", (req, res) => {
  res.send("API is running...");
});


sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

// SYNC DATABASE  
sequelize.sync()
  .then(() => console.log("Table created"))
  .catch(err => console.log(err));

//SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
