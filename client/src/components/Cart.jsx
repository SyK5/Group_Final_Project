// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, total }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
