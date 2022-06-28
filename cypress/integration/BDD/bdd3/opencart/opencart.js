import { Given, And, Then } from "cypress-cucumber-preprocessor/steps"


// Given('Visit opencart site', () => {
//     cy.visit('https://www.opencart.com/index.php?route=account/login')
// })
// And('Fill the username', () => {
//     cy.get('#input-email').type('sunilcy10@gmail.com')
// })
// Then('Fill the passward', () => {
//     cy.get('#input-password').type('123456789')
// })
// When('Click on login button', () => {
//     cy.get('button[class="btn btn-primary btn-lg hidden-xs"]').click({ force: true })
// })
// Then('Validate the text', () => {
//     cy.get('h2').should('contain', 'Please confirm who you are!')
// })



Given('Visit opencart site', () => {
    cy.visit('https://www.opencart.com/index.php?route=account/login')
})
And('Fill the username and password', (dataTables) => {

    dataTables.hashes().forEach(element => {
        cy.get('#input-email').type(element.username)
        cy.get('#input-password').type(element.password)

    });

})
When('Click on login button', () => {
    cy.get('button[class="btn btn-primary btn-lg hidden-xs"]').click({ force: true })
})
Then('Validate the text', () => {
    cy.get('h2').should('contain', 'Please confirm who you are!')
})




