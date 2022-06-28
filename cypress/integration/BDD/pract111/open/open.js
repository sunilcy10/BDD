
import{Given,And,Then,When} from "cypress-cucumber-preprocessor/steps"

// Given('verify the login correct credentials',()=>{
//    cy.visit('https://opensource-demo.orangehrmlive.com/')
// })
// When('Fill the username',()=>{
//     cy.get('#txtUsername').type('Admin')
// })
// And('Fill the password',()=>{
//    cy.get('#txtPassword').type('admin123')
// })
// When('When Click on login button',()=>{
//    cy.get('#btnLogin').click()
// })
// Then('Assert dashboard ',()=>{
// cy.get('#').should('have.text','')
// })


// Given verify the login correct credentials
// When Fill the username
// And Fill the password
// When Click on login button
// Then Assert dashboard 



Given('vesit the url',()=>{
   cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('Fill userid and password',(data)=>{
    data.hashes().forEach(el=>{
        cy.get('#txtUsername').type(el.username)
        cy.get('#txtPassword').type(el.password)
    })
})
And('Click login button',()=>{
cy.get('#btnLogin').click()
})
Then('Assertdashboard',()=>{
    cy.get().should('have.text','')
})


// Scenario: Verify the valid credentials

// Given vesit the url
// When Fill userid and password
//     | username | passward   |
//     | 'Admin'  | 'admin123' |
// And Click login button
// Then Assertdashboard


