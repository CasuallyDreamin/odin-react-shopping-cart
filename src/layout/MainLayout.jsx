import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet /> {/* Pages render here */}
      </main>
      <Footer />
    </div>
  );
}
