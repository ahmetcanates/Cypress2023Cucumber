import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {
    cy.visit('https://www.koalaresorthotels.com')
    cy.get('#navLogon > .nav-link').click()
})

Given('datalari kullanarak sayfaya gir', (dataTable) => {
    cy.get('#UserName').type(dataTable.rawTable[1][0])
    cy.get('#Password').type(dataTable.rawTable[1][1])
})

Given('login butonuna tikla', () => {
    cy.get('#btnSubmit').click()
})

Given('sayfaya girildigini onayla', () => {
    cy.get('#edit-form > :nth-child(2)').should('contain.text', 'Manager')
})

