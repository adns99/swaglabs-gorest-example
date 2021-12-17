
export class NavigationPage {

    selectShoppingCart() {
        cy.get('.shopping_cart_link').click()
    }

}

export const onNavigationPage = new NavigationPage()