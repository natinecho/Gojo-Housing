import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Password hashing
    const hashPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    console.log("New user created:", newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log("Request Body:", req.body);
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Generate JWT token and set cookie
    const age = 1000 * 60 * 60 * 24 * 7; // 7 days in milliseconds
    const token = jwt.sign(
      { id: user.id, isAdmin: true },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // sameSite: "none",
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = (req, res) => {
  // Implement logout functionality if needed
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
