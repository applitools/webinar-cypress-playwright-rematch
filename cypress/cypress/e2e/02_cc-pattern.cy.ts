it('visiting the login page', () => {

  cy.visit('/login')
    .login('filip@example.com', 'i<3slovakia!')

});

