import React from 'react';

function CartEmpt() {
  return (
    <div className="cartEmpty">
      <i className="fas fa-box-open" />
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    </div>
  );
}

export default CartEmpt;
