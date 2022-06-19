import React, { useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { AiOutlineClear } from "react-icons/ai"; //https://react-icons.github.io
import './css/ClearCartButton.css';

function ClearCartButton() {
  const { setTotalCart } = useContext(Context);

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  const clearCart = () => {
    localStorage.setItem('cartProducts', JSON.stringify([]));
    setTotalCart(0);
  }

  return localStorageCart && localStorageCart.length > 0 ?
    <button
      className="clear-cart-button"
      type="button"
      onClick={clearCart}
    >
      <AiOutlineClear className="clear-cart-button-icon" />
      <span>Limpar carrinho</span>
    </button> : null;

};


export default ClearCartButton;
