describe('search form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("allows users to look up a word", () => {
    cy.get(".MuiInputBase-input").clear().type("book")
    cy.get(".MuiButtonBase-root").eq(1).click()
    cy.getByData("definition-header").contains("book")
  })
})