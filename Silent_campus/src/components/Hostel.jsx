import { useState } from "react";

function HostelComplaintForm() {
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [additional, setAdditional] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("category", category);
      formData.append("hostel", hostel);
      formData.append("room", room);
      formData.append("date", date);
      formData.append("description", description);
      formData.append("additional", additional);
      if (photo) formData.append("photo", photo);

    //   const res = await fetch("http://localhost:5000/api/complaints", {
    //     method: "POST",
    //     body: formData, // FormData automatically sets correct headers
    //   });

    fetch("http://localhost:5000/api/complaints", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});


      const result = await res.json();
      alert(`Complaint Submitted! ID: ${result.complaintId}`);

      // Reset form
      setCategory("");
      setHostel("");
      setRoom("");
      setDate("");
      setDescription("");
      setAdditional("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert("Failed to submit complaint.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[160px] rounded-full -z-10 animate-glow" />

      {/* Form Card */}
      <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-10 shadow-xl animate-slideup-fade">
        <h1 className="text-3xl font-black mb-2 text-center animate-pulse-slow">
          Hostel Complaint Form
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Your complaint will remain <span className="text-red-500 animate-pulse">100% anonymous</span>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Complaint Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            >
              <option value="">Select category</option>
              <option value="Room Issue">Room Issue</option>
              <option value="Water / Electricity">Water / Electricity</option>
              <option value="Cleanliness">Cleanliness</option>
              <option value="Warden Issue">Warden Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Hostel + Room */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Hostel Name</label>
              <input
                type="text"
                placeholder="e.g. Aryabhatta Hostel"
                value={hostel}
                onChange={(e) => setHostel(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                           focus:scale-105 focus:shadow-lg transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Room Number (optional)</label>
              <input
                type="text"
                placeholder="e.g. B-204"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                           focus:scale-105 focus:shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Date of Incident</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Describe Your Complaint</label>
            <textarea
              rows="5"
              placeholder="Write your issue in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm font-medium mb-2">Additional Details (optional)</label>
            <textarea
              rows="3"
              placeholder="Any other info you want to add..."
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium mb-2">Upload Photo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-gray-200 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500
                         focus:scale-105 focus:shadow-lg transition-all duration-300"
            />
            {photo && <p className="mt-2 text-sm text-green-400 animate-fadein">Selected: {photo.name}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition-all
                       text-white font-semibold py-3 rounded-xl text-lg shadow-lg
                       hover:scale-105 active:scale-95 animate-pulse-slow"
          >
            Take Action
          </button>
        </form>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes slideup-fade {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideup-fade { animation: slideup-fade 0.8s ease forwards; }

        @keyframes glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
        .animate-glow { animation: glow 6s ease-in-out infinite; }

        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 0.5s ease forwards; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
      `}</style>
    </div>
  );
}

export default HostelComplaintForm;
