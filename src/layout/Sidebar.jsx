import "./styles/Sidebar.css";
import Navigator from "../shared/components/Navigator";
import searchIcon from "../assets/search-icon.svg";
import { useState } from "react";

export default function Sidebar({ isOpen, cartItems = [], onSidebarToggle }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search: ${searchTerm}`);
  };

  const handleQuantityChange = (id, qty) => {
    console.log(`Update item ${id} quantity to ${qty}`);
  };

  const handleRemoveItem = (id) => {
    console.log(`Remove item ${id}`);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Mobile search bar */}
        <form className="sidebar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} alt="Q"></img>
          </button>
        </form>

        {/* Navigator */}
        <Navigator className="navigator" />

        {/* Categories */}
        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home & Kitchen</li>
            <li>Books</li>
            <li>Gaming</li>
          </ul>
        </div>

        {/* Shopping Cart pinned to bottom */}
        <div className="sidebar-cart">
          <h3>Shopping Cart</h3>
          <ul className="cart-items">
            {cartItems.length === 0 && <li>No items in cart</li>}
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="item-name">{item.name}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => handleRemoveItem(item.id)}>X</button>
              </li>
            ))}
          </ul>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">Total: ${total.toFixed(2)}</div>
              <button className="finish-btn">Finish Shopping</button>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onSidebarToggle}
      />
    </>
  );
}
