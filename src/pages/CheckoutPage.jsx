import { useCart } from "../shared/hooks/useCart";
import { useState } from "react";
import "./styles/CheckoutPage.css";

export default function CheckoutPage() {
  const { cartItems, total } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", form, cartItems, total);
    alert("Order placed! (mock)");
  };

  return (
    <div className="checkout-page p-6">
      <h1 className="checkout-title">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <section className="billing">
            <h2>Billing & Shipping</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP / Postal Code"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </section>

          <section className="payment">
            <h2>Payment</h2>
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </section>

          <div className="checkout-summary">
            <h3>Order Total: ${total.toFixed(2)}</h3>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
