import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const user = await User.findOne({ email });

    console.log("USER FOUND:", !!user);

    if (user) {
      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      console.log("MATCH:", isMatch);

      if (isMatch) {
        return res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id),
        });
      }
    }

    return res.status(401).json({
      message: "Invalid email or password",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};