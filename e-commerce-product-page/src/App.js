import { useState } from 'react';
import './App.css';
import MainBlock from './components/MainBlock';
import Menu from './components/Menu';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);


  const addToCart = (count) => {
    if (count === 0) return;
    setCartItems([
      {
        id: 1,
        title: "Fall Limited Edition Sneakers",
        price: 125,
        count: count,
        image: require("./images/image-product-1-thumbnail.jpg")
      }
    ])
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const handleCheckout = () => {
    setIsCartOpen(false);       
    setCartItems([]);           
    setIsCheckoutOpen(true);   
  };

  return (
    <div className="App">
      <menu>
        <Menu toggleCart={() => setIsCartOpen(!isCartOpen)} />
      </menu>
      <section className='main-section'>
        <MainBlock addToCart={addToCart} />
      </section>
      {isCartOpen && <CartModal items={cartItems} onRemove={removeFromCart} onCheckout={handleCheckout} />}
      {isCheckoutOpen && (
        <CheckoutModal onClose={() => setIsCheckoutOpen(false)} />
      )}

    </div>
  );
}

export default App;
