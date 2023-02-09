describe('main page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it("has a header with the correct text", () => {
    cy.get(".header").contains("dictionary")
  })

  context("definition header", () => {
    it("displays the default keyword", () => {
      cy.get(".definition-header").contains("dusk")
    })
    it("has an audio player", () => {
      // this may not be a good test since I'm aware that the api doesn't have an audio file available for every word...
      cy.get(".react-audio-player").should("exist")
    })
  })
})