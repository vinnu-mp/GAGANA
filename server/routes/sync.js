import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/sync-signup", async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body);

    const user = new User(req.body);
    await user.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
