import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    category: {
      type: String, // Hostel / Mess / Campus
      required: true,
    },
    subCategory: {
      type: String, // Room Issue / Infrastructure / Mess etc
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    additionalDetails: String,

    // optional fields (used by different forms)
    hostel: String,
    room: String,
    buildingName: String,
    roomNumber: String,
    incidentDate: String,

    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
