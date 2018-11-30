describe('Make a Stew', function() {
  it('Visits the site', function() {
    cy.visit("/")
  })

  it('Fills in form', function() {
    cy.get('#stewName')
    .type('Pumpkin Soup')
  })

  it('Submits Stew', function() {
    cy.get('#stewName').then(($name) => {
      const txt = $name.val()

      cy.get('.subbtn').click()
      cy.wait(2)
      cy.get('#before').contains('Pumpkin Soup')
    })
  })
})