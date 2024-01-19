describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000').get('#showlogin').click().get('#loginbtn').click().get('#showcart').click().get('#clearcart').click().get('#addtocart_1').click().get('#cart').click()
  })
})
