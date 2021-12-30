# swaglabs-gorest-example
Swag Labs FE Automation created with Cypress.io framework and Go Rest API example with Cypress and Postman.

The project was created using [Cypress.io](https://www.cypress.io/) testing tool to automate a purchase flow from [Saucedemo](https://www.saucedemo.com).

## Cypress Automation

### Installation and requirements:

* Node.js 12 or 14 and above
* Environment variables (described below)
* Credentials (within the environment variables, scroll down!)

Download/Clone the repo then `npm i`

### How to run:

You can run the test by using Npx `npx cypress open` or by using the script inside the package.json `npm run cypress`.

**Note:** Sometimes Cypress verifications requires that you run it twice (layer 8?).

Choose the spec you want to run:

![runningCypress](https://user-images.githubusercontent.com/4324156/146694696-7bc14422-bd24-4663-8747-0b1d26b5e84f.gif)


The tests consist of 2 parts:

### firstSwagLabTest.spec.js - About it:

A FE automation for purchase flow, the tests use page objects for complying with the DRY (Don't repeat yourself) pattern. Page objects can be found in the following path: `cypress/support/pageObjects`.

A login command was created so it runs before each test, this command can be found here: `cypress/support/commands.js`

#### FE Requirements:

### Credentials:

- username: `standard_user`
- password: `secret_sauce`

### Environment variables - cypress.json:

From the cypress.json we can set configuration parameters like the browser's viewport size and environment variables.

#### Requirements:

`baseUrl: url` Sets the base url for the FE Automation.

`chromeWebSecurity: false` Due to the type of testing, if we are going to use Chrome we should set this parameter as false.

```
env:
    username: required credentials for the FE log in.
    password: required credentials for the FE log in.
    apiUrl: url of the API to testing.
    token: Bearer token of the API.
```

**Additional Notes:** Cypress tests can run really fast but you can follow each step within the Cypress tool:

![checkingItOut](https://user-images.githubusercontent.com/4324156/146694979-aa3a1b04-ace4-4a34-a92e-048805410dee.gif)


### secondApiTest.spec.js - About it:

This is a small API Test, almost the same inside Postman.

#### Requirements

* Add the apiUrl (inside the cypress.json - environment variables)
* Create/add a Bearer token (environment variables again)

This test includes:

* Get Users request
* Get specific user by id
* Post - Create new user


# Go Rest API Testing Example

An API Testing solution with a Postman collection called `GoRest API`.

The Postman API test can be forked from the Postman app by clickicng the button below.

**Important:** 

1. You need to fork it and save it into your workspace.
2. You can also copy it.
3. Before running the tests, select the environment `Public V1`
4. The Documentation can be found inside the Postman Collection Documentation.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8384695-06c9a7e4-057a-494b-9ee9-8e222b1500c9?action=collection%2Ffork&collection-url=entityId%3D8384695-06c9a7e4-057a-494b-9ee9-8e222b1500c9%26entityType%3Dcollection%26workspaceId%3D1385640f-b2ee-4f2f-b940-4fd6d747132f#?env%5BPublic%20V1%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9nb3Jlc3QuY28uaW4vcHVibGljL3YxIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ1c2VyX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im5ld191c2VyX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im5ld191c2VyX2VtYWlsIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im5ld191c2VyX25hbWUiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9XQ==)


### Final words

The environment variables were included for simplicity matters even though it is not recommended but don't worry, I'll be fine.
