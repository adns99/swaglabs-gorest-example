// Go Rest API tests created with Cypress

/// <reference types="cypress" />

describe('Go Rest API Testing', () => {

    it('GET request: all users', () => {

        cy.request(Cypress.env('apiUrl') + '/users').then((response => {
            expect(response.status).to.eq(200)
        }))
    })

    it('GET request: get specific user', () => {

        cy.request(Cypress.env('apiUrl') + '/users/6').then((response => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.equal(6)
        }))
    })

    it('POST request: Create a new user', () => {

        let randomValue = Math.floor(Math.random() * 7 ) + 100

        let jsonBody = {
            
            "name":"Cypress Test",
            "gender":"male",
            "email": "qa" + randomValue + "@test1255.com",
            "status":"active"

        }

        cy.request({
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + Cypress.env('token') },
            url: Cypress.env('apiUrl') + '/users',
            body: jsonBody,
          }).then(response => {

            expect(response.status).to.equal(201)
          })

    })

    // TODO: DELETE USER REQUEST

})