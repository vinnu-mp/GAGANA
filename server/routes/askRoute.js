import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.json({ reply: "No prompt received." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({ reply: "Gemini API key missing." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 1️⃣ FIRST: Ask Gemini if this is space-related
    const classifyPrompt = `
You are a classifier. Determine if the following question is about SPACE, ASTRONOMY, COSMOLOGY, NASA, ISRO, SPACECRAFT, or any scientific topic related to the universe.

Respond ONLY with:
- "YES" if it is space related.
- "NO" if not.

Question: "${prompt}"
    `;

    const classifyResult = await model.generateContent(classifyPrompt);
    const classifyText = classifyResult.response.text().trim().toUpperCase();

    console.log("Classification:", classifyText);

    if (!classifyText.includes("YES")) {
      return res.json({
        reply: "Please ask only space-related questions 🌌",
      });
    }

    // 2️⃣ SECOND: Now ask the full question
    const answerResult = await model.generateContent(prompt);
    const answerText = answerResult.response.text();

    return res.json({ reply: answerText });
  } catch (error) {
    console.error("AI Error:", error);
    return res.json({ reply: "AI is unavailable at the moment." });
  }
});

export default router;
