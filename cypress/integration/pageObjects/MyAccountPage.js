class MyAccountPage 
{
    getRegistrationMessageBox()
    {
        return cy.get('.success.message div:nth-child(1)')
    }

    getPageTitle()
    {
        return cy.get('.page-title')
    }

    getWelcomeText()
    {
        return cy.get(':nth-child(2) > .greet > .logged-in')
    }
    
    getClientMenuBox()
    {
        return cy.get('.nav.items')
    }

    getClientMenuOptions()
    {
        return cy.get('li.nav.item')
    }



}
export default MyAccountPage;