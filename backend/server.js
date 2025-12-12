const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

let storedOTP = "";

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  storedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP",
      text: `Your OTP is: ${storedOTP}`,
    });

    res.json({ message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ error: "OTP failed to send" });
  }
});

app.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === storedOTP) return res.json({ success: true });
  res.json({ success: false });
});

app.listen(5000, () => console.log("OTP server running on port 5000"));
