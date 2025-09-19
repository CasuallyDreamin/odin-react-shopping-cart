import "./styles/HomePage.css";

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$89.99",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$129.99",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49.99",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$69.99",
    image: "https://picsum.photos/300/200?random=4",
  },
];

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to CARTLY</h1>
        <p>The Online Shop with the cheesiest name ever!</p>
        <button className="cta-btn">Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home-about">
        <h2>About Us</h2>
        <p>
          At <strong>CARTLY</strong>, we’re passionate about bringing you a seamless shopping
          experience. From electronics to fashion, we carefully select products that
          combine quality and value. Our mission is to make shopping simple, fun, and
          reliable.
        </p>
        <p>
          Whether you're upgrading your wardrobe, looking for the latest gadgets, or
          just browsing for inspiration — CARTLY is here for you.
        </p>
        <a href="/about" className="about-link">Learn more about us →</a>
      </section>
    </div>
  );
}
