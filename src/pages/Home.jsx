import React from 'react';
import '../css/Home.css';

import {
  HeaderHome,
  HomeCards,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="page-home">
      <HeaderHome />
      <HomeCards />
      <Footer />
    </div>
  );
}

export default Home;
