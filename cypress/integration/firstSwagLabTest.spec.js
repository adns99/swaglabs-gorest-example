// Swag Labs tests created with Cypress

/// <reference types="cypress" />

describe('SwagLabs Test Suite', () => {

    beforeEach('Log in to the app', () => {
        cy.loginToTheApp()
    })

    it('should log into the app', () => {
        cy.log('Logged in successfully!')
    })

    it('should select price "Low to high"', () => {
        cy.get('.select_container').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.product_sort_container ').select('Price (low to high)')
        } ) 
    })

    it.only('should find and select an item', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()

    })
})