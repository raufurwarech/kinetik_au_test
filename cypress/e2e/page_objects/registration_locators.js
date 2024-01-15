export class RegistrationPage {

    // Elements of customer sign up  

    enterUserName(uname) {
        cy.get('[data-qa="signup-name"]')
            .should('be.empty')
            .type(uname)
    }

    enterEmailId(email) {
        cy.get('[data-qa="signup-email"]')
            .should('be.empty')
            .type(email)

    }

    signUpButton() {
        cy.get('[data-qa="signup-button"]').should('be.visible').click()
    }

    // registration elements for new customer

    nameTitle() {
        cy.get('#id_gender1').should('be.empty').check()
    }

    userName(name) {
        cy.get('#name').should('have.value', name)

    }

    userEmail(email) {
        cy.get('#email').should('have.value', email)
    }

    userPassword(password) {
        cy.get('#password')
            .should('be.empty')
            .should('be.visible')
            .type(password)

    }

    customerDobDay(day) {
        cy.get('#days')
            .select('7')
            .should('have.value', day)

    }

    customerDobMonth(month) {
        cy.get('#months')
            .select('November')
            .should('have.value', month)

    }

    customerDobYear(year) {
        cy.get('#years')
            .select('1995')
            .should('have.value', year)

    }

    newsLetter() {
        cy.get('#newsletter')
            .should('be.empty').check()

    }

    specialOffers() {
        cy.get('#optin')
            .should('be.empty').check()

    }

    firstName(firstName) {
        cy.get('#first_name')
            .should('be.empty')
            .should('be.visible')
            .type(firstName)

    }

    lastName(lastName) {
        cy.get('#last_name')
            .should('be.empty')
            .should('be.visible')
            .type(lastName)

    }

    customerCompany(company) {
        cy.get('#company')
            .should('be.empty')
            .should('be.visible')
            .type(company)

    }

    customerAddressOne(addressOne) {
        cy.get('#address1')
            .should('be.empty')
            .should('be.visible')
            .type(addressOne)

    }

    customerAddressTwo(addressTwo) {
        cy.get('#address2')
            .should('be.empty')
            .should('be.visible')
            .type(addressTwo)

    }

    customerCountry(country) {
        cy.get('#country')
            .select('Canada')
            .should('have.value', country)

    }

    customerState(state) {
        cy.get('#state')
            .should('be.empty')
            .should('be.visible')
            .type(state)

    }

    customerCity(city) {
        cy.get('#city')
            .should('be.empty')
            .should('be.visible')
            .type(city)

    }


    customerZipcode(zipcode) {
        cy.get('#zipcode')
            .should('be.empty')
            .should('be.visible')
            .type(zipcode)

    }

    customerPhoneNo(phoneNo) {
        cy.get('#mobile_number')
            .should('be.empty')
            .should('be.visible')
            .type(phoneNo)

    }

    createAccountButton() {
        cy.get('[data-qa="create-account"]').click()
    }

    verifyAccountCreate() {
        cy.url().should('include', 'https://automationexercise.com/account_created')
            .and('eq', 'https://automationexercise.com/account_created')
            .and('contain', 'account_created')
    }


    contiuneButton() {
        cy.get('[data-qa="continue-button"]').click()
    }

}

