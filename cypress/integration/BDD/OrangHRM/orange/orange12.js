
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
 

Given('Visit ornge HRM Site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
And('Fill the username',()=>{
    cy.get('#txtUsername').type('Admin')
})
And('Fill the password',()=>{
    cy.get('#txtPassword').type('admin123')
})
When('Click on login button',()=>{
    cy.get('#btnLogin').click
})
Then('Validate the Dashbord text',()=>{
    cy.contains('Dashboard').should('be.visible')
})

Given('Visit ornge HRM Site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
And('Fill the username',()=>{
    cy.get('#txtUsername').type('Admin')
})
And('Fill the password',()=>{
    cy.get('#txtPassword').type('admin')
})
When('Click on login button',()=>{
    cy.get('#btnLogin').click
})
Then('Validate the Error Message',()=>{
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

// import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

// // Given("Visit orange HRM Site", ()=>{
// //     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
// // })

// // And('Fill the username', ()=>{
// //     cy.get('#txtUsername').type('Admin')
// // })

// // And('Fill the password', ()=>{
// //     cy.get('#txtPassword').type('admin123')
// // })

// // When('Click on login button', ()=>{
// //     cy.get('#btnLogin').click()
// // })

// // Then('Validate the Dashbord text', ()=>{
// //      cy.contains('Dashboard').should('be.visible')
// // })


// // And('Fill the username and password', (dataTables)=>{

// //     dataTables.hashes().forEach(element => {
// //         cy.get('#txtUsername').type(element.username)
// //         cy.get('#txtPassword').type(element.password)
        
// //     });

// // })

// // Then('Validate the Error Message', ()=>{
// //     cy.get('#spanMessage').should('have.text', 'Invalid credentials')
// // })



// Given("Visit orange HRM Site", ()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
// })

// And('Fill the usernames', ()=>{
//     cy.get('#txtUsername').type('Admin')
// })

// And('Fill the passwords', ()=>{
//     cy.get('#txtPassword').type('admin')
// })

// When('Click on login buttons', ()=>{
//     cy.get('#btnLogin').click()
// })

// Then('Validate the Error Message', ()=>{
//     cy.get('#spanMessage').should('have.text', 'Invalid credentials')
// })
