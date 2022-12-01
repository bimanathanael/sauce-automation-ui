/// <reference types="cypress" />
const home_product = require('../helpers/page/home_product_page')
const home = require('../helpers/page/home_page')
const test_data = require('../helpers/test_data/index.js')


describe('User can Add to cart product from home product page', () => {
  const total_item = 1;
  const product_index = 0;

  it('Perform Login ', () => {
    cy.visit(test_data.main_url)
    home.home_assertion()
    home.form_login_assertion()
    home.do_login(test_data.username, test_data.password)
    home.home_product_assertion()
  })

  it('click add to cart on first product ', () => {
    home_product.add_to_cart_index(product_index)
  })

  it('validate cart', () => {
    home_product.go_to_cart_validation(total_item)
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
