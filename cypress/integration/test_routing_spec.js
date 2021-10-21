describe('Routing', () => {
  it('Navigates to other pages', () => {
		cy.visit('http://localhost:3000');
		cy.get("[data-cy=drawer-button]").should("exist").click();
    cy.get("[data-cy=team-members-page]").should("exist").click();
  })
})
