/// <reference types="cypress" />
const home_product = require('../helpers/page/home_product_page')
const home = require('../helpers/page/home_page')
const test_data = require('../helpers/test_data/index.js')


describe('User can see list of products', () => {
  it('Perform Login ', () => {
    cy.visit(test_data.main_url)
    home.home_assertion()
    home.form_login_assertion()
    home.do_login(test_data.username, test_data.password)
    home.home_product_assertion()
  })

  it('Check for list of product, name, price, & add to cart button', () => {
    home_product.list_product_assertion()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
