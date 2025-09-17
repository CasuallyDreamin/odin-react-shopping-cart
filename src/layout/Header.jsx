// src/layout/Header.jsx
import { useState } from "react";
import "./styles/Header.css";
import menuIcon from "../assets/menu-icon.svg";
import cartIcon from "../assets/cart-icon.svg";

export default function Header({ onSidebarToggle }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchTerm); // placeholder
  };

  return (
    <header className="header">
      {/* Left section: logo + sidebar toggle */}
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onSidebarToggle}>
          <img src={menuIcon} alt="☰"></img>
        </button>
        <div className="logo">ShopLogo</div>
      </div>

      {/* Middle section: search bar */}
      <form className="header-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Right section: auth buttons + cart */}
      <div className="header-right">
        <button className="auth-btn">Login</button>
        <button className="auth-btn">Register</button>
        <button className="cart-btn" aria-label="Cart">
          <img src={cartIcon} alt="🛒" />
        </button>
      </div>
    </header>
  );
}
