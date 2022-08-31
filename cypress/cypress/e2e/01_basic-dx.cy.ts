it('List should have all the items', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 2)

});

it.skip('Will not find enough items and will fail', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('have.length', 3)

});