describe('Visit the homepage', function() {
  it('Visits the site', function() {
    cy.visit("/")
  })
})

describe("Find cards", function() {
  it("Finds the cards", function() {
    cy.get(".card")
    cy.get("#before")
    cy.get("#after")
  })
})

describe("Find Images", function() {
  it("Finds images", function(){
    cy.get("img")
    cy.get("#logo")
  })
})

describe("Find Made Stews", function(){
  it("Find the stew", function(){
    cy.get(".made_stew")
  })
})

describe("Find Eaten Stews", function(){
  it("Find the stew", function(){
    cy.get(".eaten_stew")
  })
})

describe("Buttons", function(){
  it("Finds all the buttons", function(){
    cy.get("button")
    cy.get(".devour-stew")
    cy.get(".subbtn")
  })
})

describe("Find Form", function(){
  it("Find the form", function(){
    cy.get("form")
  })
})