import express from "express";
import cors from "cors";
import sequelize from "./config/database.js";
import User from "./models/User.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

sequelize.sync()
  .then(() => console.log("Table created"))
  .catch(err => console.log(err));


