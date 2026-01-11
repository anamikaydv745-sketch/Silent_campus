import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

function RaiseComplaint() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full -z-10" />

      {/* Top branding */}
      <div className="flex items-center justify-center gap-2 pt-20 mb-14">
        <Shield className="text-red-600 w-9 h-9" strokeWidth={2.5} />
        <h1 className="text-3xl font-bold tracking-tight">
          Silent <span className="text-red-600">Campus</span>
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Choose Complaint Category
        </h2>

        <p className="text-gray-400 max-w-xl mb-14 text-lg">
          Select the category that best describes your issue.  
          Your identity will remain completely anonymous.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">

          {/* Hostel */}
          <div className="group cursor-pointer bg-[#111] border border-white/5 
                          rounded-3xl p-10 text-center
                          hover:border-red-500/30 transition-all
                          hover:scale-[1.03]">
            <div className="text-5xl mb-6">🏨</div>
            <h3 className="text-2xl font-bold mb-3">Hostel Related</h3>
            <p className="text-gray-500 text-sm">
              Room, water, electricity, cleanliness, warden issues
            </p>
            <button 
            onClick={()=> navigate("/Hostel")}
            className="mt-6 px-6 py-2 bg-red-600/20 text-red-600 
                               rounded-full text-sm font-medium
                               hover:bg-red-600/30 transition">
              Take Action
            </button>
          </div>

          {/* Campus */}
          <div className="group cursor-pointer bg-[#111] border border-white/5 
                          rounded-3xl p-10 text-center
                          hover:border-orange-500/30 transition-all
                          hover:scale-[1.03]">
            <div className="text-5xl mb-6">🏫</div>
            <h3 className="text-2xl font-bold mb-3">Campus Related</h3>
            <p className="text-gray-500 text-sm">
              Infrastructure, security, classrooms, administration
            </p>
             <button 
            onClick={()=> navigate("/Campus")}
            className="mt-6 px-6 py-2 bg-red-600/20 text-red-600 
                               rounded-full text-sm font-medium
                               hover:bg-red-600/30 transition">
              Take Action
            </button>
          </div>

          {/* Mess */}
          <div className="group cursor-pointer bg-[#111] border border-white/5 
                          rounded-3xl p-10 text-center
                          hover:border-red-500/30 transition-all
                          hover:scale-[1.03]">
            <div className="text-5xl mb-6">🍽️</div>
            <h3 className="text-2xl font-bold mb-3">Mess Related</h3>
            <p className="text-gray-500 text-sm">
              Food quality, hygiene, menu, staff behavior
            </p>

            <button 
            onClick={()=> navigate("/Mess")}
            className="mt-6 px-6 py-2 bg-red-600/20 text-red-600 
                               rounded-full text-sm font-medium
                               hover:bg-red-600/30 transition">
              Take Action
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RaiseComplaint;
