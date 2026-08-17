describe('Cypress smoke test', () => {
  it('loads the example app homepage', () => {
    cy.visit('/');
    cy.contains('Cypress').should('be.visible');
  });
});
