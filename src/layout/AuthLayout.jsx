// src/layout/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <h1>Auth Area</h1>
      <Outlet />
    </div>
  );
}
