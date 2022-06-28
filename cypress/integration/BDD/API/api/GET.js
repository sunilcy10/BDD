import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('User sends request to get multiple users', () => {
    cy.request({
        method: "GET",
        url: 'https://reqres.in/api/users?page=2'
    }).as('getuser')
})
Then('User should be display', () => {
    cy.get('@getuser').then((res) => {
        //cy.log(res)
        expect(res.status).to.eq(200)
        expect(res.body.page).to.eq(2)
        expect(res.body.data.length).to.eq(6)
        expect(res.body).property('data').with.length(6)
        expect(res.body).property('total')
        expect(res.body).to.include.keys("total_pages", "per_page")
    })
})

Given('User sends the post request to create with {word} and {word}', (name,job) => {
    cy.request({
        method: "POST",
        url: 'https://reqres.in/api/users',
        body:{
            "name": name,
            "job": job
        }
    }).as('postuser')
})
Then('User should create {word} and {word}', (name,job) => {
    cy.get('@postuser').then((res) => {
        //cy.log(res)
        expect(res.status).to.eq(201)
        expect(res.body).property('id')
        expect(res.body).property('createdAt')
        expect(res.body.name).to.eq(name)
        expect(res.body.job).to.eq(job)
        expect(res.body).to.have.property('id')
    })
})

Given('User sends PUT request to update with {word} and {word}',(name,job)=>{
    cy.request({
        method:'PUT',
        url:'https://reqres.in/api/users/2',
        body:{
            "name": name,
            "job": job
        }
    }).as('putrequest')

})
Then('User should update {word} and {word}',(name,job)=>{
    cy.get('@putrequest').then((res)=>{
      //cy.log(res)
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq(name)
    })

})

Given('User sends request to Delete multiple users',()=>{
    cy.request({
        method:'DELETE',
        url:'https://reqres.in/api/users/2'
    }).as('delete')

})
Then('User should not display',()=>{
    cy.get('@delete').then((res)=>{
     expect(res.status).to.eq(204)
    })
})
