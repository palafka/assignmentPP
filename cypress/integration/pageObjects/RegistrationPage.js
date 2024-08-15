class RegistrationPage
{
    getFirstNameTextbox()
    {
        return cy.get('#firstname')
    }
    getLastNameTextbox()
    {
        return cy.get('#lastname')
    }
    getEmailTextbox()
    {
        return cy.get('#email_address')
    }
    getPasswordTextbox()
    {
        return cy.get('#password')
    }
    getPasswordConfirmationTextbox()
    {
        return cy.get('#password-confirmation')
    }
    getPasswordValidationMessageBox()
    {
        return cy.get('#password-strength-meter')
    }
    getSubmitButton()
    {
        return cy.get('button[title="Create an Account"]')
    }
    getPasswordErrorMessage()
    {
        return cy.get('#password-confirmation-error')
    }
    
}

export default RegistrationPage;