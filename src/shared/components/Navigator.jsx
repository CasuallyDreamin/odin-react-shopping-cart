import { useState } from "react";
import "./styles/Navigator.css";

export default function Navigator() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => setCategoriesOpen((prev) => !prev);

  return (
    <nav className="navigator">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Shop</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">About</li>

        {/* Categories with nested items */}
        <li className="nav-item categories">
          <button className="category-toggle" onClick={toggleCategories}>
            Categories
            <span className="toggle-arrow">{categoriesOpen ? "▲" : "▼"}</span>
          </button>
          <ul className={`nested-list ${categoriesOpen ? "open" : ""}`}>
            <li className="nested-item">Electronics</li>
            <li className="nested-item">Clothing</li>
            <li className="nested-item">Home & Kitchen</li>
            <li className="nested-item">Books</li>
            <li className="nested-item">Gaming</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
