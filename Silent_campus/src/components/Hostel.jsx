import { useState } from "react";

function HostelComplaintForm() {
  const [photo, setPhoto] = useState(null);
  const [complaintType, setComplaintType] = useState(""); // 👈 renamed (UI same)
  const [hostel, setHostel] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [additional, setAdditional] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Required validation
    if (!complaintType || !hostel || !description) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ THIS MATCHES YOUR BACKEND SCHEMA
    const data = {
      category: "Hostel",                 // ✅ FIXED
      subCategory: complaintType,          // ✅ REQUIRED FIELD
      hostel,
      room,
      incidentDate: date,                  // ✅ name aligned
      description,
      additionalDetails: additional,       // ✅ name aligned
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Server Error:", result);
        throw new Error(result.error || "Submission failed");
      }

      alert("Complaint submitted successfully ✅");

      // reset
      setComplaintType("");
      setHostel("");
      setRoom("");
      setDate("");
      setDescription("");
      setAdditional("");
      setPhoto(null);

    } catch (error) {
      console.error("ERROR:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-10">

        <h1 className="text-3xl font-black mb-6 text-center">
          Hostel Complaint Form
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Complaint Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Complaint Category *
            </label>
            <select
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
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
            <input
              placeholder="Hostel Name *"
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
            />

            <input
              placeholder="Room Number"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
            />
          </div>

          {/* Date */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
          />

          {/* Description */}
          <textarea
            rows="5"
            placeholder="Describe your issue *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
          />

          {/* Additional */}
          <textarea
            rows="3"
            placeholder="Additional details"
            value={additional}
            onChange={(e) => setAdditional(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
          >
            Take Action
          </button>
        </form>
      </div>
    </div>
  );
}

export default HostelComplaintForm;
