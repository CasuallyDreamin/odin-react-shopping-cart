import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext";
import "./styles/RegisterPage.css";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Call register from AuthContext
    register(form.username, form.email, form.password);
    navigate("/"); // redirect after successful registration
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create an Account</h2>

        {error && <p className="error-msg">{error}</p>}

        <form className="register-form" onSubmit={handleRegister}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Register</button>
        </form>

        <div className="register-footer">
          Already have an account? <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
