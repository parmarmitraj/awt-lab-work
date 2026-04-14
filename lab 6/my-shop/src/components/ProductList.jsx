import React from 'react';

const fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

export default function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} className="product-item">
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.description}</div>
            </div>
            <div className="product-actions">
              <div className="product-price">{fmt.format(p.price)}</div>
              <button onClick={() => onAdd(p)}>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
