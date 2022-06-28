

import { When, Then, And, Given } from "cypress-cucumber-preprocessor/steps"
let id
Given('user sends request for GET user', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2'
    }).as('getuser')
})
Then('user should display', () => {
    cy.get('@getuser').then(function (res) {
        // cy.log(res)
        expect(res.status).to.eqls(200)
        expect(res.body.per_page).to.eqls(6)
    })
})

Given('user sends request to create user with {word} and {word}', (name, job) => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            "name": name,
            "job": job
        }
    }).as('postuser')
})
Then('user should display {word} and {word}', (name, job) => {
    cy.get('@postuser').then(function (res) {
        cy.log(res)
        expect(res.status).to.eqls(201)
        expect(res.body.name).to.equal(name)
        expect(res.body.job).to.equal(job)
        id = res.body.id
    })
})

Given('user sends the request to update {word} and {word}', (name, job) => {
    cy.request({
        method: 'PUT',
        url: `https://reqres.in/api/users/${id}`,
        body: {
            "name": name,
            "job": job
        }
    }).as('updateusr')
})
Then('user should display updated {word} and {word}', (name, job) => {
    cy.get("@updateusr").then((res) => {
        cy.log(res)
        expect(res.status).to.eql(200)
        expect(res.body.name).to.equal(name)
        expect(res.body.job).to.equal(job)
    })
})

Given('user sends the request to Delete the user', () => {
    cy.request({
        method: 'Delete',
        url: `https://reqres.in/api/users/${id}`
    }).as('deleteusr')
})
Then('user should not display', () => {
    cy.get('@deleteusr').then((res) => {
        expect(res.status).to.eq(204)
        cy.log(res)
        expect(res.body).to.eq('')
    })
})