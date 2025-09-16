// controllers/authController.js
import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ message: "User already exists here apply loginn" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully here now" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

