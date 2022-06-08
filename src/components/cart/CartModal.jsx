import React, { useContext, useRef } from 'react';
import Context from '../../context/Context';
import './css/CartModal.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { BiExit } from "react-icons/bi";

function CartModal() {
  const ref = useRef()
  const { showModalCart, setShowModalCart } = useContext(Context);

  useOnClickOutside(ref, () => setShowModalCart(false));

  return (
    <div className="cart-offCanvas" show={showModalCart}>
      <div
        ref={ref}
        animation={false}
        className="cart-offCanvas-content">
        <div
          className="cart-offCanvas-content-header">
          <button variant="secondary" onClick={() => setShowModalCart(false)}>
            <BiExit className="cart-offCanvas-content-header-close"/>
          </button>
        </div>
        <div className="cart-offCanvas-content-header-title">
          <h1>Carrinho de Compras</h1>
        </div>
        <div className="cart-offCanvas-body" >
          <p>offCanvas body</p>
        </div>
      </div>
    </div>
  );
}

export default CartModal;