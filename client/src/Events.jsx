import { useEffect, useState } from "react";
import API from "./api/axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  const registerEvent = async (eventId) => {
    console.log("Registering:", eventId);
    try {
      
      const token = localStorage.getItem("token");

      await API.post(
        "/registrations",
        { eventId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Registered Successfully!");
    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await API.get("/events");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="card">
      <h2>Events</h2>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((ev) => (
          <div className="event-card" key={ev._id}>
            <h3>{ev.title}</h3>

            <p>{ev.description}</p>

            <p>📍 {ev.location}</p>

            <p>
              📅 {new Date(ev.date).toLocaleDateString()}
            </p>

            <p>🏷️ {ev.category}</p>

            <p>👥 Max Participants: {ev.maxParticipants}</p>

            <button
              onClick={() => registerEvent(ev._id)}
            >
              Register
            </button>
          </div>
        ))
      )}
    </div>
  );
}