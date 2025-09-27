import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navigator.css";

export default function Navigator({ onNavigate }) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const toggleCategories = () => setCategoriesOpen((prev) => !prev);

  return (
    <nav className="navigator">
      <ul className="nav-list">
        <Link to="/" onClick={onNavigate} className="nav-item">
          Home
        </Link>
        <Link to="/shop" onClick={onNavigate} className="nav-item">
          Shop
        </Link>
        <Link to="/contact" onClick={onNavigate} className="nav-item">
          Contact Us
        </Link>
        <Link to="/about" onClick={onNavigate} className="nav-item">
          About
        </Link>

        {/* Categories */}
        <li className="nav-item categories">
          <button className="category-toggle" onClick={toggleCategories}>
            Categories
            <span className="toggle-arrow">{categoriesOpen ? "▲" : "▼"}</span>
          </button>
          <ul className={`nested-list ${categoriesOpen ? "open" : ""}`}>
            <Link
              to="/shop?category=electronics"
              onClick={onNavigate}
              className="nested-item"
            >
              Electronics
            </Link>
            <Link
              to="/shop?category=clothing"
              onClick={onNavigate}
              className="nested-item"
            >
              Clothing
            </Link>
            <Link
              to="/shop?category=home-kitchen"
              onClick={onNavigate}
              className="nested-item"
            >
              Home & Kitchen
            </Link>
            <Link
              to="/shop?category=books"
              onClick={onNavigate}
              className="nested-item"
            >
              Books
            </Link>
            <Link
              to="/shop?category=gaming"
              onClick={onNavigate}
              className="nested-item"
            >
              Gaming
            </Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
