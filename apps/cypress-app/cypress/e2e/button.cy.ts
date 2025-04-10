describe('Button Component', () => {
  it('should handle click event', () => {
    cy.visit('/');
    cy.get('[data-testid="shared-button"]').should('contain', 'Click me');
    cy.get('[data-testid="shared-button"]').click();
    cy.contains('Clicked!').should('be.visible');
  });
});