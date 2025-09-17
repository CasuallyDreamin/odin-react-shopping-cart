import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="app">
      <Header onSidebarToggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main onClick={() => isSidebarOpen && setSidebarOpen(false)}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
