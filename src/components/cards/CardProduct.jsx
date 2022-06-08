import PropTypes from "prop-types";
import React, { useContext, useEffect, useState, useMemo} from 'react';
import './css/CardProduct.css';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { FaHeart } from "react-icons/fa";
import formatCoin from '../../utils/formatCoin';

function CardProduct(props) {
  const navigate = useNavigate();
  const { product } = props;

  const favorites = useMemo(() => JSON.parse(localStorage.getItem('favorites')) || [], []);

  const [ isFavorite, setIsFavorite ] = useState(false);

  const { setShowModalCart, quantityCart, setQuantityCart, setViewProductDetails, setResultSearchBar, selectedFavorite, setSelectedFavorite } = useContext(Context);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      const isFavorite = favorites.find((favorite) => favorite.id === product.id);
      setIsFavorite(!!isFavorite);
    }
  }, [ favorites, product.id ]);

  const redirectProductDetails = () => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    setResultSearchBar([]);
    navigate(`/product/${ product.id }`);
  };

  const addToCart = () => {
    setShowModalCart(true);


    if (!JSON.parse(localStorage.getItem('cartProducts')) || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
      const setProduct = product;
      setProduct.quantity = 1;
      localStorage.setItem('cartProducts', JSON.stringify([ setProduct ]));
      setQuantityCart(quantityCart + 1);

    } else {
      const findProduct = JSON.parse(localStorage.getItem('cartProducts')).find(
        (productFind) => productFind.name === product.name,
      );

      if (!findProduct) {
        const setProduct = product;
        setProduct.quantity = 1;
        const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(newArray));
        setQuantityCart(quantityCart + 1);
      }

      if (findProduct) {
        const setProduct = findProduct;
        setProduct.quantity += 1;
        const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('cartProducts', JSON.stringify(newArray));
      }
    }
  };

  const addFavorite = () => {
    if (!JSON.parse(localStorage.getItem('favorites')) || JSON.parse(localStorage.getItem('favorites')).length === 0) {
      const setProduct = product;
      localStorage.setItem('favorites', JSON.stringify([ setProduct ]));
      setIsFavorite(true);
    } else {
      const findProduct = JSON.parse(localStorage.getItem('favorites')).find(
        (productFind) => productFind.name === product.name,
      );

      if (!findProduct) {
        const setProduct = product;
        const newArray = JSON.parse(localStorage.getItem('favorites')).filter(
          (productFilter) => productFilter.name !== setProduct.name,
        );
        newArray.push(setProduct);
        localStorage.setItem('favorites', JSON.stringify(newArray));
        setIsFavorite(true);
      } else {
        const newArray = JSON.parse(localStorage.getItem('favorites')).filter(
          (productFilter) => productFilter.name !== findProduct.name,
        );
        localStorage.setItem('favorites', JSON.stringify(newArray));
        setIsFavorite(false);
      }
    }
  };

  return (
    <div className="HomeCardProduct" data-testid="card-product">
      <div className="card-body">
        <div className="icon-heart">
          <button type="button" onClick={addFavorite} data-testid="set-favorite">
            {
              isFavorite ?
                <FaHeart style={{ fill: 'red', cursor: 'pointer', fontSize: '20px' }} /> :
                <FaHeart style={{ fill: 'rgba(128, 128, 128, 0.55)', cursor: 'pointer', fontSize: '20px' }} />
            }
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="thumbnail"
        />
        <button
          className="link-product-detail"
          type="button"
          onClick={redirectProductDetails}
          data-testid='link-product-detail'>
          <div className="card-title">
            <h4>{product.name}</h4>
          </div>
          <div className="card-price">
            <h4>{formatCoin(product.price)}</h4>
          </div>
        </button>
      </div>
      <div className="card-cart">
        <button
          type="button"
          onClick={addToCart}
          className="add-to-cart"
          data-testid="add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
  }),
};


export default CardProduct;
