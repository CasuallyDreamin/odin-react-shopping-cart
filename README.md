# Cartly – Modern E-Commerce Web App

Cartly is a sleek, dark-themed e-commerce web application built with **React** and **React Router**, featuring a dynamic shop, user authentication, and a responsive design. It allows users to browse products, filter and search, manage a cart, register/login, and view their profile and purchase history.

---

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Technologies](#technologies)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Available Scripts](#available-scripts)
* [Future Improvements](#future-improvements)

---

## Demo

*(Optional: Add a screenshot or GIF of the app here)*

---

## Features

### Shop & Products

* Browse products by category
* Filter by price, brand, color, availability
* Sort products by price or name
* Search functionality integrated into the shop page
* Responsive product grid

### Cart & Checkout

* Add products to the cart
* Dynamic cart modal with toast notifications
* Simple checkout workflow (mocked)

### Authentication

* Register and login using a simple AuthContext
* Auth-protected profile page
* Automatic redirection to profile if logged in

### Profile

* Display username and mock purchase history
* Log out button
* Neatly formatted purchase table

### Layout & Design

* Dark theme with a custom color palette
* Responsive layouts for mobile and desktop
* Smooth transitions and clean UI components

---

## Technologies

* **Frontend:** React, React Router v6
* **State Management:** React Context (CartContext, AuthContext)
* **Styling:** CSS variables, custom dark theme, responsive design
* **Utilities:** useState, useEffect, custom hooks for cart & auth

---

## Project Structure

```
.
├── App.css
├── assets
│   ├── cart-icon.svg
│   ├── login-icon.svg
│   ├── menu-icon.svg
│   ├── react.svg
│   ├── search-icon.svg
│   └── user-icon.svg
├── features
│   ├── auth
│   ├── cart
│   ├── checkout
│   └── products
├── index.css
├── layout
│   ├── AuthLayout.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MainLayout.jsx
│   ├── Sidebar.jsx
│   └── styles
├── main.jsx
├── pages
│   ├── AboutPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── ProfilePage.jsx
│   ├── RegisterPage.jsx
│   ├── ShopPage.jsx
│   └── styles
├── router.jsx
└── shared
    ├── components
    ├── context
    ├── hooks
    └── utils
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cartly.git
cd cartly
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at `http://localhost:3000` to see the app.

---

## Available Scripts

* `npm start` – Run the development server
* `npm run build` – Build the app for production
* `npm test` – Run tests (if implemented)
* `npm run lint` – Lint the codebase (if configured)

---

## Future Improvements

* Integrate a backend API for real products and authentication
* Persistent cart storage (localStorage or database)
* Payment gateway integration
* Improved UI animations and micro-interactions
* Multi-language support
* Unit and integration tests

---

## License

MIT License © 2025 Your Name

---

> Built with ❤️ by CasuallyDreamin
