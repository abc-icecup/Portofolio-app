import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // simpan user
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User berhasil didaftarkan",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // cari user berdasarkan email
    const user = await User.findOne({
      where: { email },
    });

    // jika user tidak ada
    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    // cek password
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    // jika password salah
    if (!validPassword) {
      return res.status(400).json({
        message: "Password salah",
      });
    }

    // generate token JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login berhasil",
      token,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};