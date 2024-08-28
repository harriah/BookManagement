describe('Books Create Page', () => {
  beforeEach(() => {
    // Navigate to the '/books/create' route
    cy.visit('/books/create');
  });

  it('should have the Create button disabled initially', () => {
    // Find the Create button and check if it's disabled
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
