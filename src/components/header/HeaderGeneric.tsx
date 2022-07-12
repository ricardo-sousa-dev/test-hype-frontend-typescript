import React, { useEffect, useContext, useMemo } from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import HomeCardProduct from '../cards/CardProduct';
import { IProduct } from '../../interfaces';
import './css/HeaderGeneric.css';
import { FaCartArrowDown, FaArrowLeft } from "react-icons/fa";

function Header() {
  type Products = IProduct[];

  const navigate = useNavigate();
  const { resultSearchBar, quantityCart, setQuantityCart, setResultSearchBar } = useContext(Context);

  const localStorageCart: Products = useMemo(() => localStorage.getItem('cartProducts') ? JSON.parse(localStorage.cartProducts) : [], []);
  const currentPage = window.location.pathname.substring(1, 5);

  useEffect(() => {
    if (localStorageCart) {
      setQuantityCart(localStorageCart.length);
    }
  }, [ localStorageCart, setQuantityCart ]);

  const clearSearch = () => {
    setResultSearchBar([]);
    navigate('/cart');
  }

  return (
    <>
      <div className="header">
        <button onClick={ () => navigate(-1) } className="button-previous">  <FaArrowLeft className="fa-return" style={ { fill: '#fff', cursor: 'pointer', fontSize: '30px', marginRight: '10px' } } data-testid="button-previous" />  </button>
        { currentPage === "prod" ? <span className="name-page">Detalhes do Produto</span> : null }
        { currentPage === "cart" ? <span className="name-page">Carrinho de Compras</span> : null }
        { currentPage === "chec" ? <span className="name-page">Checkout</span> : null }
        <button onClick={ clearSearch } type="button" className="button-cart">
          <div className="container-quantity-cart">
            { localStorageCart && localStorageCart.length !== 0 ? <div className="quantity-products-cart">
              { quantityCart }
            </div> : null }
          </div>
          <FaCartArrowDown className="fa-shopping-cart" />
        </button>
      </div>
      { resultSearchBar.length > 0 ? (
        <div className="cards">
          { resultSearchBar.map((product: IProduct) => (
            <HomeCardProduct key={ product.id } product={ product } />
          )) }
        </div>
      ) : null }
    </>
  );
}

export default Header;
