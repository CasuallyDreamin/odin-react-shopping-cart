import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./styles/MainLayout.css";

export default function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app">
      <Header onSidebarToggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />

      {isSidebarOpen && (
        <div className="sidebar-overlay active" onClick={closeSidebar}></div>
      )}

      <main onClick={closeSidebar}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
