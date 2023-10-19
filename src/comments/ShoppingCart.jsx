import React from 'react';

function ShoppingCart({ cartItems }) {
  const cartQuantity = cartItems.length;

  return (
    <div className="shopping-cart">
      <span  class="material-symbols-outlined">
shopping_cart
</span>
      <h3>Shopping Cart</h3>
      <p>Items in Cart: {cartQuantity}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
