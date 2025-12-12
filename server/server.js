import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import askRoute from "./routes/askRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Vite default origin

app.get("/", (req, res) => res.send("GAGANA Backend running 🚀"));

app.use("/api/ask", askRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
