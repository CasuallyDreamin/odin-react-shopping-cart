import { useCart } from "../shared/hooks/useCart";
import { Link } from "react-router-dom";
import "./styles/CartPage.css";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="cart-page p-6">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="item-actions">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, e.target.value)}
                  />
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">Total: ${total.toFixed(2)}</div>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
