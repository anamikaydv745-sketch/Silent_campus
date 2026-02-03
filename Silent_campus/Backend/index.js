import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Complaint from "./models/Complaint.js";
import connectDB from "./db.js";

dotenv.config();

const app = express();

// ✅ CORS
app.use(
  cors({
    origin: "https://silent-campus.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Connect DB BEFORE routes
await connectDB();

// ✅ Routes
app.post("/api/complaints", async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json({ message: "Complaint saved", complaint });
  } catch (err) {
    console.error("Save error:", err);
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/complaints", async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Render port fix
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
