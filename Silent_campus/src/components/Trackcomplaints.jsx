import { useEffect, useState } from "react";
import axios from "axios";

function TrackComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/complaints") // backend URL
      .then((res) => {
        setComplaints(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching complaints:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading complaints...</p>;

  // Separate complaints by category
  const hostelComplaints = complaints.filter((c) => c.category === "Hostel");
  const messComplaints = complaints.filter((c) => c.category === "Mess");
  const campusComplaints = complaints.filter((c) => c.category === "Campus");

  // Status color mapping
  const statusColor = {
    pending: "#f44336",      // red
    "in-progress": "#ff9800", // orange
    resolved: "#4caf50",      // green
  };

  // Progress steps
  const statusSteps = ["pending", "in-progress", "resolved"];

  // Render one complaint card
  const ComplaintCard = ({ complaint }) => (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h3 style={{ margin: 0, marginBottom: "8px" }}>{complaint.complaintType || complaint.subCategory}</h3>
      <p style={{ margin: "4px 0" }}><strong>Description:</strong> {complaint.description}</p>
      {complaint.messName && <p style={{ margin: "4px 0" }}><strong>Mess:</strong> {complaint.messName}</p>}
      {complaint.mealType && <p style={{ margin: "4px 0" }}><strong>Meal:</strong> {complaint.mealType}</p>}
      <p style={{ margin: "4px 0" }}><strong>Submitted:</strong> {new Date(complaint.createdAt).toLocaleString()}</p>

      {/* Progress tracker */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
        {statusSteps.map((step, index) => (
          <div key={index} style={{ textAlign: "center", flex: 1, position: "relative" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                margin: "0 auto",
                background:
                  statusSteps.indexOf(complaint.status) >= index
                    ? statusColor[step]
                    : "#ddd",
              }}
            ></div>
            <span style={{ fontSize: "12px", color: "#555", marginTop: "4px", display: "block" }}>{step}</span>

            {index < statusSteps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "50%",
                  height: "4px",
                  width: "100%",
                  background:
                    statusSteps.indexOf(complaint.status) > index
                      ? statusColor[step]
                      : "#ddd",
                  zIndex: -1,
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      <h1 style={{ marginBottom: "24px" }}>Track Your Complaints</h1>

      {/* Hostel */}
      {hostelComplaints.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ borderBottom: "2px solid #2196f3", paddingBottom: "4px", color: "#2196f3" }}>Hostel Complaints</h2>
          {hostelComplaints.map((c) => (
            <ComplaintCard key={c._id} complaint={c} />
          ))}
        </div>
      )}

      {/* Mess */}
      {messComplaints.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ borderBottom: "2px solid #ff9800", paddingBottom: "4px", color: "#ff9800" }}>Mess Complaints</h2>
          {messComplaints.map((c) => (
            <ComplaintCard key={c._id} complaint={c} />
          ))}
        </div>
      )}

      {/* Campus */}
      {campusComplaints.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ borderBottom: "2px solid #4caf50", paddingBottom: "4px", color: "#4caf50" }}>Campus Complaints</h2>
          {campusComplaints.map((c) => (
            <ComplaintCard key={c._id} complaint={c} />
          ))}
        </div>
      )}

      {hostelComplaints.length + messComplaints.length + campusComplaints.length === 0 && (
        <p>No complaints submitted yet.</p>
      )}
    </div>
  );
}

export default TrackComplaints;
