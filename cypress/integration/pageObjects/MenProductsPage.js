class MenProductsPage
{
    getLargeSize()
    {
        return cy.get('#option-label-size-143-item-169')
    }

    getRedColour()
    {
        return cy.get('#option-label-color-93-item-58')
    }

    getBlackColour()
    {
        return cy.get('#option-label-color-93-item-49')
    }

    getAddToCardButton()
    {
        return cy.get('#product-addtocart-button')
    }

    getProductAddedMessage()
    {
        return cy.get('.message-success')
    }
}
export default MenProductsPage;



