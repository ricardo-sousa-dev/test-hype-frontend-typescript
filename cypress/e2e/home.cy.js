describe('Testa página inicial da aplicação', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(5000);
  });

  it('Verifica se a página contém a logo da empresa', () => {
    cy.get('[data-testid="logo"]').should('exist');
    cy.get('span').should('contain', 'Acme Inc.');
  });

  it('Verifica se a página contém um input de busca de produtos', () => {
    cy.get('[data-testid="search-input"]').should('exist');
    cy.get('[data-testid="search-input"]').type('Notebook');
    cy.get('[data-testid="search-input"]').should('have.attr', 'placeholder', 'Buscar produto...');
  });

  it('Verifica se a página contém um select para selecionar os produtos favoritos', () => {
    cy.get('[data-testid="favorites-select"]').should('exist');
    cy.get('[data-testid="favorites-label"]').should('contain', 'Favoritos');
  });

  it('Verifica se a página contém uma lista de 10 produtos', () => {
    cy.get('[data-testid="container-cards"]').should('exist');
    cy.get('[data-testid="cards"]').should('exist');
    cy.get('[data-testid="cards"]').find('[data-testid="card-product"]').should('exist');
    cy.get('[data-testid="cards"]').find('[data-testid="card-product"]').should('have.length', 10);
  })

  it('Verifica se o ao digitar no input de busca um nome inexistente, uma mensagem aparece na tela', () => {
    cy.get('[data-testid="search-input"]').type('lalalala');
    cy.get('[data-testid="message-empty"]').should('exist');
  })

  it('Verifica se a página contém um botão que leva a página do carrinho', () => {
    cy.get('[data-testid="cart-button"]').should('exist');
    cy.get('[data-testid="cart-button"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-testid="button-previous"]').click();
  })

  it('Verifica se ao clicar no nome do produto é direcionado para a página do produto',()=>{
    cy.get('[data-testid="link-product-detail"]').first().click();
    cy.url().should('include', '/product');
    cy.get('[data-testid="button-previous"]').click();
  })

  it('Verifica se ao clicar no botão de adicionar ao carrinho, o produto é adicionado ao carrinho',()=>{
    cy.get('[data-testid="add-to-cart"]').first().click();
    cy.get('[data-testid="cart-button"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-testid="li-product-cart"]').should('exist');
    cy.get('[data-testid="button-previous"]').click();
  })

  it('Verifica se é possível marcar um produto como favorito', () => {
    cy.get('[data-testid="set-favorite"]').first().click();
    cy.get('[data-testid="favorites-select"]').should('exist');
    cy.get('[data-testid="favorites-select"]').check();
    cy.get('[data-testid="card-product"]').should('exist');
    cy.get('[data-testid="card-product"]').should('have.length', 1);
  })



//   it('Verifica se as máscaras de CNPJ e Data formatam os dados corretamente', () => {
//     cy.get('input[name="cnpj"]')
//       .type('12345678901234')
//       .should('have.value', '12.345.678/9012-34');

//     cy.get('input[name="dataInicial"]')
//       .type('12012020')
//       .should('have.value', '12/01/2020');
//   });

//   it('Verifica se os campos do formulário são preenchidos corretamente e são enviados', () => {
//     cy.get('[data-cy=input-nome]').type('João da Silva');
//     cy.get('[data-cy=input-dataInicial]').type('22102000');
//     cy.get('[data-cy=input-dataFinal]').type('10122010');
//     cy.get('[data-cy=input-idPropriedade]').type('12345');
//     cy.get('[data-cy=input-nomePropriedade]').type('Fazenda Paraíso');
//     cy.get('[data-cy=input-cnpj]').type('27505101010101');
//     cy.get('[data-cy=input-idLaboratorio]').type('1234');
//     cy.get('[data-cy=input-nomeLaboratorio]').type('Laboratório de Testes');
//     cy.get('[data-cy=input-observacoes]').type('Observações');
//     cy.get('[data-cy=button-enviar]').click();
//     cy.contains('Enviando...');
//   });
});
