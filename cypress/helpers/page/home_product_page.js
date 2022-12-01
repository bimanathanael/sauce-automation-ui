/// <reference types="cypress" />

import { username } from "../test_data"

// this function to assert some products containers, name,
export function list_product_assertion() {
    cy.get('.inventory_item').each(($ele, index) => {
        $ele.get('.inventory_item_name')
        $ele.get('.inventory_item_price')
        $ele.get('.inventory_item_desc')
        $ele.get('#add-to-cart-sauce-labs-backpack')
      })
}

// this function to perform add to cart product from home product with index
export function add_to_cart_index(index) {
    cy.get('#add-to-cart-sauce-labs-backpack').eq(index).contains("Add to cart").click()
}

// this function to perform go to cart page with assert cart notif number
export function go_to_cart_validation(total_item) {
    cy.get('.shopping_cart_badge').contains(total_item)
}
