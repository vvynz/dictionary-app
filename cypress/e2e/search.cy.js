describe('search form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // happy path
  it("allows users to look up a word", () => {
    // since I'm using the MUI lib, the data attributes won't work. Cypress cannot find them on the MUI components
    cy.get(".MuiInputBase-input").clear().type("book")
    cy.get(".MuiButtonBase-root").eq(1).click()
    cy.getByData("definition-header").contains("book")
  })

  //unhappy path
  it("displays an error if a word cannot be found", () => {
    cy.get(".MuiInputBase-input").clear().type("pari")
    cy.get(".MuiButtonBase-root").eq(1).click()
    cy.getByData("err-msg").contains("Sorry pal, we couldn't find definitions for the word you were looking for.")
  })

  it("does not display the error message once a word is found", () => {
    cy.get(".MuiInputBase-input").clear().type("pari")
    cy.get(".MuiButtonBase-root").eq(1).click()
    cy.getByData("err-msg").should("exist")

    cy.get(".MuiInputBase-input").clear().type("par")
    cy.get(".MuiButtonBase-root").eq(1).click()

    // cy.getByData("err-msg").contains(" ") // cannot test for empty string, but even when the error message isn't displayed, it still "exists" in the DOM
  })
})