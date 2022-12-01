/// <reference types="cypress" />

import { username } from "../test_data"

// this function to assert some home components
export function home_assertion() {
    cy.get('.login_logo')
    cy.get('.bot_column')
    cy.get('#login_credentials')
    cy.get('.login_password')
}

// this function to do form login assertion, to make sure form well visible 
export function form_login_assertion() {
    cy.get('#user-name')
    cy.get('#password')
    cy.get('#login-button')
}

// this function to login with username and passwird on parameter
export function do_login(username, password) {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    
    cy.get('#login-button').click()
}

// this function to validate home page after login = home product 
export function home_product_assertion() {
    cy.get('.shopping_cart_link')
    cy.get('.product_sort_container')
    cy.get('.inventory_item').first()
    cy.get('.title').first().contains("Products")
}
