import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import askRoute from "./routes/askRoute.js";
import nodemailer from "nodemailer";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Vite default origin

app.get("/", (req, res) => res.send("GAGANA Backend running 🚀"));

app.use("/api/ask", askRoute);
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

  if (otp === storedOTP) {
    return res.json({ success: true });
  }

  res.json({ success: false });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
