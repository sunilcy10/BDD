import{Given,And,Then,When} from "cypress-cucumber-preprocessor/steps"

// Given visit the site
// When You search a product start with ca
// And Add to cart cashew
// And Place the order
// Then validate thank you message

Given('visit the site',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.log('test1')
})
When('You search a product start with ca',()=>{
    cy.get('[type="search"]').click().type('ca')
    cy.get('button[type="submit"]').click()
    cy.log('test2')
})
And('Add to cart cashew',()=>{
    cy.get('h4[class="product-name"]').each((el,index)=>{
        if(el.text()=='Cashews - 1 Kg'){
            cy.get('[class="product-action"] button').eq(index).click()
        }
    })
    cy.get('.cart-icon > img').click()
    cy.log('test3')
})
And('Place the order',()=>{
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get(':nth-child(14)').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()
    cy.log('test4')
})
Then('validate thank you message',()=>{
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
    cy.log('test5')
})
