import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import './css/HomeCards.css';
import CardProduct from './CardProduct';
import Loading from '../home/Loading';
import productsGenerator from '../../database/dataProducts';

function CardsHome() {
  const { products, setProducts, resultSearchBar } = useContext(Context);

  const [ loading, setLoading ] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProducts = async () => {
    const fetchProducts = await productsGenerator(10);
    setProducts(fetchProducts);
    localStorage.setItem('products', JSON.stringify(fetchProducts));
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem('products')) {
      getProducts();
    } else {
      setProducts(JSON.parse(localStorage.getItem('products')));
      setLoading(false);
    }

  }, []);

  return (
    <div className="home-cards">
      {loading ? <Loading /> : null}
      <div className="container-cards" data-testid="container-cards">
        <div className="cards" data-testid="cards">
          {resultSearchBar.length === 0 ?
            products.map((product) =>
              <CardProduct key={product.id} product={product} />):null}
        </div>
      </div>
    </div>
  );
}

export default CardsHome;
