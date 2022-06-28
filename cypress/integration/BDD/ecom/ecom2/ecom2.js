import { When, Then, And, Given } from "cypress-cucumber-preprocessor/steps"

Given('visit the site', () => {
    cy.visit('http://practice.automationtesting.in/my-account/')
})
When('fill the username and password', (data) => {
    data.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    });
})
And('click on login Button', () => {
    cy.get('input[name="login"]').click()
})
Then('Validate the dashboard', () => {
    cy.url().should('contains', 'account')
})


When('fill the {word} and {word}', (users, passwords) => {
    cy.get('#username').type(users)
    cy.get('#password').type(passwords)
})
// Then('Validate the dashboard', () => {
//     cy.url().should('contains', 'account')
// })