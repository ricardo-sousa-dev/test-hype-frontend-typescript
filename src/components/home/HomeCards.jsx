import React, { useContext, useEffect, useState } from 'react';
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
    <div className="home-cards">
      {loading ? <Loading /> : null}
      <div className="container-cards">
        <div className="cards">
          {resultSearchBar.length === 0 ? products.map((product) =>
            <HomeCardProduct key={product.id} product={product} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CardsHome;
