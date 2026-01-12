import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    category: String,
    hostel: String,
    room: String,
    date: String,
    description: String,
    additional: String,
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
