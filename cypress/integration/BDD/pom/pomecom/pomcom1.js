import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Product from "../../../../support/POM/pomecomHomePg";
const productlist = new Product()

// let url = 'https://rahulshettyacademy.com/seleniumPractise/#/'

Given('visit the ecom site', () => {
    productlist.navigateSite('https://rahulshettyacademy.com/seleniumPractise/#/')
})
And('search product start from ca', () => {
    productlist.searchProduct('ca')
})
And('add to cart cashew', () => {
    productlist.searchProduct('Cashews')
})
And('place the orderand select country', () => {
    productlist.addproduct()
})
Then('validate thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})