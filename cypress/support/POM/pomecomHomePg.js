class Product {
    navigateSite(url) {
        cy.visit(url)
    }
    searchProduct(ele) {
        cy.get('[class="search-keyword"]').type(ele)

    }
    selectProduct(value) {
        cy.get('[class="products"] h4').each((el, index) => {
            if (el.text().replace(' - 1 Kg', ' ').trim() == value) {
                cy.get('[class="product-action"] button').eq(index).click()
            }
        })
    }
    addproduct() {
        cy.get('img[alt="Cart"]').click()
        cy.get('[class="action-block"] >button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get('input[class="chkAgree"]').click()
        cy.get('button').click()
    }
}
export default Product
