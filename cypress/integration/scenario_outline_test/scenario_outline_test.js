import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('url git', () => {
   cy.visit('https://www.google.com')
}) 

Given('arama yapilacak {string}', (capitals) => {
    cy.get('#APjFqb').type(capitals)
    cy.contains("Google'da Ara").click()
    cy.wait(2000)
    //click'te problem olursa click({force:true}) kullanilacak
})

Given('arama yapildigini kontrol et {string}', (capitals) => {
    cy.title().should('include', capitals)
})