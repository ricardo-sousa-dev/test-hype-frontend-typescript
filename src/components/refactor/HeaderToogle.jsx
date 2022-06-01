import React, { useContext, useState, useEffect } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-singelee.jpeg';
import { SearchBar } from '../index';
import '../css/Header.css';
import HomeCardProduct from '../HomeCardProduct';

function Header() {
  const { resultSearchBar } = useContext(Context);

  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];

  const [ quantityProductsInCart, setQuantityProductsInCart ] = useState(0);

  useEffect(() => {
    setQuantityProductsInCart(localStorageCart.length);
  }, [ quantityProductsInCart, setQuantityProductsInCart, localStorageCart ]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <img src={Logo} alt="Logo Singelee" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="container-quantity-cart-toggler">
            <span className="navbar-toggler-icon" />
            {quantityProductsInCart !== 0
              ? <div className="quantity-products-cart">
                {quantityProductsInCart}
              </div>
              : null}
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active">
                <span className="link-menu nav-link">Home</span>
              </li>
            </Link>
            <Link to="/onde-encontrar">
              <li className="nav-item">
                <span className="link-menu nav-link">Onde encontrar</span>
              </li>
            </Link>
          </ul>
          <div className="div-search-cart">
            <SearchBar />
          </div>
          <div className="div-cart-button">
            <div className="div-icon-button">
              <Link to="/cart" type="button" className="button-cart">
                <i className="fas fa-shopping-cart pr-2" />
              </Link>
            </div>
            <div className="container-quantity-cart">
              {quantityProductsInCart !== 0 ? <div className="quantity-products-cart">
                {quantityProductsInCart}
              </div> : null}
            </div>
          </div>
        </div>
      </nav>
      {resultSearchBar.length > 0 ? (
        <div className="cards">
          {resultSearchBar.map((product) => (
            <HomeCardProduct key={product.ean} product={product} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
