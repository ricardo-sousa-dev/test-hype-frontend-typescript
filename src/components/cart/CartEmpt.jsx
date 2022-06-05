import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import './css/CartEmpty.css';

function CartEmpt() {
  return (
    <div className="cart-empty">
      <div className="div-icon-empty">
      <p data-testid="cart-empty-message">Seu carrinho está vazio!</p>
        <FaCartArrowDown className="fa-cart-empty" />
      </div>
    </div>
  );
}

export default CartEmpt;
