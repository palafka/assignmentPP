class MyOrdersPage
{
    getViewOrder()
    {
        return cy.get('.actions a.action.view')
    }

    getOrderStatus()
    {
        return cy.get('.order-status')
    }

    getProductSubtotal()
    {
        return cy.get('.col.price span.price')
    }

    getOrderGrandTotal()
    {
        return cy.get('.grand_total span.price')
    }

}
export default MyOrdersPage;