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

  context("definitions section", () => {
    it("should display the definition(s) of the word", () => {
      cy.get(".definition").should("exist")
    })
    // it("should display the synonyms of the word", () => {
    //   // not every word will have synonyms so probabyl not a good thing to test for..
    //   cy.get(".synonyms").contains("evenfall, nightfall, smokefall, vespers")
    // })
  })
})