import Navigator from "../shared/components/Navigator";
import searchIcon from "../assets/search-icon.svg";
import { useCart } from "../shared/hooks/useCart";
import { useState } from "react";
import "./styles/Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  // Hook to lift search term to ShopPage (later)
  const handleSearch = (e) => {
    e.preventDefault();
    // Currently just logs, you can connect to context later
    console.log("Search term:", searchTerm);
    onClose(); // Close sidebar after search
  };

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
            <img src={searchIcon} alt="Search" />
          </button>
        </form>

        {/* Navigator → pass down onClose */}
        <Navigator className="navigator" onNavigate={onClose} />

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
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
                <span className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">Total: ${total.toFixed(2)}</div>
              <button className="finish-btn" onClick={() => console.log("Go to cart")}>
                Finish Shopping
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />
    </>
  );
}
