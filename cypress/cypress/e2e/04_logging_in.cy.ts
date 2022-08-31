describe('Logging in', () => {

  it('via UI', () => {

    cy.visit('/login')
    cy.get('[data-cy=login-email]').type('filip@example.com')
    cy.get('[data-cy=login-password]').type('i<3slovakia!{enter}')

  });

  it('via API', () => {

    cy.request('POST', '/api/login', {
      email: 'filip@example.com',
      password: 'i<3slovakia!'
    }).then(({ body: { accessToken } }) => {
      cy.setCookie('trello_token', accessToken)
    })

  });

});


describe('Caching login session', () => {

  beforeEach('cache login session', () => {
    cy.session('login', () => {
      cy.visit('/login')
      cy.get('[data-cy=login-email]').type('filip@example.com')
      cy.get('[data-cy=login-password]').type('i<3slovakia!{enter}')
      cy.document().its('cookie').should('contain', 'trello_token')
    })
  });

  it('Use cached session first time', () => {

    cy.visit('/')

  });

  it('Use cached session second time', () => {

    cy.visit('/')

  });

});

