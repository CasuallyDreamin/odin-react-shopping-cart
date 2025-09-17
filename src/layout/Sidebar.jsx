import "./styles/Sidebar.css";
import Navigator from "../shared/components/Navigator";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Navigator />
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Home & Kitchen</li>
        </ul>
      </div>
    </aside>
  );
}
