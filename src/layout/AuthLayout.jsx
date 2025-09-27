// src/layout/AuthLayout.jsx
import { Outlet, Link } from "react-router-dom";
import "./styles/AuthLayout.css";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <Link to="/">
          <button className="back-btn">← Back to Home</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
