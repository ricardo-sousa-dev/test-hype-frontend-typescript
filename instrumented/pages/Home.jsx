import React from 'react';
import './css/Home.css';

import {
  HeaderHome,
  CardsHome,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="page-home">
      <HeaderHome />
      <CardsHome />
      <Footer />
    </div>
  );
}

export default Home;
