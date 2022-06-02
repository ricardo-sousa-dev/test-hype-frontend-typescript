import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Context from '../../context/Context';
import '../../css/HomeCards.css';
import HomeCardProduct from './HomeCardProduct';
import Loading from '../Loading';
import productsGenerator from '../../database/dataProducts';

function CardsHome() {
  const { products, setProducts } = useContext(Context);

  const [ loading, setLoading ] = useState(false);

  const getProducts = async () => {
    const fetchProducts = await productsGenerator(5);
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
      {products.map((product) =>
        <HomeCardProduct key={product.id} product={product} />
      )}

      {/* {database.categoryProducts.map((category) => (
        category !== 'Revenda' ?
          <div key={category}>
            <h2 className="mb-3 col-6 category">{category}</h2>
            <div className="cards">
              {database.products.map((product) =>
                product.categories.some((cat) => cat === category) ? (
                  <HomeCardProduct key={product.sku} product={product} />
                ) : null,
              )}
            </div>
          </div> : null
      ))} */}
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
