import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import SelectQuantityProduct from '../CardSelectQuantityProduct';
import '../../css/CartListProducts.css';
import { useNavigate } from 'react-router-dom';

function CartListProducts() {

  const navigate = useNavigate();
  const { setViewProductDetails } = useContext(Context);

  let localStorageCart =
    JSON.parse(localStorage.getItem('cartProducts')) || [];
  const [ cartProducts, setCartProducts ] = useState(localStorageCart);

  const redirectProductDetails = (url, product) => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    navigate(`/product/${ url }`);
  };

  useEffect(() => {
    setCartProducts(localStorageCart);
  }, [ localStorageCart ]);

  return (
    <div className="cart-list-products">
      <h2>Produtos:</h2>
      <div className="list-products">
        {cartProducts.length > 0 ? <ul>
          {cartProducts.map((product) =>
          (
            <li className="li-product-cart" key={product.id}>
              <div className="info-product">
                <img
                  className="img-product-cart"
                  src={product.image}
                  alt={product.name}
                />
                <div className="detail-product">
                  <div className="name-product-cart">
                    <h3>{product.name}</h3>
                  </div>
                  <p className="price-product-cart">
                    Preço: {product.price}
                  </p>
                  <div className="sum-product-quantity-value">
                    <SelectQuantityProduct key={product.name} product={product} />
                  </div>
                </div>
              </div>
              {cartProducts.length > 1 ? <hr className="divisor-item" /> : null}
            </li>
          ))}
        </ul> : navigate("/cart")}
      </div>

    </div>
  );
}

export default CartListProducts;
