import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, ProductPage, Cart, Checkout} from './pages';
import Provider from '../src/context/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/product/:id" component={ ProductPage } />
          <Route path="/checkout" component={ Checkout } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
