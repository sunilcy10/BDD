import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given('Open E-Commerce Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

And('Search a product which start from ca', () => {
    cy.get('input[class="search-keyword"]').type('ca')
    cy.get('button[class="search-button"]').click()
})

And('Add to cart cashew', () => {
    cy.get('h4[class="product-name"]').each((el, index) => {
        cy.log(el.text())
        if (el.text() == 'Cashews - 1 Kg') {
            cy.get('[class="product-action"]>button').eq(index).click()
        }
    })
})

When('Place the order and select the country', () => {
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"]>button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('input[class="chkAgree"]').check()
    cy.contains('Proceed').click()

})

Then('Validate the thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible', 'Thank you')
})

