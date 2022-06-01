import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Context from '../../context/Context';
import '../../css/HomeCards.css';
import HomeCardProduct from './HomeCardProduct'

function CardsHome() {
  const { database } = useContext(Context);

  return (
    <div className="categories">
      {database.categoryProducts.map((category) => (
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
      ))}
      <hr />
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
