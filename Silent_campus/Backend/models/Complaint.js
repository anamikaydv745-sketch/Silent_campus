import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    category: {
      type: String, // Hostel / Campus / Mess
      required: true,
    },
    subCategory: {
      type: String, // Mess / Library / Washroom / Room
      required: true,
    },
    complaintType: String,
    messName: String,
    mealType: String,
    incidentDate: String,
    description: {
      type: String,
      required: true,
    },
    additionalDetails: String,
    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
