import "./styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to CARTLY</h1>
        <p>The Online Shop with the cheesiest name ever!</p>
        <button className="cta-btn" >Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Replace with dynamic product cards later */}
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
        </div>
      </section>

      {/* Optional About / Info Section */}
      <section className="home-about">
        <h2>About Us</h2>
        <p>We provide the best shopping experience for all your needs.</p>
      </section>
    </div>
  );
}
