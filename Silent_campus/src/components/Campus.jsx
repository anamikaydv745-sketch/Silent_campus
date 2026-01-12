import { useState } from "react";
import axios from "axios";

function CampusComplaintForm() {
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    category: "Campus",
    subCategory: "General",
    complaintType: "",
    buildingName: "",
    roomNumber: "",
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

      for (const key in formData) {
        data.append(key, formData[key]);
      }

      if (photo) data.append("photo", photo);

      await axios.post("http://localhost:5000/api/complaints", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Campus complaint submitted successfully ✅");

      // Reset form
      setFormData({
        category: "Campus",
        subCategory: "General",
        complaintType: "",
        buildingName: "",
        roomNumber: "",
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
            <label className="block text-sm font-medium mb-2">Complaint Category</label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            >
              <option value="">Select category</option>
              <option value="Infrastructure / Facilities">Infrastructure / Facilities</option>
              <option value="Classroom / Labs">Classroom / Labs</option>
              <option value="Staff / Faculty Issue">Staff / Faculty Issue</option>
              <option value="Events / Activities">Events / Activities</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Campus Building / Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Campus Building / Area</label>
              <input
                name="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Science Block / Library"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                           focus:scale-105 focus:shadow-lg transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Room / Lab Number (optional)</label>
              <input
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Lab 301"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                           focus:scale-105 focus:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Date of Incident */}
          <div>
            <label className="block text-sm font-medium mb-2">Date of Incident</label>
            <input
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              type="date"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
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
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
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
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
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
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
            {photo && <p className="mt-2 text-sm text-green-400 animate-fadein">Selected: {photo.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all
                       text-white font-semibold py-3 rounded-xl text-lg shadow-lg
                       hover:scale-105 active:scale-95 animate-pulse-slow"
          >
            Take Action
          </button>
        </form>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes slideup-fade { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-slideup-fade { animation: slideup-fade 0.8s ease forwards; }

        @keyframes glow { 0%,100%{transform: translate(-50%, -50%) scale(1);opacity:0.4;}50%{transform: translate(-50%, -50%) scale(1.2);opacity:0.6;} }
        .animate-glow { animation: glow 6s ease-in-out infinite; }

        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 0.5s ease forwards; }

        @keyframes pulse-slow { 0%,100%{opacity:1;}50%{opacity:0.6;} }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
      `}</style>
    </div>
  );
}

export default CampusComplaintForm;
