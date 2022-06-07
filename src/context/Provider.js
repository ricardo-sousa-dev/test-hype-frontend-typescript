import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ products, setProducts ] = useState([]);

  const [ resultSearchBar, setResultSearchBar ] = useState('');
  const [ productsCart, setProductsCart ] = useState([]);
  const [ viewProductDetails, setViewProductDetails ] = useState('');
  const [ totalCart, setTotalCart ] = useState(0);
  const [ quantityCart, setQuantityCart ] = useState(0);
  const [ selectedFavorite, setSelectedFavorite ] = useState(true);

  const providerValue = {
    products, setProducts,
    resultSearchBar, setResultSearchBar,
    productsCart, setProductsCart,
    quantityCart, setQuantityCart,
    viewProductDetails, setViewProductDetails,
    totalCart, setTotalCart,
    selectedFavorite, setSelectedFavorite
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
