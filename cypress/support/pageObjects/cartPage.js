
export class CartPage {

    selectCheckoutButton() {
        cy.get('[data-test="checkout"]').click()
    }

}

export const onCartPage = new CartPage()