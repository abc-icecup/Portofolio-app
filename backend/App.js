import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import User from "./models/User.js";
import dotenv from "dotenv";

//ROUTES
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

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
