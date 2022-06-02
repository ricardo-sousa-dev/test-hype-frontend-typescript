import React, { useState, useEffect, useMemo, useContext} from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-hype.png';
import HeaderSearchBar from '../../components/header/HeaderSearchBar';
import HomeCardProduct from '../../components/home/HomeCardProduct';
import '../../css/Header.css';
import { FaCartArrowDown } from "react-icons/fa";

function Header() {
  const { resultSearchBar } = useContext(Context);

  let localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')) || [],[]);

  const [ quantityProductsInCart, setQuantityProductsInCart ] = useState(0);

  useEffect(() => {
    setQuantityProductsInCart(localStorageCart.length);
  }, [ quantityProductsInCart, setQuantityProductsInCart, localStorageCart ]);

  return (
    <>
    <div className="header">
      <Link to="/">
        <span className="logo">Acme Inc.</span>
      </Link>
      <div className="div-search-cart">
        <HeaderSearchBar />
      </div>
      <div className="div-cart-button">
        <div className="div-icon-button">
          <Link to="/cart" type="button" className="button-cart">
          <FaCartArrowDown className="fa-shopping-cart"/>
          </Link>
        </div>
        <div className="container-quantity-cart">
          {quantityProductsInCart !== 0 ? <div className="quantity-products-cart">
            {quantityProductsInCart}
          </div> : null}
        </div>
      </div>
      </div>
      {resultSearchBar.length > 0 ? (
        <div className="cards">
          {resultSearchBar.map((product) => (
            <HomeCardProduct key={product.ean} product={product} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Header;
