// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext";
import "./styles/LoginPage.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/"); // redirect after login
  };

  return (
    <div className="login-page">
      <h2>Log In to Your Account</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <p className="login-footer">
        Don't have an account? <a href="/auth/register">Register here</a>
      </p>
    </div>
  );
}
