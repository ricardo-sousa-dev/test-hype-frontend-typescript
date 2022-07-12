import React, { useContext, useRef } from 'react';
import Context from '../../context/Context';
import './css/CartOffCanvas.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import CartListProducts from './CartListProducts';
import GoToButton from '../buttons/GoToButton';

function CartOffCanvas() {

  const ref = useRef<HTMLHeadingElement>(null)
  const { showModalCart, setShowModalCart } = useContext(Context);

  useOnClickOutside(ref, () => setShowModalCart(false));

  return ( showModalCart?
    <div className="cart-offCanvas" >
      <div
        ref={ ref }
        className="cart-offCanvas-content">
        <div
          className="cart-offCanvas-content-container">
          <div
            className="cart-offCanvas-content-header">
            <button data-testid="cart-offCanvas-close" onClick={ () => setShowModalCart(false) }>
              X
            </button>
          </div>
          <div className="cart-offCanvas-content-header-title">
            <h1>Carrinho de Compras</h1>
          </div>
          <div className="cart-offCanvas-body" >
            <CartListProducts />
          </div>
        </div>
        <GoToButton route="/cart" title="Finalizar Compra" icon="FaCreditCard" />
      </div>
    </div>: null
  );
}

export default CartOffCanvas;