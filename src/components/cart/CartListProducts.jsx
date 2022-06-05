import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import SelectQuantityProduct from '../CardSelectQuantityProduct';
import '../../css/CartListProducts.css';
import { useNavigate } from 'react-router-dom';
import formatCoin from '../../utils/formatCoin';

function CartListProducts() {

  const navigate = useNavigate();
  const { setViewProductDetails, productsCart } = useContext(Context);

  let localStorageCart =
    JSON.parse(localStorage.getItem('cartProducts')) || [];
  const [ cartProducts, setCartProducts ] = useState(localStorageCart);

  const redirectProductDetails = (product) => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    navigate(`/product/${ product.id }`);
  };

  return (
    <div className="cart-list-products">
      <h2>Produtos:</h2>
      <div className="list-products">
        {localStorageCart.length > 0 ? <ul>
          {localStorageCart.map((product) =>
          (
            <li className="li-product-cart" key={product.id}>
              <div className="info-product">
                <button
                  className="product-detail-cart"
                  type="button"
                  onClick={()=>redirectProductDetails(product)}>
                  <img
                    className="img-product-cart"
                    src={product.image}
                    alt={product.name}
                  />
                </button>
                <div className="detail-product">
                  <button
                    className="product-detail-cart"
                    type="button"
                    onClick={()=>redirectProductDetails(product)}>
                    <div className="name-product-cart">
                      <h3>{product.name}</h3>
                    </div>
                    <p className="price-product-cart">
                      Preço: {formatCoin(product.price)}
                    </p>
                  </button>
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
