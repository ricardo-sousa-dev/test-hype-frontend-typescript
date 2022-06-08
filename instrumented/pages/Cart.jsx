import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { CartPaymentMethod, CartListProducts, CartEmpt, CartShipping, Footer, HeaderGeneric } from '../components';
import { FaCartArrowDown, FaCreditCard } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import './css/Cart.css';


function Cart() {
  const navigate = useNavigate();
  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const totalCartStorage = localStorage.getItem('totalCart') || 0;

  const { totalCart } = useContext(Context);

  const [ paymentMethod, setPaymentMethod ] = useState('pix');
  const [ shippingMethod ] = useState('correios');

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
    total: totalCartStorage,
    products: localStorageCart,
  }

  const goCheckout = () => {
    navigate('/checkout', { state: { sale } });
  }

  return (
    <div className="cart">
      <HeaderGeneric />
      <div className="route-page">
        <Link to="/" className="route-link">Home</Link>
        <span>/</span>
        <span className="route-link-current">Carrinho de Compras</span>
      </div>
      {localStorageCart.length > 0 ?
        <div className="cart-container">
          <div className="cart-products">
            <CartListProducts />
          </div>
          <div className="cart-finalize-payment">
            <CartShipping />
            <CartPaymentMethod method={setPaymentMethod} />
            <h2 className="cart-total">Total: {totalCart || 0}</h2>
            <button type="button" onClick={() => goCheckout()} className="go-to-cart">
              <span className="text-button">
                <FaCreditCard style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                Finalizar Compra
              </span>
            </button>
            <Link type="button" to="/" className="go-to-shopping">
              <span className="text-button">
                <FaCartArrowDown style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                Continuar comprando
              </span>
            </Link>
          </div>
        </div> : <CartEmpt />}
      <Footer />
    </div>
  );
}

export default Cart;
