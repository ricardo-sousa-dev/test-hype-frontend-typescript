import React from 'react';
import '../css/Home.css';

import {
  Header,
  HomeCards,
  Footer,
} from '../components';

function Home() {
  return (
    <div className="page-home">
      <Header />
      <HomeCards />
      <Footer />
    </div>
  );
}

export default Home;
