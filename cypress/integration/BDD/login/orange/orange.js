import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('user on Orange HRM site login', () => {
    cy.visit('http://practice.automationtesting.in/my-account/')
})
When('user enter the username and password', () => {
    cy.get('#username').type('shuham@gmail.com')
    cy.get('#password').type('Shubham@123')
})
And('click on login Button',()=>{
    cy.get('input[value="Login"]').click()
})
Then('user should be navigated to dashboard and logo is visible',()=>{
    cy.contains('Dashboard').should('be.visible')
})

When('',()=>{
    cy.get('#username').type('shuham@gmail.com')
    cy.get('#password').type('Shubham@12')
})
Then('user should be navigated to dashboard and logo is not visible',()=>{
    cy.get('strong').first().should('have.text','ERROR')
})