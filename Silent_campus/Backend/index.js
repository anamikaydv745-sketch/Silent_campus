import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Complaint from "./models/Complaint.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ✅ POST complaint
app.post("/api/complaints", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const newComplaint = new Complaint({
      complaintId: "CMP" + Date.now(),
      ...req.body
    });

    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    console.error("REAL ERROR 👉", err);
    res.status(400).json({ error: err.message });
  }
});

// app.post("/api/test", (req, res) => {
//   console.log("TEST BODY 👉", req.body);
//   res.status(200).json({ message: "Test route works!", data: req.body });
// });


// ✅ GET complaints
app.get("/api/complaints", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch complaints" });
  }
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.error(err));

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000 🔥");
});
