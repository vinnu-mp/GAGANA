import express from "express";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import User from "../models/User.js";

const router = express.Router();

// 📧 Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

/* ================= SIGNUP ================= */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({ message: "Saved to DB" });
});


    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "GAGANA OTP Verification",
      text: `Your OTP is ${otp}`,
    });

    res.status(201).json({ message: "OTP sent to email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

/* ================= VERIFY OTP ================= */
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  if (user.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  user.isVerified = true;
  user.otp = "";
  await user.save();

  res.json({ message: "OTP verified" });
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  if (!user.isVerified)
    return res.status(403).json({ message: "Verify OTP first" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  res.json({ message: "Login successful" });
});

export default router;
