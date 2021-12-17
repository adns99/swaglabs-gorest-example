
export class InventoryPage {

    sortProductsContainer(option) {

        cy.get('.select_container').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.product_sort_container ').select(option)
            })
    }

}

export const onInventoryPage = new InventoryPage()