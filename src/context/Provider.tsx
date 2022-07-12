import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

interface Props {
  children?: React.ReactNode
  // any props that come into the component
}

const Provider = ({ children }:Props) => {

  const [ products, setProducts ] = useState<object | []>([]);
  const [ resultSearchBar, setResultSearchBar ] = useState<object | []>([]);
  const [ productsCart, setProductsCart ] = useState<object | []>([]);
  const [ viewProductDetails, setViewProductDetails ] = useState<object | {}>({});
  const [ totalCart, setTotalCart ] = useState<number | null>(0);
  const [ quantityCart, setQuantityCart ] = useState<number | null>(0);
  const [ selectedFavorite, setSelectedFavorite ] = useState<boolean>(true);
  const [showModalCart, setShowModalCart] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<object | []>([]);

  const providerValue = {
    products, setProducts,
    resultSearchBar, setResultSearchBar,
    searchBar, setSearchBar,
    productsCart, setProductsCart,
    quantityCart, setQuantityCart,
    viewProductDetails, setViewProductDetails,
    totalCart, setTotalCart,
    selectedFavorite, setSelectedFavorite,
    showModalCart, setShowModalCart
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
