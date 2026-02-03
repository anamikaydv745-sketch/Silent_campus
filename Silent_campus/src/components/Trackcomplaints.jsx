import { useEffect, useState } from "react";
import axios from "axios";

export default function TrackComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios
      .get("https://silent-campus.onrender.com/api/complaints")
      .then((res) => setComplaints(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ CORRECT FILTERING
  const hostel = complaints.filter(
    (c) => c.category === "Hostel" && c.subCategory !== "Mess"
  );

  const mess = complaints.filter(
    (c) => c.category === "Hostel" && c.subCategory === "Mess"
  );

  const campus = complaints.filter(
    (c) => c.category === "Campus"
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold mb-10 bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
        Track Your Complaints
      </h1>

      <Section title="Hostel Complaints" data={hostel} />
      <Section title="Mess Complaints" data={mess} />
      <Section title="Campus Complaints" data={campus} />
    </div>
  );
}

/* ---------------- SECTION ---------------- */

function Section({ title, data }) {
  if (data.length === 0) return null;

  return (
    <div className="mb-14">
      <h2 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-4">
        {title}
      </h2>

      <div className="space-y-5">
        {data.map((item) => (
          <ComplaintCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- CARD ---------------- */

function ComplaintCard({ item }) {
  const steps = ["pending", "in-progress", "resolved"];
  const activeIndex = steps.indexOf(item.status);

  return (
    <div className="bg-zinc-900 rounded-xl p-6 shadow-xl border border-zinc-800">
      <div className="flex justify-between text-sm mb-3">
        <span className="text-orange-400 font-medium">
          #{item.complaintId}
        </span>
        <span className="text-zinc-400">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>

      <p className="text-zinc-200 mb-6 leading-relaxed">
        {item.description}
      </p>

      {/* AMAZON STYLE TRACKER */}
      <div className="flex items-center justify-between relative">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            {i !== 0 && (
              <div
                className={`absolute top-3 left-[-50%] h-1 w-full ${
                  i <= activeIndex
                    ? "bg-linear-to-r from-red-600 to-orange-500"
                    : "bg-zinc-700"
                }`}
              />
            )}

            <div
              className={`w-6 h-6 rounded-full z-10 ${
                i <= activeIndex
                  ? "bg-linear-to-br from-red-600 to-orange-500"
                  : "bg-zinc-700"
              }`}
            />

            <span
              className={`mt-2 text-xs capitalize ${
                i <= activeIndex ? "text-white" : "text-zinc-500"
              }`}
            >
              {step.replace("-", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
