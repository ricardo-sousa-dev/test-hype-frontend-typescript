import React from 'react';

function BannerCarrossel () {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="_images/banner_envio_todo_brasil.png"
            className="d-block w-100"
            alt="Enviamos para todo o Brasil!"
          />
        </div>
        <div className="carousel-item">
          <img
            src="_images/banner_compre_whatsapp.png"
            className="d-block w-100"
            alt="Compre também pelo WhatsApp - 41991097782"
          />
        </div>
        <div className="carousel-item">
          <img
            src="_images/banner_frete_gratis.png"
            className="d-block w-100"
            alt="Frete grátis a partir de R$ 79,00"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default BannerCarrossel;
