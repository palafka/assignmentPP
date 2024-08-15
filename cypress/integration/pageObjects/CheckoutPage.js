class CheckoutPage
{
    getEmailTextbox()
    {
        return cy.get('#customer-email')
    }

    getFirstNameTextbox()
    {
        return cy.get('[name="firstname"]')
    }

    getLastNameTextbox()
    {
        return cy.get('[name="lastname"]')
    }

    getStreetAddressTextbox()
    {
        return cy.get('[name="street[0]"]')
    }

    getCityTextbox()
    {
        return cy.get('[name="city"]')
    }

    getStateDropdown()
    {
        return cy.get('[name="region_id"]')
    }

    getPostalCodeTextbox()
    {
        return cy.get('[name="postcode"]')
    }

    getCountryDropdown()
    {
        return cy.get('[name="country_id"]')
    }

    getPhoneNumberTextbox()
    {
        return cy.get('[name="telephone"]')
    }

    getDeliveryRadioButton()
    {
        return cy.get('[name="ko_unique_1"]')
    }
    
    getNextButton()
    {
        return cy.get('.button')
    }
 
}
export default CheckoutPage;