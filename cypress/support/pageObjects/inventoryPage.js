
export class InventoryPage {

    sortProductOptions(option){

        cy.get('.select_container').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.product_sort_container ').select(option)
            })
    }

    assertItemName(value, name){

        cy.get(value).should('contain', name)
    }

    selectAnItem(value, itemName){

        cy.get(value).contains(itemName).click()
    }

    addItemtoCart(value){

        cy.get(value).click()
    }

}

export const onInventoryPage = new InventoryPage()