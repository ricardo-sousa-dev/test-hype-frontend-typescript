import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ resultSearchBar, setResultSearchBar ] = useState('');
  const [ viewProductDetails, setViewProductDetails ] = useState('');
  const [ totalCart, setTotalCart ] = useState(0);

  const providerValue = {
    resultSearchBar, setResultSearchBar,
    viewProductDetails, setViewProductDetails,
    totalCart, setTotalCart,
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
