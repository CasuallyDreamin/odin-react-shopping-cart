import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../shared/hooks/useCart";
import "./styles/ShopPage.css";

export default function ShopPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category") || "";
  const searchTermFromQuery = queryParams.get("search")?.toLowerCase() || ""; // Added
  const { addToCart } = useCart();

  const productsData = [
    { id: 1, name: "Laptop", price: 999, brand: "BrandA", color: "black", available: true, category: "electronics" },
    { id: 2, name: "T-Shirt", price: 29, brand: "BrandB", color: "white", available: false, category: "clothing" },
    { id: 3, name: "Headphones", price: 199, brand: "BrandA", color: "black", available: true, category: "electronics" },
    { id: 4, name: "Book", price: 15, brand: "BrandC", color: "blue", available: true, category: "books" },
    { id: 5, name: "Smartphone", price: 699, brand: "BrandA", color: "white", available: true, category: "electronics" },
    { id: 6, name: "Jeans", price: 49, brand: "BrandB", color: "blue", available: true, category: "clothing" },
    { id: 7, name: "Coffee Maker", price: 120, brand: "BrandC", color: "black", available: true, category: "home-kitchen" },
    { id: 8, name: "Gaming Mouse", price: 60, brand: "BrandA", color: "black", available: false, category: "gaming" },
    { id: 9, name: "Blender", price: 80, brand: "BrandC", color: "white", available: true, category: "home-kitchen" },
    { id: 10, name: "Jacket", price: 120, brand: "BrandB", color: "black", available: true, category: "clothing" },
    { id: 11, name: "Monitor", price: 250, brand: "BrandA", color: "black", available: true, category: "electronics" },
    { id: 12, name: "Notebook", price: 10, brand: "BrandC", color: "blue", available: true, category: "books" },
    { id: 13, name: "Keyboard", price: 80, brand: "BrandA", color: "white", available: true, category: "gaming" },
    { id: 14, name: "Sneakers", price: 75, brand: "BrandB", color: "white", available: true, category: "clothing" },
    { id: 15, name: "Frying Pan", price: 35, brand: "BrandC", color: "black", available: true, category: "home-kitchen" },
    { id: 16, name: "Board Game", price: 45, brand: "BrandC", color: "blue", available: true, category: "books" },
  ];

  // Filters
  const [sortBy, setSortBy] = useState("price-asc");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filtering logic
  useEffect(() => {
    let filtered = [...productsData];

    if (categoryFromQuery) filtered = filtered.filter(p => p.category === categoryFromQuery);
    if (searchTermFromQuery) {
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(searchTermFromQuery) ||
          p.brand.toLowerCase().includes(searchTermFromQuery)
      );
    }
    filtered = filtered.filter(p => p.price <= maxPrice);
    if (selectedBrands.length) filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    if (selectedColors.length) filtered = filtered.filter(p => selectedColors.includes(p.color));
    if (availableOnly) filtered = filtered.filter(p => p.available);

    switch (sortBy) {
      case "price-asc": filtered.sort((a, b) => a.price - b.price); break;
      case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
      case "name": filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }

    setFilteredProducts(filtered);
  }, [
    categoryFromQuery,
    searchTermFromQuery, // Added dependency
    sortBy,
    maxPrice,
    selectedBrands,
    selectedColors,
    availableOnly
  ]);

  return (
    <div className="shop-page">
      {/* Filters & product grid unchanged */}
      <aside className="shop-filters">
        <h2>Filters</h2>
        <label>
          Sort By
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label>
          Max Price
          <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
        </label>
        <div className="brands">
          <p>Brands</p>
          {["BrandA","BrandB","BrandC"].map(brand => (
            <label key={brand} className="filter-checkbox">
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={e => {
                  if (e.target.checked) setSelectedBrands(prev => [...prev, brand]);
                  else setSelectedBrands(prev => prev.filter(b => b !== brand));
                }}
              />
              {brand}
            </label>
          ))}
        </div>
        <div className="colors">
          <p>Colors</p>
          {["black","white","blue"].map(color => (
            <label key={color} className="filter-checkbox">
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={e => {
                  if (e.target.checked) setSelectedColors(prev => [...prev, color]);
                  else setSelectedColors(prev.filter(c => c !== color));
                }}
              />
              {color}
            </label>
          ))}
        </div>
        <label className="filter-checkbox">
          <input type="checkbox" checked={availableOnly} onChange={e => setAvailableOnly(e.target.checked)} />
          Available Only
        </label>
      </aside>

      <section className="products-grid">
        {filteredProducts.length === 0 && <p>No products match your filters.</p>}
        {filteredProducts.map(p => (
          <div key={p.id} className="product-card">
            <div className="product-image">
              <img src={`https://picsum.photos/300/200?random=${Math.random()*100}`} alt={p.name} />
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)} className="bg-primary text-bg px-3 py-1 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
