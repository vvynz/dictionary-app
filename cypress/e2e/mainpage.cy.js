describe('main page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000')
  })

  it("has a header with the correct text", () => {
    cy.getByData("header").contains("dictionary")
  })

  context("definition header", () => {
    it("displays the default keyword", () => {
      cy.get(".definition-header").contains("dusk")
    })
    it("has an audio player", () => {
      // this may not be a good test since I'm aware that the api doesn't have an audio file available for every word...
      // cy.getByData("audioPlayer").should("exist") // this works on the div wrapped around the audio player component only
      cy.get(".react-audio-player").should("exist")
    })
  })

  context("definitions section", () => {
    it("should display the definition(s) of the word", () => {
      cy.getByData("definition").should("exist")
    })
    // it("should display the synonyms of the word", () => {
    //   // not every word will have synonyms so probabyl not a good thing to test for..
    //   cy.get(".synonyms").contains("evenfall, nightfall, smokefall, vespers")
    // })
  })
})