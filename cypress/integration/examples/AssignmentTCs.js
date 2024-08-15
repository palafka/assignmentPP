import RegistrationPage from '../pageObjects/RegistrationPage'
import MyAccountPage from '../pageObjects/MyAccountPage'
import HomePage from '../pageObjects/HomePage'
import MenProductsPage from '../pageObjects/MenProductsPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import ReviewOrderPage from '../pageObjects/ReviewOrderPage'
import ThankYouPage from '../pageObjects/ThankYouPage'
import MyOrdersPage from '../pageObjects/MyOrdersPage'

describe('AssignmentTCs', () => {

  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })

it('TC1', function () {
    const registrationPage = new RegistrationPage() 
    const accountPage = new MyAccountPage() 
    const randomEmail = Math.random().toString().substring(2,10)+"@test.com"
        cy.visit(Cypress.env('url')+"/customer/account/create/")
        registrationPage.getFirstNameTextbox().type(this.data.firstName)
        registrationPage.getLastNameTextbox().type(this.data.lastName)
        registrationPage.getEmailTextbox().type(randomEmail)
        registrationPage.getPasswordTextbox().type(this.data.password)
        registrationPage.getPasswordValidationMessageBox().should('contains.text','Strong')
        registrationPage.getPasswordConfirmationTextbox().type(this.data.incorrectPassword)
        registrationPage.getSubmitButton().click()
        registrationPage.getPasswordErrorMessage().should('exist')
        registrationPage.getPasswordConfirmationTextbox().clear()
        registrationPage.getPasswordConfirmationTextbox().type(this.data.password)
        registrationPage.getSubmitButton().click()
        accountPage.getRegistrationMessageBox().should('contains.text','Thank you for registering')
    })
  
it('TC2', function () {
    const registrationPage = new RegistrationPage() 
    const accountPage = new MyAccountPage() 
    const randomEmail = Math.random().toString().substring(2,10)+"@test.com"
        cy.visit(Cypress.env('url')+"/customer/account/create/")
        registrationPage.getFirstNameTextbox().type(this.data.firstName)
        registrationPage.getLastNameTextbox().type(this.data.lastName)
        registrationPage.getEmailTextbox().type(randomEmail)
        registrationPage.getPasswordTextbox().type(this.data.password)
        registrationPage.getPasswordConfirmationTextbox().type(this.data.password)
        registrationPage.getSubmitButton().click()
        accountPage.getPageTitle().should('contains.text', 'My Account')
        accountPage.getWelcomeText().should('contains.text', this.data.firstName)
        accountPage.getClientMenuBox().should('exist')
    })

it('OrderTC', function () {
    const homePage = new HomePage()
    const menProducts = new MenProductsPage ()
    const checkoutPage = new CheckoutPage ()
    const revieworderPage = new ReviewOrderPage()
    const thankyouPage = new ThankYouPage()
    const registrationPage = new RegistrationPage() 
    const ordersPage = new MyOrdersPage()
    const randomEmail = Math.random().toString().substring(2,10)+"@test.com"
        cy.visit(Cypress.env('url'))
        homePage.getMenTab().trigger('mouseover')
        homePage.getMenTopsCategory().trigger('mouseover')
        homePage.getMenJacketsCategory().click({force: true})
        cy.selectProduct('Beaumont Summit Kit')
        menProducts.getRedColour().click()
        menProducts.getLargeSize().click()
        menProducts.getAddToCardButton().click()
        menProducts.getProductAddedMessage().should('exist')
        homePage.getMenTab().trigger('mouseover')
        homePage.getMenTopsCategory().trigger('mouseover')
        homePage.getMenTeesCategory().click({force: true})
        cy.selectProduct('Strike Endurance Tee')
        menProducts.getLargeSize().click()
        menProducts.getBlackColour().click()
        menProducts.getAddToCardButton().click()
        menProducts.getProductAddedMessage().should('exist')
        homePage.getCartIcon('.showcart').click()
        homePage.getCheckoutButton('.showcart').click({force: true})
        cy.wait(4000)
        checkoutPage.getEmailTextbox().type(randomEmail,)
        checkoutPage.getFirstNameTextbox().type(this.data.firstName)
        checkoutPage.getLastNameTextbox().type(this.data.lastName)
        checkoutPage.getStreetAddressTextbox().type(this.data.streetAddress)
        checkoutPage.getCityTextbox().type(this.data.city)
        checkoutPage.getStateDropdown().select('Florida')
        checkoutPage.getPostalCodeTextbox().type(this.data.postalCode)
        checkoutPage.getCountryDropdown().select('United States')
        checkoutPage.getPhoneNumberTextbox().type(this.data.phoneNumber)
        checkoutPage.getDeliveryRadioButton().check().should('be.checked')
        checkoutPage.getNextButton().click()
        revieworderPage.getConfirmAddressCheckbox().check().should('be.checked')
        revieworderPage.getOrderSummary().should('exist')

// API verification 

        cy.intercept('GET','https://magento.softwaretestingboard.com/checkout/onepage/success/').as('successPurchase')
        revieworderPage.getPlaceOrderButton().click()
        cy.wait('@successPurchase').its('response.statusCode').should('to.equal', 200)
        thankyouPage.getOrderId().should('contains.text','order')

// account registration and order review

        thankyouPage.getCreateAccountButton().click()
        registrationPage.getPasswordTextbox().type(this.data.password)
        registrationPage.getPasswordConfirmationTextbox().type(this.data.password)
        registrationPage.getSubmitButton().click()
        cy.selectAccountSubpage('My Orders')
        ordersPage.getViewOrder().click()
        ordersPage.getOrderStatus().then(function(element)
        {
            const actualStatus = element.text()
            expect(actualStatus.includes("Pending")).to.be.true
        })
        var sum=0
        ordersPage.getProductSubtotal().each(($el, index, $list) => 
        {
            const actualPrice = $el.text()
            var amount= actualPrice.split("$")
            amount = amount[1]
            sum = Number(sum) + Number(amount)
        })
        ordersPage.getOrderGrandTotal().then(function(element)
        {
            const grandTotal = element.text()
            var total = grandTotal.split("$")
            total = total[1]
            expect(Number(total)).to.equal(sum)
        })
    })
})

 

    
    
