import { useState } from "react";
import API from "./api/axios.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
  console.log("ERROR:", err.response?.data);
}
  };

  return (
    <div className="card">
  <h2>Login</h2>

  
  <input
    placeholder="Enter email"
    onChange={(e) => setEmail(e.target.value)}
  />

 
  <input
    type="password"
    placeholder="Enter password"
    onChange={(e) => setPassword(e.target.value)}
  />

  <button onClick={handleLogin}>
    Login
  </button>
</div>
  );
}