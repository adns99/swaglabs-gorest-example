// Swag Labs tests created with Cypress

/// <reference types="cypress" />

const { onInventoryPage } = require("../support/pageObjects/inventoryPage")


describe('SwagLabs Test Suite', () => {

    beforeEach('Log in to the app', () => {
        cy.loginToTheApp()
    })


    it('should log into the app', () => {
        cy.log('Logged in successfully!')
    })

    it('should sort by price "Low to high"', () => {
        onInventoryPage.sortProductsContainer('Price (low to high)')
    })

    it('should find and select an item', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()

    })

    it('should sort elements, search item and select it', () => {

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

        cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')

        cy.get('#inventory_container #item_4_title_link').contains('Sauce Labs Backpack').click()

    })

    // it('adds item to the cart and finishes purchase flow', () => {

    // })
    
})