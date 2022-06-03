import React, { useState, useEffect, useContext, useMemo } from 'react';
import '../css/CardSelectQuantityProduct.css';
import Context from '../context/Context';
import formatCoin from '../utils/formatCoin';

function SelectQuantityProduct(props) {
  const { product } = props;
  let localStorageCart =JSON.parse(localStorage.getItem('cartProducts')) || [];
  const findProduct = localStorageCart.find(
    (productFind) => productFind.name === product.name,
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
    const totalPriceCart = (formatCoin((arrayPricesCart.reduce((a, b) => a + b, 0)) + 20))
    setTotalCart(totalPriceCart);
    localStorage.setItem('totalPriceCart', JSON.stringify(totalPriceCart));

  }, [ localStorageCart, totalCart, setTotalCart ]);

  useEffect(() => {
    const productInCart = localStorageCart.find(
      (productCart) => productCart.name === product.name,
    );
    setQuantityInCart(productInCart ? productInCart.quantity : 0);

    setSumPriceProduct(
      productInCart
        ? formatCoin((productInCart.quantity * Number(product.price.slice(3,-3))))
        : 0,
    );
  }, [ quantityInCart, sumPriceProduct, localStorageCart, product ]);

  const decrementCart = () => {
   if(findProduct){
    if (findProduct.quantity === 1) {
      const newArray = localStorageCart.filter(
        (productCart) => productCart.name !== product.name,
      );
      localStorage.setItem('cartProducts', JSON.stringify(newArray));
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
        {sumPriceProduct !== 0 ? <span>{sumPriceProduct}</span>: null}
      </div>
    </div>
  );
}

export default SelectQuantityProduct;
