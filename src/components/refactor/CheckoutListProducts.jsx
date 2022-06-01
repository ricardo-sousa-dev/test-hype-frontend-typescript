import React, { useContext } from 'react';
import Context from '../../context/Context';
import '../../css/refactor/CheckoutListProducts.css';

function CheckoutListProducts() {
  const { replaceSpecialChars } = useContext(Context);

  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];

  return (
    <div className="CheckoutListProducts">
      <h2>Produtos:</h2>
      <ul>
        {localStorageCart.map((product) =>
        (
          <li className="li-product-checkout" key={product.sku.toString()}>
            <img
              className="img-product-checkout"
              src={require(`../../images/products/1-${ replaceSpecialChars(
                product.name,
              ) }.jpeg`)}
              alt={product.title}
            />
            <div className="detail-product">
              <p className="name-product-checkout">{product.name}</p>
              <div className="sum-product-quantity-value">
                <div>
                  <p>
                    {product.quantity} X R${' '}
                    {product.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <div>
                  <p>
                    R${' '}
                    {(product.quantity * product.price)
                      .toFixed(2)
                      .replace('.', ',')}
                  </p>
                </div>
              </div>
            </div>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default CheckoutListProducts;
