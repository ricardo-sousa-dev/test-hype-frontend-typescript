import React, { useContext } from 'react';
import Context from '../../context/Context';
import SelectQuantityProduct from '../CardSelectQuantityProduct';
import '../../css/CartListProducts.css';
import { Link, useNavigate } from 'react-router-dom';

function CartListProducts() {

  const navigate = useNavigate();
  const { replaceSpecialChars, setViewProductDetails } = useContext(Context);

  let localStorageCart =
    JSON.parse(localStorage.getItem('cartProducts')) || [];

  const redirectProductDetails = (url, product) => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    navigate(`/product/${ url }`);
  };

  return (
    <>
      <h2>Produtos:</h2>
      {localStorage.length > 0 ? <ul>
        {localStorageCart.map((product) =>
        (
          <li className="li-product-cart" key={product.sku}>
            <div className="info-product">
              <Link
                type="button"
                onClick={() => redirectProductDetails(`${ replaceSpecialChars(product.name).concat(
                  '-',
                  product.ean,
                ) }`, product)}
                className="go-to-details">
                {/* <img
                  className="img-product-cart"
                  src={require(`../../images/products/1-${ replaceSpecialChars(
                    product.name,
                  ) }.jpeg`)}
                  alt={product.title}
                /> */}
              </Link>
              <div className="detail-product">
                {/* <div className="delete-product">
                <button>
                  <i className="far fa-trash-alt" />
                </button>
              </div> */}
                <div className="name-product-cart">
                  <Link
                    onClick={() => redirectProductDetails(`${ replaceSpecialChars(product.name).concat(
                      '-',
                      product.ean,
                    ) }`, product)}>
                    <h3>{product.name}</h3>
                  </Link>
                </div>
                <p className="sku-product-cart">SKU: {product.sku}</p>
                <p className="price-product-cart">
                  Preço: R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
                <div className="sum-product-quantity-value">
                  <SelectQuantityProduct key={product.sku} product={product} />
                </div>
              </div>
            </div>
            {localStorageCart.length > 1 ? <hr className="divisor-item" /> : null}
          </li>
        ))}
      </ul> : navigate("/cart")}

    </>
  );
}

export default CartListProducts;
