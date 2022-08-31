beforeEach(() => {
  cy.visit('/board/2')
  cy.get('[data-cy="create-list"]').click()
});

it('Selecting elements on page', () => {

  // select the first card on page
  cy.get('.card').eq(0) // class
  cy.get('[data-cy=card]').eq(0) // custom attribute
  cy.xpath('(//div[contains(@class, "card")])[1]') // xpath

  // select "primary colors" list 
  cy.get('[data-cy=list]').eq(0)
  cy.get('[data-cy=list]').first()

  // select "secondary colors" list
  cy.get('[data-cy=list]').last()

  // select input for changing board name
  cy.get('input').filter('.board-title')

  // select home button
  cy.get('button').not('.text-white')

  // select button within the navbar
  cy.get('nav').find('button')

  // select navbar that has an image
  cy.get('img').parent()

  // select a list that contains the card with the text "blue"
  cy.contains('[data-cy=card]', 'Blue').parents('[data-cy=list]')

  // select all children elements of "nav"
  cy.get('nav').children()

  // select the element that is currently focused
  cy.focused()

  // select the element next to "Green" card element
  cy.contains('[data-cy=card]', 'Green').next()

  // select all elements next to "Green" card element
  cy.contains('[data-cy=card]', 'Green').nextAll()

  // select the element previous to "Blue" card element
  cy.contains('[data-cy=card]', 'Blue').prev()

  // select all elements next to "Blue" card element
  cy.contains('[data-cy=card]', 'Blue').prevAll()

  // select all the cards that are at the same level as "Red" card
  cy.contains('[data-cy=card]', 'Red').siblings()


});