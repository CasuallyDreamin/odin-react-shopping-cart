// src/pages/ProfilePage.jsx
import { useAuth } from "../shared/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles/ProfilePage.css";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Mock purchase history & settings
  const mockOrders = [
    { id: 1, item: "Laptop", date: "2025-08-01", status: "Delivered" },
    { id: 2, item: "Sneakers", date: "2025-08-10", status: "Shipped" },
    { id: 3, item: "Book", date: "2025-09-05", status: "Processing" },
  ];

  return (
    <div className="profile-page">
      <h2>Hello, {user.username}!</h2>

      <section className="profile-section">
        <h3>Account Info</h3>
        <div className="profile-info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email || "user@example.com"}</p>
          <p><strong>Member since:</strong> {user.createdAt || "2025-01-01"}</p>
        </div>
      </section>
      <div className="profile-section">
        <h3>Purchase History</h3>
        <div className="table-wrapper">
          <table className="purchase-history">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#00123</td>
                <td>2025-09-15</td>
                <td>Laptop, Mouse</td>
                <td>$1059</td>
                <td className="status delivered">Delivered</td>
              </tr>
              <tr>
                <td>#00124</td>
                <td>2025-09-20</td>
                <td>Book</td>
                <td>$15</td>
                <td className="status pending">Pending</td>
              </tr>
              <tr>
                <td>#00125</td>
                <td>2025-09-22</td>
                <td>Headphones</td>
                <td>$199</td>
                <td className="status shipped">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <section className="profile-section">
        <h3>Actions</h3>
        <button onClick={handleLogout} className="logout-btn">
          Log Out
        </button>
      </section>
    </div>
  );
}
