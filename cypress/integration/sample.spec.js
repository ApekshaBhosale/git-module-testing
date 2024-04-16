describe('Google', () => {
  it('should open Google homepage', () => {
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')
  })
});