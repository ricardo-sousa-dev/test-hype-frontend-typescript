import React, { useContext, useState, useMemo } from 'react';
import Context from '../../context/Context';
import { SelectQuantityProduct, ClearCartButton, DeleteProductCartButton } from '..';
import './css/CartListProducts.css';
import { useNavigate } from 'react-router-dom';
import formatCoin from '../../utils/formatCoin';
import {IProduct} from '../../interfaces';

function CartListProducts() {
  type Products = IProduct[];

  const navigate = useNavigate();
  const { setViewProductDetails } = useContext(Context);

  const localStorageCart: Products = useMemo(() => localStorage.getItem('cartProducts') ? JSON.parse(localStorage.cartProducts) : [], []);

  const [ cartProducts ] = useState(localStorageCart);

  const redirectProductDetails = (product:IProduct) => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    navigate(`/product/${ product.id }`);
  };

  return (
    <div className="cart-list-products">
      <div className="clear-cart">
        <h2>Produtos:</h2>
        <ClearCartButton />
      </div>
      <div className="list-products" data-testid="list-products">
        {localStorageCart && localStorageCart.length > 0 ? <ul>
          {localStorageCart.map((product) =>
          (
            <li className="li-product-cart" key={product.id} data-testid='li-product-cart'>
              <div className="info-product">
                <button
                  className="product-detail-cart"
                  type="button"
                  onClick={() => redirectProductDetails(product)}>
                  <img
                    className="img-product-cart"
                    src={product.image}
                    alt={product.name}
                  />
                </button>
                <div className="detail-product">
                  <div className='product-delete-button'>
                    <DeleteProductCartButton product={product} />
                  </div>
                  <button
                    className="product-detail-cart"
                    type="button"
                    onClick={() => redirectProductDetails(product)}>
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
        </ul> : null}
      </div>

    </div>
  );
}

export default CartListProducts;
