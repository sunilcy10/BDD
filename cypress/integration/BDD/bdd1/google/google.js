import { Given, Then } from "cypress-cucumber-preprocessor/steps/index";
// import { Given, Then } from "cypress-cucumber-preprocessor/steps";


Given('I open a Google page', () => {
    cy.visit('https://www.google.com/')
})
// Given('I open Google page', () => {
//     cy.visit( 'https://google.com')
//   })
  
Then(`I see {string'} in the title`, (title) => {
    cy.title().should('include', title)
})
// Then(`I see {string} in the title`, (title) => {
//     cy.title().should('include', title)
//   })
Then(`I see {string} in the url`, (url) => {
    cy.url().should('include', url)
})

// Then(`I see {string} in the url`, (url) => {
//   cy.url().should('include', url)
// })

