import React from 'react';

const fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

function CartItem({ item, onChangeQty, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-controls">
        <button onClick={() => onChangeQty(item.id, item.quantity - 1)}>-</button>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onChangeQty(item.id, Number(e.target.value))}
        />
        <button onClick={() => onChangeQty(item.id, item.quantity + 1)}>+</button>
        <div className="cart-item-price">{fmt.format(item.price * item.quantity)}</div>
        <button className="remove" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default function Cart({ items, onChangeQty, onRemove, onClear }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="empty">Your cart is empty.</div>
      ) : (
        <div>
          <div className="cart-list">
            {items.map((it) => (
              <CartItem key={it.id} item={it} onChangeQty={onChangeQty} onRemove={onRemove} />
            ))}
          </div>
          <div className="cart-summary">
            <div className="subtotal">Subtotal: {fmt.format(subtotal)}</div>
            <div className="cart-actions">
              <button onClick={onClear}>Clear cart</button>
              <button onClick={() => alert('Checkout placeholder')}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
