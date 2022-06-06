import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HeaderGeneric, Footer } from '../components';
import './css/Checkout.css';

function Checkout() {
  const { state } = useLocation();
  const { sale } = state || {};

  const downloadFile = async () => {
    const fileName = "resultado-desafio-ricardo-sousa";
    const json = JSON.stringify(state);
    const blob = new Blob([ json ], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
        <button onClick={downloadFile}>Download</button>
      </div>
      <span className="obrigado">
      Obrigado pela oportunidade!
      </span>
      <Footer />
    </div>
  );
}

export default Checkout;