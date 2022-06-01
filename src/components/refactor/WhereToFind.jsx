import React from 'react';

function WhereToFind() {
  return (
    <div>
      <h2 className="mb-3 col-6 categoria" id="comprar">
        {' '}
        Onde encontrar nossos produtos
      </h2>
      <div className="col-12 onde-encontrar">
        <div className="col-12 onde-encontrar-item">
          <div className="onde-encontrar-icon">
            <i className="fas fa-cart-arrow-down"></i>
          </div>
          <div className="onde-encontrar-text">
            <h5>Marketplaces</h5>
            <p>
              Nossos produtos são vendidos nos maiores marketplaces. Escolha o
              seu preferido e aproveite as condições específicas do canal.
            </p>
            <div className="marketplaces">
              <i className="far fa-hand-point-right"></i>
              <a href="https://shopee.com.br/shop/382052111/search">
                <img
                  className="img-2"
                  src="_images/marketplaces/1shopee.png"
                  alt="shopee-singelee"
                />
              </a>
              <a href="https://lista.mercadolivre.com.br/singelee-geleias_Loja_olist">
                <img
                  src="_images/marketplaces/2mercadolivre.png"
                  alt="mercado-livre-singelee"
                />
              </a>
              <a href="https://www.carrefour.com.br/busca/olist%20geleia%20singelee">
                <img
                  src="_images/marketplaces/4carrefour.png"
                  alt="carrefour-singelee"
                />
              </a>
              <a href="https://www.extra.com.br/geleia-singelee/b">
                <img
                  src="_images/marketplaces/5extra.png"
                  alt="extra-singelee"
                />
              </a>
              <a href="https://www.zoom.com.br/search?q=geleia%20singelee">
                <img
                  className="img-2"
                  src="_images/marketplaces/8zoom.png"
                  alt="zoom-singelee"
                />
              </a>
              <a href="https://marketplace.triibo.com.br/?s=singelee&post_type=product&type_aws=true">
                <img
                  className="img-2"
                  src="_images/marketplaces/9triibo.png"
                  alt="triibo-singelee"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 media onde-encontrar-item">
          <div className="onde-encontrar-icon">
            <i className="fas fa-box-open"></i>
          </div>
          <div className="onde-encontrar-text">
            <h5>Revenda - Atacado</h5>
            <p>
              Se você deseja adquirir nossos produtos em uma quantidade maior,
              <b>
                {' '}
                com o objetivo de revender ou compor algum kit ou produto que
                você já possua
              </b>
              , entre em contato conosco através do{' '}
              <b>
                <a
                  href="https://api.whatsapp.com/send?phone=5541991097782&text=Ol%C3%A1!%20Acessei%20ao%20site%20da%20Singelee%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20geleias..."
                >
                  WhatsApp
                </a>
              </b>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereToFind;
