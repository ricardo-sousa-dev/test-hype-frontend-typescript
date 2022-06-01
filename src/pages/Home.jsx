import React from 'react';
import '../css/Home.css';

import {
  Header,
  HomeBannerMain,
  HomeCards,
  // BannerCarrossel,
  SocialInstagramEmbed,
  Faq,
  Footer,
  // Newsletter,
  // Promotions,
  // WhatsAppIcon,
  // WhereToFind,
} from '../components';

function Home() {
  return (
    <div>
      <Header />
      <HomeBannerMain />
      <HomeCards />
      {/* <BannerCarrossel />, */}
      <Faq />
      <SocialInstagramEmbed />
      <Footer />
      {/* <Newsletter />, */}
      {/* <Promotions />, */}
      {/* <WhatsAppIcon />, */}
      {/* <WhereToFind /> */}
    </div>
  );
}

export default Home;
