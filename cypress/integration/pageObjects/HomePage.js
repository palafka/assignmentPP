class HomePage 
{
    getMenTab()
    {
        return cy.get('#ui-id-5')
    }

    getMenTopsCategory()
    {
        return cy.get('#ui-id-17 span:nth-child(2)')
    }

    getMenJacketsCategory()
    {
        return cy.get('#ui-id-19 span')
    }

    getMenTeesCategory()
    {
        return cy.get('#ui-id-21 span')
    }

    getCartIcon()
    {
       return cy.get('.showcart')
    }

    getCheckoutButton()
    {
       return cy.get('#top-cart-btn-checkout')
    }

 
}
export default HomePage;