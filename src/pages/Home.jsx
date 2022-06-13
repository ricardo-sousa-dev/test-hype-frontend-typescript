import React, { useContext, useMemo, useEffect} from 'react';
import Context from '../context/Context';
import './css/Home.css';

import {
  HeaderHome,
  CardsHome,
  Footer,
  CartModal
} from '../components';

function Home() {

  const { showModalCart, setShowModalCart } = useContext(Context);

  const localStorageCart = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')));
    
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
