import express from "express";
import Complaint from "../models/Complaint.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body);

    const complaint = new Complaint(req.body);
    await complaint.save();

    res.status(201).json({ message: "Complaint saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
});

export default router;
