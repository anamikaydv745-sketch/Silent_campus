import express from "express";
import Complaint from "../models/Complaint.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();

    res.status(201).json({
      message: "Complaint submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
