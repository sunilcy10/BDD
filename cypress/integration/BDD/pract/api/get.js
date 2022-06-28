import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('User sends request to get multiple users', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getrequest')
})
Then('User should be display', () => {
    cy.get('@getrequest').then((res) => {
        //cy.log(res)
        expect(res.status).to.eq(200)
    })
})


Given('User sends request to creat multiple user {word} and {word}', (name, job) => {
    cy.request({
        method: "POST",
        url: 'https://reqres.in/api/users',
        body: {
            "name": name,
            "job": job
        }
    }).as('postREQ')
})
Then('User should be display {word} and {word}', (name, job) => {
    cy.get('@postREQ').then((res) => {
        //cy.log(res)
        expect(res.status).to.eq(201)
        expect(res.body).to.have.property('id')
    })
})

Given("User sends request to update the user {word} and {word}", (name, job) => {
    cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: {
            'name': name,
            'job': job
        }
    }).as("putreq")
})
Then('User should be update {word} and {word}', (name, job) => {
    cy.get('@putreq').then((res) => {
        expect(res.status).to.eq(200)
    })
})