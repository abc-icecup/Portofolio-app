import User from "../models/User.js";


// GET semua user
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE user
export const deleteUser = async (req, res) => {
  try {

    const { id } = req.params;

    await User.destroy({
      where: { id },
    });

    res.status(200).json({
      message: "User berhasil dihapus",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//UPDATE/PUT LOGIN USER (SEMENTARA)
export const updateUser = async (req, res) => {
  try {

    const { id } = req.params;

    const { username, email } = req.body;

    await User.update(
      {
        username,
        email,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      message: "User berhasil diupdate",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET PROFILE
export const getProfile = async (req, res) => {
  try {

    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email"],
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {

    const { username, email } = req.body;

    const user = await User.findByPk(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    user.username = username;
    user.email = email;

    await user.save();

    res.status(200).json({
      message: "Profile berhasil diupdate",

      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};