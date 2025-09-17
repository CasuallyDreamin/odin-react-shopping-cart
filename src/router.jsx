import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // wraps the "main" app
    children: [
      { index: true, element: <HomePage /> }, // default route
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      // add products, cart, checkout, etc. later
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />, // separate layout for login/register
    children: [
      // e.g. { path: "login", element: <LoginPage /> },
      // e.g. { path: "register", element: <RegisterPage /> }
    ],
  },
  
]);
