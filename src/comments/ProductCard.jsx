import React from 'react';


function ProductCard({ product, onAddToCart, onRemoveFromCart, isInCart }) {
 
  return (
   
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;
