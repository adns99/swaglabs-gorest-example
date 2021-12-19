// Swag Labs tests created with Cypress

/// <reference types="cypress" />

const { onInventoryPage } = require("../support/pageObjects/inventoryPage")
const { onNavigationPage } = require("../support/pageObjects/navigationPage")
const { onCartPage } = require("../support/pageObjects/cartPage")
const { onCheckoutPage } = require("../support/pageObjects/checkoutPage")


describe('SwagLabs Test Suite', () => {

    // Login to the app command
    beforeEach('Log in to the app', () => {
        cy.loginToTheApp()
    })

    // Sorts items then selects a product and finish the purchase order
    it('should follow possitive purchase flow', () => {

        onInventoryPage.sortProductOptions('Price (low to high)')

        onInventoryPage.assertItemName('#item_4_title_link > .inventory_item_name', 'Sauce Labs Backpack')

        onInventoryPage.selectAnItem('#inventory_container #item_4_title_link', 'Sauce Labs Backpack')

        onInventoryPage.addItemtoCart('[data-test="add-to-cart-sauce-labs-backpack"]')

        onNavigationPage.selectShoppingCart()

        onCartPage.selectCheckoutButton()

        onCheckoutPage.submitCheckoutForm('Ultra', 'IO', '99999')

        onCheckoutPage.selectContinueButton()

        onCheckoutPage.selectFinishButton()

        onCheckoutPage.assertOrderIsComplete()

    })

})