import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home, ProductPage, Cart, Checkout } from './pages';
import Provider from '../src/context/Provider';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
