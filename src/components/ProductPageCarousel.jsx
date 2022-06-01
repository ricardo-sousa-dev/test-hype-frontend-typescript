import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Carousel from 'react-bootstrap/Carousel';
import '../css/ProductPageCarousel.css';

function CarrouselProductPage() {
  const { replaceSpecialChars } = useContext(Context);
  const [ productDetails ] = useState(
    JSON.parse(localStorage.getItem('viewProductDetails')),
  );

  return (
    <Carousel className="carousel" slide={false} >
      <Carousel.Item className="carousel-item">
        <img
          className="image-product-detail"
          alt={productDetails.name}
          src={require(`../images/products/1-${ replaceSpecialChars(
            productDetails.name,
          ) }.jpeg`)}
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="image-product-detail"
          alt={productDetails.name}
          src={require(`../images/products/2-${ replaceSpecialChars(
            productDetails.name,
          ) }.jpeg`)}
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="image-product-detail"
          alt={productDetails.name}
          src={require(`../images/products/3-${ replaceSpecialChars(
            productDetails.name,
          ) }.jpeg`)}
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="image-product-detail"
          alt={productDetails.name}
          src={require(`../images/products/4-${ replaceSpecialChars(
            productDetails.name,
          ) }.jpeg`)}
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="image-product-detail"
          alt={productDetails.name}
          src={require(`../images/products/5-${ replaceSpecialChars(
            productDetails.name,
          ) }.jpeg`)}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselProductPage;
