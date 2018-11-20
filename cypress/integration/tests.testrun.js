/// <reference types="Cypress" />

context('Aliasing', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:8000')
  // })

  describe('Visit Home Page', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('/')
    })
  })

  describe('Find Eat Me Button', function() {
    it('finds the content "type"', function() {
      cy.get('#before').then()
      // Find elements with class 'devour-stew'
      cy.get('.devour-stew')
      // Check if button contains the text 'EAT ME!'
      .contains('EAT ME!')
      // Click the button
      .click().then(($stw) => {
        let txt = $stw.text()
        cy.get('#after').contains(txt)
      })
    })
  })

})