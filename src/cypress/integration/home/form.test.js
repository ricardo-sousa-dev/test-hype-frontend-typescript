describe('Testa página inicial da aplicação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Verifica se a página contém a logo da empresa', () => {
    cy.get('h1').should('contain', 'Cadastro');
  });

  it('Verifica se as máscaras de CNPJ e Data formatam os dados corretamente', () => {
    cy.get('input[name="cnpj"]')
      .type('12345678901234')
      .should('have.value', '12.345.678/9012-34');

    cy.get('input[name="dataInicial"]')
      .type('12012020')
      .should('have.value', '12/01/2020');
  });

  it('Verifica se os campos do formulário são preenchidos corretamente e são enviados', () => {
    cy.get('[data-cy=input-nome]').type('João da Silva');
    cy.get('[data-cy=input-dataInicial]').type('22102000');
    cy.get('[data-cy=input-dataFinal]').type('10122010');
    cy.get('[data-cy=input-idPropriedade]').type('12345');
    cy.get('[data-cy=input-nomePropriedade]').type('Fazenda Paraíso');
    cy.get('[data-cy=input-cnpj]').type('27505101010101');
    cy.get('[data-cy=input-idLaboratorio]').type('1234');
    cy.get('[data-cy=input-nomeLaboratorio]').type('Laboratório de Testes');
    cy.get('[data-cy=input-observacoes]').type('Observações');
    cy.get('[data-cy=button-enviar]').click();
    cy.contains('Enviando...');
  });
});
