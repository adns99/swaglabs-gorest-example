
export class CheckoutPage {

    submitCheckoutForm(firstName, lastName, postalCode) {
        
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]').type(lastName)
        cy.get('[data-test="postalCode"]').type(postalCode)

    }

    selectContinueButton() {

        cy.get('[data-test="continue"]').click()
    }

    cancelCheckoutButton() {

        cy.get('[data-test="cancel"]').click()
    }

    selectFinishButton() {
        cy.get('[data-test="finish"]').click()
    }

    assertOrderIsComplete() {
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    }

}

export const onCheckoutPage = new CheckoutPage()