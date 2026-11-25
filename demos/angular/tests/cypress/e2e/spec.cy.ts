describe('My First Test', () => {
  it('Visits the initial project page', async () => {
    cy.visit('/');
    cy.contains('todo-item works!');
    cy.get('[data-testid="add-todo"').click();
    cy.get('[data-testid="add-todo"').click();
    cy.get('[data-testid="add-todo"').click();
    cy.get('[data-testid="add-todo"').click();
    cy.get('[data-testid="add-todo"').click();
    cy.get('[data-testid="my-input"').type('coucou');
    cy.get('[data-testid="my-input"').clear();
  });

  it('test2', function () {
    cy.visit('http://localhost:4200');

    cy.get('[data-testid="add-todo"]').click();
    cy.get('[data-testid="add-todo"]').click();
    cy.get('[data-testid="my-input"]').click();
    cy.get('[data-testid="my-input"]').type('coucou le monde');

    cy.get('[data-testid="todo"]:first').screenshot();
  });

  it('should have 2 todos', function () {
    cy.visit('http://localhost:4200');
    cy.get('body')
      .find('[data-testid="todo"]')
      .its('length')
      .then((count) => {
        expect(count).to.be.equal(2);
      });
  });
});
