import React, { useState, useEffect, useMemo, useContext } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import HeaderSearchBar from './HeaderSearchBar';
import HomeCardProduct from '../home/CardProduct';
import '../../css/HeaderHome.css';
import { FaCartArrowDown } from "react-icons/fa";

function HeaderHome() {
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
        <div className="div-search">
          <HeaderSearchBar />
        </div>
        <Link to="/cart" type="button" className="button-cart">
          <div className="container-quantity-cart">
            {localStorageCart.length !== 0 ? <div className="quantity-products-cart">
              {quantityCart}
            </div> : null}
          </div>
          <FaCartArrowDown className="fa-shopping-cart" />
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

export default HeaderHome;
