import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HeaderGeneric, Footer } from '../components';
import '../css/Checkout.css';

function Checkout() {
  const { state } = useLocation();
  const { sale } = state || {};

  return (
    <div className="checkout">
      <HeaderGeneric />

      <div className="route-page">
        <Link to="/" className="route-link">Home</Link>
        <span>/</span>
        <span className="route-link-current">Checkout</span>
      </div>
      <div className="sale">
      <h1>Resultado do Desafio</h1>
        <pre>
          {JSON.stringify(sale, null, 4)}
        </pre>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
