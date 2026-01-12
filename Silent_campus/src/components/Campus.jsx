import { useState } from "react";
import axios from "axios";

function CampusComplaintForm() {
  const [photo, setPhoto] = useState(null); // UI ke liye only

  const [formData, setFormData] = useState({
    category: "Campus",
    subCategory: "",
    buildingName: "",
    roomNumber: "",
    incidentDate: "",
    description: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // frontend validation
    if (!formData.subCategory || !formData.description) {
      alert("Please select complaint category and write description");
      return;
    }

    try {
      // ✅ ONLY JSON (backend supports this)
      await axios.post(
        "http://localhost:5000/api/complaints",
        {
          category: formData.category,
          subCategory: formData.subCategory,
          description: formData.description,
          additionalDetails: formData.additionalDetails,
          buildingName: formData.buildingName,
          roomNumber: formData.roomNumber,
          incidentDate: formData.incidentDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Campus complaint submitted successfully ✅");

      // reset form
      setFormData({
        category: "Campus",
        subCategory: "",
        buildingName: "",
        roomNumber: "",
        incidentDate: "",
        description: "",
        additionalDetails: "",
      });

      setPhoto(null);
    } catch (error) {
      console.error("SUBMIT ERROR 👉", error.response?.data || error.message);
      alert("Error submitting complaint ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full -z-10 animate-glow" />

      <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-10 shadow-xl animate-slideup-fade">
        <h1 className="text-3xl font-black mb-2 text-center animate-pulse-slow">
          Campus Complaint Form
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Your complaint will remain{" "}
          <span className="text-blue-500 animate-pulse">100% anonymous</span>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Complaint Category */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Complaint Category *
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         transition-all duration-300"
            >
              <option value="">Select category</option>
              <option value="Infrastructure / Facilities">
                Infrastructure / Facilities
              </option>
              <option value="Classroom / Labs">Classroom / Labs</option>
              <option value="Staff / Faculty Issue">
                Staff / Faculty Issue
              </option>
              <option value="Events / Activities">
                Events / Activities
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Building / Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="buildingName"
              value={formData.buildingName}
              onChange={handleChange}
              placeholder="Building / Area"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
            />

            <input
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              placeholder="Room / Lab No (optional)"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
            />
          </div>

          {/* Date */}
          <input
            type="date"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Describe your issue..."
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 resize-none"
          />

          {/* Additional */}
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            rows="3"
            placeholder="Additional details (optional)"
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 resize-none"
          />

          {/* Photo (UI SAME, backend ignore karega) */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full text-gray-200 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all
                       text-white font-semibold py-3 rounded-xl text-lg"
          >
            Take Action
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes slideup-fade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideup-fade { animation: slideup-fade 0.8s ease forwards; }

          @keyframes glow {
            0%,100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
          .animate-glow { animation: glow 6s infinite; }

          @keyframes pulse-slow {
            0%,100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-slow { animation: pulse-slow 2s infinite; }
        `}
      </style>
    </div>
  );
}

export default CampusComplaintForm;
