describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('[data-testid="settings-link"]').click();
    cy.get('[data-testid="pairs-input"]').clear().type('2');

    cy.get('[data-testid="game-link"]').click();

    cy.get('body')
      .find('[data-testid="card-item"]')
      .its('length')
      .then((count) => {
        expect(count).to.be.equal(4);
      });
  });
});
