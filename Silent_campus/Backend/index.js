import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Complaint from "./models/Complaint.js";

dotenv.config();

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "https://silent-campus.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json()); // ✅ ONLY JSON

app.post("/api/complaints", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json({ message: "Complaint saved", complaint });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/complaints", async (req, res) => {
  const complaints = await Complaint.find().sort({ createdAt: -1 });
  res.json(complaints);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(console.error);

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});

