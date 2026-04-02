import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import { books } from './data'
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id);
    if( dupeItem ){
      setCart(cart.map(item => {
        if(item.id === dupeItem.id){
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }
  }

  function changeQuantity(book, newQuantity) {
    setCart(cart.map(item => {
      if(item.id === book.id){
        return {
          ...item,
          quantity: +newQuantity,
        }
      }
      else {
        return item
      }
    }))
  }

  function removeItem(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id"  element={<BookInfo books={books} addToCart={addToCart}/>}/>
          <Route path="/cart"  element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//Minute 17:04 on add to cart