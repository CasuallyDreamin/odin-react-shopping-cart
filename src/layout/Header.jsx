import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import userIcon from "../assets/user-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext";
import "./styles/Header.css";

export default function Header({ onSidebarToggle }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthClick = () => {
    if (user) {
      // User is logged in → go to profile
      navigate("/auth/profile");
    } else {
      // Show login modal
      setShowLogin(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    setShowLogin(false);
    setUsername("");
    setPassword("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onSidebarToggle}>
          <img src={menuIcon} alt="☰" />
        </button>
        <div className="logo">CARTLY</div>
      </div>

      <form className="header-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img src={searchIcon} alt="Search" />
        </button>
      </form>

      <div className="header-right">
        <button className="auth-btn" onClick={handleAuthClick}>
          <img src={userIcon} alt="User" />
        </button>

        <Link to="/cart">
          <button className="cart-btn" aria-label="Cart">
            <img src={cartIcon} alt="🛒" />
          </button>
        </Link>
      </div>

      {/* Login Modal */}
      {showLogin && !user && (
        <div className="login-modal">
          <div className="login-overlay" onClick={() => setShowLogin(false)} />
          <div className="login-content">
            <h2>Login</h2>
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
              <div className="login-buttons">
                <button type="submit" className="login-submit">
                  Login
                </button>
                <button
                  type="button"
                  className="login-cancel"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
              Don't have an account? <Link to="/auth/register" onClick={() => setShowLogin(false)}>Register</Link>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
