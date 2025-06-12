/// <reference types="cypress" />

describe('Carrinho', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });
  
  it('Adicionar 1 produto ao carrinho com sucesso', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_container').should('contain', '1');
    cy.get('.shopping_cart_container').click();

    cy.contains('Sauce Labs Backpack').should('be.visible');
  });
  
})