import React, { useContext } from 'react';
import Context from '../context/Context';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../css/ProductPage.css';
import HeaderGeneric from '../components/header/HeaderGeneric';
import SelectQuantityProduct from '../components/CardSelectQuantityProduct';
import { FaCartArrowDown, FaCreditCard } from "react-icons/fa"; //https://react-icons.github.io/react-icons/icons?name=fa
import formatCoin from '../utils/formatCoin';

function ProductPage() {
  const { viewProductDetails } = useContext(Context);
  const product = JSON.parse(localStorage.getItem('viewProductDetails')) || viewProductDetails;

  return (
    <>
      <HeaderGeneric />
      <div className="product-page">
        <div className="route-page">
          <a href="/" className="route-link">Home</a>
          <span>/</span>
          <a className="route-link-current">Carrinho de Compras</a>
        </div>
        <div className="container-details">
          <div className='details'>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h1 className="product-detail-name">{product.name}</h1>
              <h4 className="product-description">{product.description}</h4>
              <h3 className="product-price">{formatCoin(product.price)}</h3>
              <h6 className="product-avaliable">Estoque disponível</h6>
              <hr />
              <h6 className="add-cart">Adicionar ao Carrinho</h6>
              <SelectQuantityProduct key={product.name} product={product}
              />
              <div className="buttons">

              <Link type="button" to="/cart" className="go-to-cart">
                <span className="text-button">
                  <FaCreditCard style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                  Ver carrinho de compras
                </span>
              </Link>
              <Link type="button" to="/" className="go-to-shopping">
                <span className="text-button">
                  <FaCartArrowDown style={{ fill: '#fff', cursor: 'pointer', fontSize: '20px', marginRight: '10px' }} />
                  Continuar comprando
                </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
