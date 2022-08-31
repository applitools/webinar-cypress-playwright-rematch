it('Applitools plugin', () => {

  // to make this run please refer to the @applitools/eyes-cypress docs. you will need an API key

  cy.visit('/');

  cy.eyesOpen({
    appName: 'Trello app',
    testName: 'Trying out Applitools plugin',
    browser: { width: 800, height: 600 },
  });

  cy.eyesCheckWindow('Board list');
  cy.eyesClose();

});