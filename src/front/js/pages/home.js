import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Classic Black Hoodie",
      price: 79,
      img: "https://images.unsplash.com/photo-1618354691417-dc6e5f47b2b6?q=80&w=1200"
    },
    {
      id: 2,
      name: "Minimal White T-Shirt",
      price: 39,
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 129,
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200"
    },
    {
      id: 4,
      name: "Oversized Blazer",
      price: 149,
      img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200"
    }
  ];

  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1>Modern Essentials</h1>
        <p>Elevated everyday fashion designed for confidence and comfort.</p>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <p className="fw-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
