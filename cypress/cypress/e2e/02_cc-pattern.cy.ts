it('visiting the login page', () => {

  cy.visit('/login')
    .login('filip', 'i<3slovakia!')

});

