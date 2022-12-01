/// <reference types="cypress" />
const home = require('../helpers/page/home_page.js')
const test_data = require('../helpers/test_data/index.js')

describe('User successfully login with correct credentials', () => {
  it('Go to sauce demo website', () => {
    cy.visit(test_data.main_url)
    
    home.home_assertion()
    home.form_login_assertion()
  })

  it('Put right username and password then login', () => {
    home.do_login(test_data.username, test_data.password)
  })

  it('Validate home page after login', () => {
    home.home_product_assertion()
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
