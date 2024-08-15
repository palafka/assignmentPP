class ThankYouPage
{
    getOrderId()
    {
        return cy.get('.checkout-success')
    }

    getCreateAccountButton()
    {
        return cy.get('#registration > div:nth-child(3) > a')
    }

}
export default ThankYouPage;
