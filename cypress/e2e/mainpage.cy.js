describe('main page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it("has a header with the correct text", () => {
    cy.get(".header").contains("dictionary")
  })
})