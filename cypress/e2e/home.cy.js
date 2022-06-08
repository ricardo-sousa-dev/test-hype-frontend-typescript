describe('Testa Home Page da aplicação', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    /* eslint-disable cypress/no-unnecessary-waiting */
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
    cy.wait(5000);
    cy.get('[data-testid="card-product"]').should('have.length', 16);
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

  it('Verifica se a página contém os ícones das redes sociais', () => {
    cy.get('[data-testid="social-media"]').should('exist');
    cy.get('[data-testid="social-media"]').find('[data-testid="icon-social-media"]').should('exist');
    cy.get('[data-testid="social-media"]').find('[data-testid="icon-social-media"]').should('have.length', 4);
  })
});
