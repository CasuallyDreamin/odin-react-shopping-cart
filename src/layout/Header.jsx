import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import userIcon from "../assets/user-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Header.css";

export default function Header({ onSidebarToggle }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
        <button className="auth-btn">
          <img src={userIcon} alt="User" />
        </button>

        <Link to="/cart">
          <button className="cart-btn" aria-label="Cart">
            <img src={cartIcon} alt="🛒" />
          </button>
        </Link>
      </div>
    </header>
  );
}
