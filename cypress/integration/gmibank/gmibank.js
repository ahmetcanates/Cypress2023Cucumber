import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {
    cy.visit('https://www.gmibank.com')
})

And('insan simgesine tikla', () => {
    cy.get('#account-menu > .dropdown-toggle').click()
})

And('sign ine tikla', () => {
    cy.get('#login-item > .svg-inline--fa').click()
})

And('username ve password gir', () => {
    cy.get('#username').type('User71')
    cy.get('#password').type('User71.')
})

And('Sign In butonuna tikla', () => {
    cy.get('.btn-primary').click()
})