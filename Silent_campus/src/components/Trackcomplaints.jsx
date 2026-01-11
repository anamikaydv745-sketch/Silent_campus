import { useNavigate } from "react-router-dom";

function TrackReports() {
  const navigate = useNavigate();

  // Dummy data (later comes from backend)
  const reports = [
    {
      id: "CMP1023",
      category: "Water Issue",
      hostel: "Aryabhatta Hostel",
      status: "In Progress",
      date: "2026-01-08",
    },
    {
      id: "CMP1024",
      category: "Cleanliness",
      hostel: "Raman Hostel",
      status: "Resolved",
      date: "2026-01-05",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">My Reports</h1>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Form
        </button>
      </div>

      {/* Reports List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-[#111] border border-white/10 rounded-2xl p-6
                       hover:border-red-500 transition-all"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-red-400">
                #{report.id}
              </span>
              <span
                className={`text-sm ${
                  report.status === "Resolved"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {report.status}
              </span>
            </div>

            <p className="text-gray-300">
              <span className="font-medium">Category:</span> {report.category}
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Hostel:</span> {report.hostel}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Submitted on {report.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackReports;
