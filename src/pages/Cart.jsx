import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Footer from '../components/Footer';
import HomeCardProduct from '../components/home/HomeCardProduct';
import Header from '../components/header/Header';
import { CartListProducts, CartEmpt, CartShipping} from '../components';
import CheckoutPaymentMethod from '../components/cart/CartPaymentMethod';
import { Breadcrumb } from 'react-bootstrap';
import { FaCreditCard } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import '../css/Cart.css';

function Cart() {
  // const { totalCart, database } = useContext(Context);
  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];

  return (
    <>
      <Header />
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Carrinho de Compras</Breadcrumb.Item>
      </Breadcrumb>
      {localStorageCart.length > 0 ?
        <div className="cart-container">
          <div className="cart-products">
            <CartListProducts />
          </div>
          <div className="cart-finalize-payment">
            <CartShipping />
            <hr />
            <CheckoutPaymentMethod />
            <hr />
            {/* <h2 className="cart-total">Total: R$ {totalCart}</h2> */}
            <Link type="button" to="/checkout" className="go-to-checkout">
              <FaCreditCard />
              <span className="text-button">Finalizar Compra</span>
            </Link>
            <Link type="button" to="/" className="go-to-shopping">
              <i className="fas fa-shopping-bag" />
              <span>Continuar comprando</span>
            </Link>
          </div>
          <div className="div-other-products">
            <h3>Veja outros produtos</h3>
            {/* <div className="other-products">
              {database.products.map((product) =>
                product.categories.some((cat) => cat === 'Para presente') ? (
                  <HomeCardProduct key={product.ean} product={product} />
                ) : null,
              )}
            </div> */}
          </div>
        </div> : <CartEmpt />}
      <Footer />
    </>
  );
}

export default Cart;
