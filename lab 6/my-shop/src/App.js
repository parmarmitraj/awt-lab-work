import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/products';

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx === -1) return [...prev, { ...product, quantity: 1 }];
      const copy = [...prev];
      copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
      return copy;
    });
  };

  const changeQty = (id, qty) => {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, quantity: Math.max(1, qty) } : it))
        .filter((it) => it.quantity > 0)
    );
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((it) => it.id !== id));

  const clearCart = () => setCart([]);

  return (
    <div className="App app-layout">
      <header className="app-header">
        <h1>My Shop</h1>
        <p className="subtitle">A minimal shopping cart demo</p>
      </header>
      <main className="app-main">
        <ProductList products={products} onAdd={addToCart} />
        <Cart items={cart} onChangeQty={changeQty} onRemove={removeFromCart} onClear={clearCart} />
      </main>
      <footer className="app-footer">Made with plain React — demo only.</footer>
    </div>
  );
}

export default App;
