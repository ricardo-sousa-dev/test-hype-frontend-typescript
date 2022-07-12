import React, { useContext, useEffect, useMemo, useState } from 'react';
import Context from '../../context/Context';
import './css/CardsHome.css';
import { CardProduct, Loading, SearchEmpty } from '..';
import productsGenerator from '../../database/dataProducts';
import {IProduct} from '../../interfaces';

function CardsHome() {
  type Products = IProduct[];
  const localStorageProducts: Products = useMemo(() => localStorage.getItem('products') ? JSON.parse(localStorage.products) : [], []);

  const { products, setProducts, resultSearchBar, searchBar } = useContext(Context);

  const [ loading, setLoading ] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProducts = async () => {
    const fetchProducts = await productsGenerator(16);
    setProducts(fetchProducts);
    localStorage.setItem('products', JSON.stringify(fetchProducts));
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if (!localStorage.getItem('products')) {
      getProducts();
    } else {
      setProducts(localStorageProducts);
      setLoading(false);
    }

  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      {resultSearchBar.length === 0 && searchBar.length > 0 ?
        <SearchEmpty /> :
        <div className="container-cards" data-testid="container-cards">
          <div className="cards" data-testid="cards">
            {resultSearchBar.length === 0 ?
              products.map((product:IProduct) =>
                <CardProduct key={product.id} product={product} />) : null}
          </div>
        </div>}
    </>
  );
}

export default CardsHome;
