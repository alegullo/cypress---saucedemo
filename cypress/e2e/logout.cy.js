/// <reference types="cypress" />

describe('Logout', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });
  it('Deve fazer logout com sucesso', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/');
    cy.get('#login-button').should('be.visible');
  });
});