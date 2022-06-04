import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import { CartListProducts, CartEmpt, CartShipping } from '../components';
import CheckoutPaymentMethod from '../components/cart/CartPaymentMethod';
import { FaCartArrowDown, FaCreditCard } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import '../css/Cart.css';


function Cart() {
  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const totalCartStorage = localStorage.getItem('totalCart') || 0;

  const { totalCart } = useContext(Context);

  return (
    <div className="cart">
      <Header />
      <div className="route-page">
        <a href="/" className="route-link">Home</a>
        <span>/</span>
        <a className="route-link-current">Carrinho de Compras</a>
      </div>
      {localStorageCart.length > 0 ?
        <div className="cart-container">
          <div className="cart-products">
            <CartListProducts />
          </div>
          <div className="cart-finalize-payment">
            <CartShipping />
            <CheckoutPaymentMethod />
            <h2 className="cart-total">Total: {totalCart || totalCartStorage}</h2>
            <Link type="button" to="/checkout" className="go-to-checkout">
              <span className="text-button">
                <FaCreditCard style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                Finalizar Compra
              </span>
            </Link>
            <a type="button" to="/" className="go-to-shopping">
              <span className="text-button">
                <FaCartArrowDown style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                Continuar comprando
              </span>
            </a>
          </div>
        </div> : <CartEmpt />}
      <Footer />
    </div>
  );
}

export default Cart;
