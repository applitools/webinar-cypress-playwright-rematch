export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with a given user
       * @param email email of the user you want to log in
       * @param password user passwird
       * @example
       * cy.login('filip@example.com', 'i<3slovakia!')
       *
       */
      login(email: string, password: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {

  cy.get('[data-cy=login-email]').type(email)
  cy.get('[data-cy=login-password]').type(`${password}{enter}`)

});
