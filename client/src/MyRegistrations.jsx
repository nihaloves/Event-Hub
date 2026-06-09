import { useEffect, useState } from "react";
import API from "./api/axios";

export default function MyRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/registrations/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRegistrations(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const cancelRegistration = async (registrationId) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/registrations/${registrationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Registration cancelled successfully");

      fetchRegistrations();
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
          "Failed to cancel registration"
      );
    }
  };

  return (
    <div className="card">
      <h2>My Registrations</h2>

      {registrations.length === 0 ? (
        <p>No registrations found.</p>
      ) : (
        registrations
  .filter((reg) => reg.event)
  .map((reg) => (
    <div
      className="event-card"
      key={reg._id}
    >
      <h3>{reg.event.title}</h3>

      <p>{reg.event.description}</p>

      <button
        onClick={() =>
          cancelRegistration(reg._id)
        }
      >
        Cancel Registration
      </button>
    </div>
  ))
)}
</div>
  );
}