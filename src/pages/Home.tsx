import React, { useContext, useMemo, useEffect} from 'react';
import Context from '../context/Context';
import './css/Home.css';
import {IProduct} from '../interfaces';

import {
  HeaderHome,
  CardsHome,
  Footer,
  CartModal
} from '../components';

function Home() {

  type Products = IProduct[];

  const { showModalCart, setShowModalCart } = useContext(Context);

  const localStorageCart: Products = useMemo(() => localStorage.getItem('cartProducts') ? JSON.parse(localStorage.cartProducts) : [], []);
  
    
  useEffect(() => {
    setShowModalCart(false);
  }, []);
  
  return (
    <div className="page-home">
      {showModalCart && (localStorageCart && localStorageCart.length > 0) && <CartModal />}
      <HeaderHome />
      <CardsHome />
      <Footer />
    </div>
  );
}

export default Home;
