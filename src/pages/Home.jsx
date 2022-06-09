import React, { useContext, useEffect } from 'react';
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
  
  useEffect(() => {
    setShowModalCart(false)
  },[])

  return (
    <div className="page-home">
      {showModalCart && <CartModal />}
      <HeaderHome />
      <CardsHome />
      <Footer />
    </div>
  );
}

export default Home;
