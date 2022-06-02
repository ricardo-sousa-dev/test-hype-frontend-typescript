import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Context from '../../context/Context';
import '../../css/HomeCards.css';
import HomeCardProduct from './HomeCardProduct';
import Loading from '../Loading';
import productsGenerator from '../../database/dataProducts';

function CardsHome() {
  const { products, setProducts, resultSearchBar } = useContext(Context);

  const [ loading, setLoading ] = useState(false);

  const getProducts = async () => {
    const fetchProducts = await productsGenerator(10);
    setProducts(fetchProducts);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if (products.length === 0) {
      getProducts();
    }
  }, [])

  return (
    <div className="cards">
      {loading ? <Loading /> : null}
      {resultSearchBar.length === 0 ? products.map((product) =>
        <HomeCardProduct key={product.id} product={product} />
      ) : null}
    </div>
  );
}

// CardsHome.propTypes = {
//   database: PropTypes.shape({
//     categoryProducts: PropTypes.arrayOf(PropTypes.string),
//     products: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };

export default CardsHome;
