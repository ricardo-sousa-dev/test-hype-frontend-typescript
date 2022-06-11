import React, { useEffect, useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router';
import HeaderSearchBar from './HeaderSearchBar';
import HomeCardProduct from '../cards/CardProduct';
import './css/HeaderHome.css';
import { FaCartArrowDown } from "react-icons/fa";

function HeaderHome() {

  const navigate = useNavigate();
  const { resultSearchBar, setResultSearchBar, quantityCart, setQuantityCart, setSelectedFavorite, selectedFavorite } = useContext(Context);
  let localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));

  useEffect(() => {
    if (localStorageCart) {
      setQuantityCart(localStorageCart.length);
    }
  }, [ localStorageCart, setQuantityCart ]);

  const clearSearch = (page) => {
    setResultSearchBar([]);
    navigate(page);
    setSelectedFavorite(!selectedFavorite)  
    document.getElementById('favorites').checked = false;
  }

  return (
    <>
      <div className="header">
        <button onClick={() => clearSearch('/')} type="button" className="button-logo">
          <span className="logo" data-testid="logo">Acme Inc.</span>
        </button>
          <HeaderSearchBar />
        <button onClick={() => clearSearch('/cart')} type='button' className="button-cart">
          <div className="container-quantity-cart">
            {localStorageCart && localStorageCart.length !== 0 ? <div className="quantity-products-cart">
              {quantityCart}
            </div> : null}
          </div>
          <FaCartArrowDown className="fa-shopping-cart" data-testid="cart-button" />
        </button>
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
