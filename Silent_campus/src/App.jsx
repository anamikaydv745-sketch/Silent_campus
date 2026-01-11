import { Routes, Route } from "react-router-dom";
import SilentCampus from "./pages/Silentcampus";
// import ComplaintType from "./pages/ComplaintType";
import RaiseComplaint from "./components/Raisecomplaints";
import Hostel from "./components/Hostel";
import Campus from "./components/Campus";
import Mess from "./components/Mess";
import Trackcomplaint from "./components/Trackcomplaints";



function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<SilentCampus />} />

      <Route path="/Raisecomplaints" element={<RaiseComplaint />} />

      <Route path="/Hostel" element={<Hostel />} />

      <Route path="/Campus" element={<Campus />} />

      <Route path="/Mess" element={<Mess />} />

      <Route path="/Trackcomplaints" element={<Trackcomplaint />} />

      {/* Complaint Category Page */}
      {/* <Route path="/complaint-type" element={<ComplaintType />} /> */}
    </Routes>
  );
}

export default App;
