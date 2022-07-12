import React from 'react';
import './css/CartShipping.css';

function CartEmpt() {
  return (
    <div className="cart-shipping">
      <h2>Envio:</h2>
      <div className="cart-shipping-details">
        <div className="shipping-company">
          <input type="radio" name="correios" value="correios" defaultChecked />
          <label htmlFor="correios">Correios</label>
        </div>
        <div className="shipping-infos">
          <div className="shipping-timing">
            <p>Envio Padrão:</p>
            <p>5 dias úteis</p>
          </div>
          <div className="shipping-price">
            <p>R$ 20,00</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartEmpt;
