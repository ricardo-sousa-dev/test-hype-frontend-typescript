import React, { useState, useEffect, useMemo, useContext } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import HeaderSearchBar from '../../components/header/HeaderSearchBar';
import HomeCardProduct from '../../components/home/HomeCardProduct';
import '../../css/Header.css';
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const { resultSearchBar, quantityCart, setQuantityCart } = useContext(Context);

  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];

  useEffect(() => {
    setQuantityCart(localStorageCart.length);
  }, [ localStorageCart ]);

  return (
    <>
      <div className="header">
        <Link to="/">
          <span className="logo">Acme Inc.</span>
        </Link>
        <div className="div-search-cart">
          <HeaderSearchBar />
        </div>
        <Link to="/cart" type="button" className="button-cart">
          <div className="div-cart-button">
            <div className="div-icon-button">
              <FaCartArrowDown className="fa-shopping-cart" />
            </div>
            <div className="container-quantity-cart">
              {localStorageCart.length !== 0 ? <div className="quantity-products-cart">
                {quantityCart}
              </div> : null}
            </div>
          </div>
        </Link>
      </div>
      {resultSearchBar.length > 0 ? (
        <div className="cards">
          {resultSearchBar.map((product) => (
            <HomeCardProduct key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Header;
