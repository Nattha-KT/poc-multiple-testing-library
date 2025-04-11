describe('App Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('should render the heading and button', () => {
      cy.contains('h1', 'Jest App').should('be.visible');
      cy.contains('button', 'Click me').should('be.visible');
      cy.contains('Clicked!').should('not.exist');
    });
  
    it('should show "Clicked!" after clicking the button', () => {
      cy.contains('button', 'Click me').click();
      cy.contains('Clicked!').should('be.visible');
    });
  });
  