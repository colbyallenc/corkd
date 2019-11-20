describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('/');
    // cyress types the message
    cy.get('[data-test="messageText"]')
      .type('New message');
    // clicks the save button
    cy.get('[data-test="saveButton"]')
      .click();
    // assertion
    cy.get('[data-test="messageText"]')
      .should('have.value', '');
    // checks the entire page for script
    cy.contains('New message');
  });
});
