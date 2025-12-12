import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.json({ reply: "No prompt received." });

    // If no key, return helpful fallback so front-end doesn't break
    if (!process.env.GEMINI_API_KEY) {
      // small canned response to keep UX smooth while you configure key
      return res.json({
        reply:
          "Gemini API key not set on server. Set GEMINI_API_KEY in server/.env to enable AI. Meanwhile, here's a sample: Mars is the fourth planet from the Sun...",
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);

    // safe guard for different response shapes
    const text = result?.response?.text?.() ?? result?.text ?? String(result);

    res.json({ reply: text });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(200).json({ reply: "AI is unavailable at the moment." });
  }
});

export default router;
