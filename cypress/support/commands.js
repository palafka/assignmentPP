Cypress.Commands.add("selectAccountSubpage", (menuOption) => { 
    cy.get('li.nav.item').each(($el, index, $list) => {
        if($el.text().includes(menuOption))
        {
            cy.get('li.nav.item').eq(index).click()
        }
        })
    })

Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.column').find('.item.product.product-item').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {   
            cy.get('.name > .product-item-link').eq(index).click({force: true})
        }
        })
    })
