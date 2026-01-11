import { useState } from "react";

function CampusComplaintForm() {
  const [photo, setPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Animated Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full -z-10 animate-glow" />

      {/* Form Card with slide-up + fade-in */}
      <div className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-10 shadow-xl animate-slideup-fade">
        <h1 className="text-3xl font-black mb-2 text-center animate-pulse-slow">
          Campus Complaint Form
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Your complaint will remain <span className="text-blue-500 animate-pulse">100% anonymous</span>
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

          {/* Complaint Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Complaint Category</label>
            <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                               focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                               focus:scale-105 focus:shadow-lg
                               transition-all duration-300">
              <option>Select category</option>
              <option>Infrastructure / Facilities</option>
              <option>Classroom / Labs</option>
              <option>Staff / Faculty Issue</option>
              <option>Events / Activities</option>
              <option>Other</option>
            </select>
          </div>

          {/* Campus Location / Building */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Campus Building / Area</label>
              <input
                type="text"
                placeholder="e.g. Science Block / Library"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                           focus:scale-105 focus:shadow-lg
                           transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Room / Lab Number (optional)</label>
              <input
                type="text"
                placeholder="e.g. Lab 301"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                           focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                           focus:scale-105 focus:shadow-lg
                           transition-all duration-300"
              />
            </div>
          </div>

          {/* Date of Incident */}
          <div>
            <label className="block text-sm font-medium mb-2">Date of Incident</label>
            <input
              type="date"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         focus:scale-105 focus:shadow-lg
                         transition-all duration-300"
            />
          </div>

          {/* Complaint Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Describe Your Complaint</label>
            <textarea
              rows="5"
              placeholder="Write your issue in detail..."
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         focus:scale-105 focus:shadow-lg
                         transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Additional Details */}
          <div>
            <label className="block text-sm font-medium mb-2">Additional Details (optional)</label>
            <textarea
              rows="3"
              placeholder="Any other info you want to add..."
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500
                         focus:scale-105 focus:shadow-lg
                         transition-all duration-300 resize-none"
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
                         focus:scale-105 focus:shadow-lg
                         transition-all duration-300"
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

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes slideup-fade {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideup-fade {
          animation: slideup-fade 0.8s ease forwards;
        }

        @keyframes glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }

        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein {
          animation: fadein 0.5s ease forwards;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>

    </div>
  );
}

export default CampusComplaintForm;
