it('List should have all the items', { tags: '@smoke' }, () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 2)

});

it('Will not find enough items and will fail', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 3)

});

it('Will be flaky', () => {

  const count = Math.floor(Math.random() * 2) + 2

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', count)

});