/// <reference types="cypress" />

const users = require('../fixtures/users');

describe('Login Page', () => {
  
  users.forEach(user => {
    it(`Login com usuário: ${user.username}`, () => {
      cy.login(user.username, user.password);

      if (user.success) {
        cy.get('#inventory_container').should('be.visible');
      } else if (user.error) {
        cy.get('[data-test="error"]').should('have.text', user.error);
      } else if (user.url) {
        cy.url().should('include', user.url);
      }
    });
  });
});
