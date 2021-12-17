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
        onInventoryPage.sortProductOptions('Price (low to high)')
    })

    it('should find and select an item', () => {
        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()

    })

    it.only('should sort, search and select a product', () => {

        onInventoryPage.sortProductOptions('Price (low to high)')

        onInventoryPage.assertItemName('#item_4_title_link > .inventory_item_name', 'Sauce Labs Backpack')

        onInventoryPage.selectAnItem('#inventory_container #item_4_title_link', 'Sauce Labs Backpack')

        onInventoryPage.addItemtoCart('[data-test="add-to-cart-sauce-labs-backpack"]')

    })

    // it('adds item to the cart and finishes purchase flow', () => {

    // })
    
})