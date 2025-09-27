// src/shared/components/CartToast.jsx
import { useEffect } from "react";
import "./styles/CartToast.css";

export default function CartToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // auto close after 2s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="cart-toast">
      {message}
    </div>
  );
}
