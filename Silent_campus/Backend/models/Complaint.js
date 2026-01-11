import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    hostel: {
      type: String,
      required: true
    },
    room: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
