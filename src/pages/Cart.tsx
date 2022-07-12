import React, { useContext, useState, useMemo, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { CartPaymentMethod, CartListProducts, CartEmpt, CartShipping, Footer, HeaderGeneric, GoToButton } from '../components';
import {IProduct} from '../interfaces';

import './css/Cart.css';

function Cart() {

  type Cart = IProduct[];

  const localStorageCart:Cart = useMemo(() => localStorage.getItem('cartProducts') ? JSON.parse(localStorage.cartProducts) : [], []);

  const { totalCart } = useContext(Context);

  const [ shippingMethod ] = useState('correios');
  const [cartEmpty, setCartEmpty] = useState(true);

  const paymentMethod = useRef<string | null>(null);

  useEffect(() => {
    if (localStorageCart.length === 0) {
      setCartEmpty(false);
    }
  }, [localStorageCart]);

   const sale = {
    client: {
      name: 'Hype',
      address: 'Rua paraíso, 71',
      complement: 'travessa 15',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01452002',
      country: 'Brasil',
      phone: '+5511999999999',
      email: 'melhor_candidato@gmail.com',
    },
    paymentMethod: paymentMethod,
    shippingMethod: shippingMethod,
    total: totalCart,
    products: localStorageCart,
  }

  return (
    <div className="cart">
      <HeaderGeneric />
      <div className="route-page">
        <Link to="/" className="route-link">Home</Link>
        <span>/</span>
        <span className="route-link-current">Carrinho de Compras</span>
      </div>
      {cartEmpty?
        <div className="cart-container">
          <div className="cart-products">
            <CartListProducts />
          </div>
          <div className="cart-finalize-payment">
            <CartShipping />
            <CartPaymentMethod />
            <h2 className="cart-total">Total: {totalCart || 0}</h2>
            <GoToButton route="/checkout" title="Finalizar compra" icon="FaCreditCard" payload={sale} />
            <GoToButton route="/" title="Continuar comprando" icon="FaCartArrowDown" />
          </div>
        </div> : <CartEmpt />}
      <Footer />
    </div>
  );
}

export default Cart;
