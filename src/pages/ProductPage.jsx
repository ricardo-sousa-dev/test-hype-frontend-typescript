import React, { useState, useContext, useEffect, useMemo } from 'react';
import Context from '../context/Context';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import HomeCardProduct from '../components/home/HomeCardProduct';
import Footer from '../components/Footer';
import '../css/ProductPage.css';
import Header from '../components/header/Header';
import SelectQuantityProduct from '../components/CardSelectQuantityProduct';

function ProductPage() {
  const { database } = useContext(Context);

  const [ productDetails ] = useState(
    JSON.parse(localStorage.getItem('viewProductDetails')),
  );

  let localStorageCart = useMemo(() =>JSON.parse(localStorage.getItem('cartProducts')) || [],[]);


  const [ quantityThisInCart, setQuantityThisInCart ] = useState();

  useEffect(() => {
    const productInCart = localStorageCart.find(
      (product) => product.sku === productDetails.sku,
    );
    setQuantityThisInCart(productInCart ? productInCart.quantity : 0);
  }, [ quantityThisInCart, productDetails, localStorageCart ]);

  return (
    <>
      <Header />
      {/* <div className="product-details-top">
        <Link to="/" type="button" className="return">
          <i className="fas fa-arrow-left" />
        </Link>
        <SearchBar />
        <div className="div-cart-button">
          <div className="div-icon-button">
            <Link to="/cart" type="button" className="button-cart">
              <i className="fas fa-shopping-cart pr-2" />
            </Link>
          </div>
          <div className="container-quantity-cart">
            <div className="quantity-products-cart">
              {quantityProductsInCart}
            </div>
          </div>
        </div>
      </div> */}
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{productDetails.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="container-details">
        <div className="product-details">
          <div className="product">
            {/* <ProductPageCarousel /> */}
            <div className="product-description">
              <h3>O que você precisa saber sobre este produto</h3>
              <p className="description">{productDetails.tips}</p>
              <p className="description">Validade: {productDetails.validity}</p>
              <div className="div-tags">
                {productDetails.tags.map((tag) => (
                  <p className="tags" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-product-details">
          <h1 className="product-detail-name">{productDetails.name}</h1>
          <div className="product-price-number">
            <p>R$ {productDetails.price.toFixed(2).replace('.', ',')}</p>
            <p className="description stock">Estoque disponível</p>
          </div>
          <hr />
          {/* <div className="product-shipping">
            <h3>Envio:</h3>
              <input
                type="text"
                className="product-shipping"
                placeholder="Digite seu CEP"
              />
              <button type="button">
                <span className="description">Simular</span>
              </button>
          </div>
              <hr /> */}
          <div className="product-price">
            <div className="price-add-to-cart">
              <div>
                <p className="add-cart">Adicionar ao Carrinho</p>
              </div>
              <SelectQuantityProduct
                key={productDetails.sku}
                product={productDetails}
              />
            </div>
            <div className="buttons-cart">
              <Link type="button" to="/cart" className="go-to-cart">
                <i className="fas fa-shopping-cart pr-2 cart-button" />
                <span>Ver Carrinho</span>
              </Link>
              <Link type="button" to="/" className="go-to-shopping">
                <i className="fas fa-shopping-bag"></i>
                <span>Continuar comprando</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="div-other-products">
          <h3>Outros produtos</h3>
          <div className="other-products">
            {database.products.map((product) =>
              product.ean !== productDetails.ean &&
                product.categories.some((cat) => cat === 'Para presente') ? (
                <HomeCardProduct key={product.ean} product={product} />
              ) : null,
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
