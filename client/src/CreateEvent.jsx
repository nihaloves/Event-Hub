import { useState } from "react";
import API from "./api/axios";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
    maxParticipants: 100,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createEvent = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post("/events", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Event Created Successfully!");

      setForm({
        title: "",
        description: "",
        date: "",
        location: "",
        category: "",
        maxParticipants: 100,
      });
    } catch (err) {
      console.log(err);
      alert("Failed to create event");
    }
  };

  return (
    <div className="card">
      <h2>Create Event</h2>

      <input
        name="title"
        placeholder="Event Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      
      <input
        type="number"
        name="maxParticipants"
        placeholder="Max Participants"
        value={form.maxParticipants}
        onChange={handleChange}
      />

      <button onClick={createEvent}>
        Create Event
      </button>
    </div>
  );
}