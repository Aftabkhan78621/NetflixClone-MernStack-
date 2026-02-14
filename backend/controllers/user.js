// 3. step

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password);

    // check it user exist or not
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "Invalid userData",
        success: false,
      });
    }

    // exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "Account create successFully.",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//  login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // jb ek bhi glt ho tb
    if (!email || !password) {
      return res.status(400).json({
        message: "email,Password error",
        success: false,
      });
    }

    //
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
        success: false,
      });
    }
    //  ab check krenge ki mongodb ka hashed password or is email ka password same h ya nhi
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
        success: false,
      });
    }

    //  ab match ho jata h to
    const token = jwt.sign(
      { userId: user._id }, // ✅ object payload
      process.env.JWT,
      { expiresIn: "1d" },
    );
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true }) // localhost ke liye })
      .json({
        message: `welcome back ${user.fullName}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log("Login error", error.message);
  }
};

// logout

export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logedOut successfully",
      success: true,
    });
};
