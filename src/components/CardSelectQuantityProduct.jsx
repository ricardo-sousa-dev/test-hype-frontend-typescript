import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from 'react';
import '../css/CardSelectQuantityProduct.css';
import Context from '../context/Context';

function SelectQuantityProduct(props) {
  const { product } = props;
  let localStorageCart = JSON.parse(localStorage.getItem('cartProducts')) || [];
  const findProduct = localStorageCart.find(
    (productFind) => productFind.sku === product.sku,
  );
  const [ quantityInCart, setQuantityInCart ] = useState();
  const [ sumPriceProduct, setSumPriceProduct ] = useState();

  const { totalCart, setTotalCart } = useContext(Context);

  useEffect(() => {
    const arrayPricesCart = [];
    for (let index = 0; index < localStorageCart.length; index++) {
      const element = localStorageCart[ index ];
      arrayPricesCart.push(element.price * element.quantity);
    }
    const totalPriceCart = ((arrayPricesCart.reduce((a, b) => a + b, 0)) + 20).toFixed(2).replace('.', ',')
    setTotalCart(totalPriceCart);
    localStorage.setItem('totalPriceCart', JSON.stringify(totalPriceCart));

  }, [ localStorageCart, totalCart, setTotalCart ]);

  useEffect(() => {
    const productInCart = localStorageCart.find(
      (productCart) => productCart.sku === product.sku,
    );
    setQuantityInCart(productInCart ? productInCart.quantity : 0);
    setSumPriceProduct(
      productInCart
        ? (productInCart.quantity * product.price).toFixed(2).replace('.', ',')
        : 0,
    );
  }, [ quantityInCart, sumPriceProduct, localStorageCart, product ]);

  const decrementCart = () => {
   if(findProduct){
    if (findProduct.quantity === 1) {
      localStorageCart.splice(localStorageCart.indexOf(findProduct), 1);
      localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
      setQuantityInCart(0);
      setSumPriceProduct(0);
    } else if (findProduct.quantity > 0) {
      findProduct.quantity -= 1;
      localStorageCart.splice(localStorageCart.indexOf(findProduct), 1, findProduct);
      localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
      setQuantityInCart(findProduct.quantity);
    }
   }
  };

  const incrementCart = () => {
    if (!JSON.parse(localStorage.getItem('cartProducts'))) {
      const setProduct = product;
      setProduct.quantity = 1;
      localStorage.setItem('cartProducts', JSON.stringify([ setProduct ]));
      setQuantityInCart(1);
    } else {
      if (!findProduct) {
        const setProduct = product;
        setProduct.quantity = 1;
        localStorageCart.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(1);
      } else {
        findProduct.quantity += 1;
        localStorageCart.splice(localStorageCart.indexOf(findProduct), 1, findProduct);
        localStorage.setItem('cartProducts', JSON.stringify(localStorageCart));
        setQuantityInCart(findProduct.quantity);
      }
    }
  };

  return (
    <div className="select-quantity-product">
      <div className="quantity-product">
        <button
          className="subtract"
          value="subtract-cart"
          type="button"
          onClick={decrementCart}
        >
          -
        </button>
        <div className="description quantity">
          <span className="description">{quantityInCart}</span>
        </div>
        <button
          className="add"
          value="add-cart"
          type="button"
          onClick={incrementCart}
        >
          +
        </button>
      </div>
      <div className="total-product">
        {sumPriceProduct !== 0 ? <span>R$ {sumPriceProduct}</span>: null}
      </div>
    </div>
  );
}

SelectQuantityProduct.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    sku: PropTypes.any,
  }),
};

export default SelectQuantityProduct;
