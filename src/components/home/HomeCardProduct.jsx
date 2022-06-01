import PropTypes from "prop-types";
import React, { useContext } from 'react';
import '../../css/HomeCardProduct.css';
import { useHistory } from 'react-router';
import Context from '../../context/Context';

function HomeCardProduct(props) {
  const history = useHistory();
  const { product } = props;
  const { setViewProductDetails, replaceSpecialChars } = useContext(Context);

  const redirectProductDetails = ({ target: { value } }) => {
    setViewProductDetails(product);
    localStorage.setItem('viewProductDetails', JSON.stringify(product));
    history.push(`/product/${ value }`);
    location.reload();
  };

  // const addToCart = () => {

  //   if (!JSON.parse(localStorage.getItem('cartProducts')) || JSON.parse(localStorage.getItem('cartProducts')).length === 0) {
  //     const setProduct = product;
  //     setProduct.quantity = 1;
  //     localStorage.setItem('cartProducts', JSON.stringify([ setProduct ]));

  //   } else {
  //     const findProduct = JSON.parse(localStorage.getItem('cartProducts')).find(
  //       (productFind) => productFind.sku === product.sku,
  //     );

  //     if (!findProduct) {
  //       console.log('entrou no if');
  //       const setProduct = product;
  //       setProduct.quantity = 1;
  //       const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
  //         (productFilter) => productFilter.sku !== setProduct.sku,
  //       );
  //       newArray.push(setProduct);
  //       localStorage.setItem('cartProducts', JSON.stringify(newArray));

  //     }
  //     if (findProduct) {
  //       console.log('entrou no else');
  //       const setProduct = findProduct;
  //       setProduct.quantity += 1;
  //       const newArray = JSON.parse(localStorage.getItem('cartProducts')).filter(
  //         (productFilter) => productFilter.sku !== setProduct.sku,
  //       );
  //       newArray.push(setProduct);
  //       localStorage.setItem('cartProducts', JSON.stringify(newArray));
  //     }
  //   }
  // };

  return (
    <div className="HomeCardProduct" key={product.ean}>
      {/* <div className="div-price">
        <div className="tag-price">
          <span className="price">
            R$ {product.price.toString().replace('.', ',')}
          </span>
        </div>
      </div> */}
      <div className="card-content">
        <img
          src={require(`../../images/products/1-${ replaceSpecialChars(
            product.name,
          ) }.jpeg`)}
          alt={product.name}
          className="thumbnail"
        />
        <div className="card-body">
          <h4 className="cardTitle">{product.name}</h4>
        </div>
        <div className="card-cart">
          {/* <button
            type="button"
            onClick={addToCart}
            className="add-to-cart"
          > */}
          {/* <i className="fas fa-info-circle pr-1" /> */}
          {/* Adicionar ao Carrinho */}
          {/* </button> */}
          <button
            value={`${ replaceSpecialChars(product.name).concat(
              '-',
              product.ean,
            ) }`}
            type="button"
            onClick={redirectProductDetails}
            className="go-to-details"
          >
            <i className="fas fa-info-circle pr-1" />
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

HomeCardProduct.propTypes = {
  ean: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default HomeCardProduct;
