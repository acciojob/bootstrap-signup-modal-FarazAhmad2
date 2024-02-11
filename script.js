//your JS code here. If required.
describe('Modal test', () => {
  it('should close the modal', () => {
    // Open the modal
    cy.get('#exampleModal').should('be.visible');

    // Click the close button
    cy.get('.close').click();

    // Wait for half a second
    cy.wait(500);

    // Check that modal is not visible
    cy.get('#exampleModal').should('not.be.visible');
  });
});
