import { useState } from "react";
import axios from "axios";

function MessComplaintForm() {
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    category: "Hostel",
    subCategory: "Mess",
    complaintType: "",
    messName: "",
    mealType: "",
    incidentDate: "",
    description: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append all form fields
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      // Append photo if selected
      if (photo) {
        data.append("photo", photo);
      }

      await axios.post("http://localhost:5000/api/complaints", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Mess complaint submitted successfully ✅");

      // Reset form
      setFormData({
        category: "Hostel",
        subCategory: "Mess",
        complaintType: "",
        messName: "",
        mealType: "",
        incidentDate: "",
        description: "",
        additionalDetails: "",
      });
      setPhoto(null);
    } catch (err) {
      console.error(err);
      alert("Error submitting complaint ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-green-600/20 blur-[160px] rounded-full -z-10 animate-glow" />

      <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-10 shadow-xl animate-slideup-fade">
        <h1 className="text-3xl font-black mb-2 text-center animate-pulse-slow">
          Mess Complaint Form
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Your complaint will remain{" "}
          <span className="text-green-500 animate-pulse">100% anonymous</span>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Complaint Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Complaint Type
            </label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            >
              <option value="">Select type</option>
              <option value="Food Quality">Food Quality</option>
              <option value="Hygiene / Cleanliness">Hygiene / Cleanliness</option>
              <option value="Meal Timing">Meal Timing</option>
              <option value="Service Staff">Service Staff</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Mess Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Mess / Hall Name</label>
            <input
              name="messName"
              value={formData.messName}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Aryabhatta Mess"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
          </div>

          {/* Meal Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Meal Type</label>
            <select
              name="mealType"
              value={formData.mealType}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            >
              <option value="">Select meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snacks / Other">Snacks / Other</option>
            </select>
          </div>

          {/* Incident Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Date of Incident</label>
            <input
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              type="date"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Describe Your Complaint</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Write your issue in detail..."
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm font-medium mb-2">Additional Details (optional)</label>
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
              rows="3"
              placeholder="Any other info you want to add..."
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Photo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-gray-200 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
            {photo && <p className="mt-2 text-sm text-green-400 animate-fadein">Selected: {photo.name}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-all
                       text-white font-semibold py-3 rounded-xl text-lg shadow-lg
                       hover:scale-105 active:scale-95 animate-pulse-slow"
          >
            Take Action
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessComplaintForm;
