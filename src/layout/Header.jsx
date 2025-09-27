import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import userIcon from "../assets/user-icon.svg";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header({ onSidebarToggle }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchTerm);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onSidebarToggle}>
          <img src={menuIcon} alt="☰"></img>
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
          <img src={searchIcon}></img>
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
