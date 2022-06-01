import React from 'react';

function Newsletter() {
  return (
    <div id="bloco">
      <div id="bloco-container">
        <div id="topo-newsletter">
          <h1>Cadastre-se para receber nossas dicas e receitas!</h1>
          <h2>
            Receba dicas, receitas, promoções, novidades, benefícios das geleias
            artesanais e muito mais.
          </h2>
        </div>
        <div id="img-newsletter">
          <img
            src="_images/morango-waffle.jpg"
            alt="geleia de morango no waffle"
          />
        </div>
        <div id="form-newsletter">
          <input type="text" id="nome" placeholder="Nome" />
          <input type="email" id="email" placeholder="E-mail" />
          <button type="submit">Cadastrar</button>
          <h3>*Você pode alterar suas preferências a qualquer tempo.</h3>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
