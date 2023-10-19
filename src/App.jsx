import React, { useState } from 'react';
import './comments/App.css';
import ProductCard from './comments/ProductCard';
import ShoppingCart from './comments/ShoppingCart';

const productData = [
  {
    id: 1,
    name: 'Fancy Product',
    description: '$40.00 - $80.00',
  },
  {
    id: 2,
    name: 'Special Item',
    description: '$20.00 $18.00',
  },
  
  {
    id: 3,
    name: 'Sale Item',
    description: '$50.00 $25.00',
  },

  {
    id: 4,
    name: 'Popular Item',
    description: '$40.00',
  },

  {
    id: 5,
    name: 'sale item',
    description: '$25.00',
  },
  {
    id: 6,
    name: 'popular item',
    description: '$45.00',
  },
  {
    id: 7,
    name: 'fancy item',
    description: '$35.00',
  },
];


function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };
  return (
   
    <div className="App">
    <div className="product-list">
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            isInCart={cartItems.some((item) => item.id === product.id)}
          />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
