class ReviewOrderPage
{
    getConfirmAddressCheckbox()
    {
        return cy.get('#billing-address-same-as-shipping-checkmo')
    }
    getPlaceOrderButton()
    {
        return cy.get('[title="Place Order"]')
    }

    getOrderSummary()
    {
        return cy.get('.opc-block-summary')
    }
    

}
export default ReviewOrderPage;
