import React, { useEffect, useContext } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import HomeCardProduct from '../home/CardProduct';
import '../../css/HeaderGeneric.css';
import { FaCartArrowDown, FaArrowLeft } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const { resultSearchBar, quantityCart, setQuantityCart, setResultSearchBar } = useContext(Context);

  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const currentPage = window.location.pathname.substring(1, 5);

  useEffect(() => {
    setQuantityCart(localStorageCart.length);
  }, [ localStorageCart ]);

  const clearSearch = ()=> {
    setResultSearchBar([]);
    navigate('/cart');
  }

  return (
    <>
      <div className="header">
        <Link to="/">  <FaArrowLeft className="fa-return" style={{ fill: '#fff', cursor: 'pointer', fontSize: '30px', marginRight: '10px' }}/>  </Link>
        {currentPage === "prod" ?
          <span className="name-page">Detalhes do Produto</span> :
          <span className="name-page">Carrinho de Compras</span>}
        <button onClick={clearSearch} type="button" className="button-cart">
            <div className="container-quantity-cart">
              {localStorageCart.length !== 0 ? <div className="quantity-products-cart">
                {quantityCart}
              </div> : null}
            </div>
              <FaCartArrowDown className="fa-shopping-cart" />
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

export default Header;
