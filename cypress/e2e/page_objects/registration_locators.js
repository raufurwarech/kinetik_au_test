export class RegistrationPage {

    // Elements of customer sign up  
    enter_userName = '[data-qa="signup-name"]'
    enter_emailId = '[data-qa="signup-email"]'
    signUp_button = '[data-qa="signup-button"]'

    // registration elements for new customer
    name_title = '#id_gender1'
    user_name = '#name'
    user_email = '#email'
    user_password = '#password'
    customer_DobDay = '#days'
    customer_DobMonth = '#months'
    customer_DobYear = '#years'
    news_letter = '#newsletter'
    special_offers = '#optin'
    first_name = '#first_name'
    last_name = '#last_name'
    customer_company = '#company'
    customer_addressOne = '#address1'
    customer_addressTwo = '#address2'
    customer_country = '#country'
    customer_state = '#state'
    customer_city = '#city'
    customer_zipcode = '#zipcode'
    customer_phoneNo = '#mobile_number'
    create_accountButton = '[data-qa="create-account"]'
    contiune_button = '[data-qa="continue-button"]'


    enterUserName(uname) {
        cy.get(this.enter_userName)
            .should('be.empty')
            .type(uname)
    }

    enterEmailId(email) {
        cy.get(this.enter_emailId)
            .should('be.empty')
            .type(email)

    }

    signUpButton() {
        cy.get(this.signUp_button).should('be.visible').click()
    }

    // registration elements for new customer

    nameTitle() {
        cy.get(this.name_title).should('be.empty').check()
    }

    userName(name) {
        cy.get(this.user_name).should('have.value', name)

    }

    userEmail(email) {
        cy.get(this.user_email).should('have.value', email)
    }

    userPassword(password) {
        cy.get(this.user_password)
            .should('be.empty')
            .should('be.visible')
            .type(password)

    }

    customerDobDay(day) {
        cy.get(this.customer_DobDay)
            .select('7')
            .should('have.value', day)

    }

    customerDobMonth(month) {
        cy.get(this.customer_DobMonth)
            .select('November')
            .should('have.value', month)

    }

    customerDobYear(year) {
        cy.get(this.customer_DobYear)
            .select('1995')
            .should('have.value', year)

    }

    newsLetter() {
        cy.get(this.news_letter)
            .should('be.empty').check()

    }

    specialOffers() {
        cy.get(this.special_offers)
            .should('be.empty').check()

    }

    firstName(firstName) {
        cy.get(this.first_name)
            .should('be.empty')
            .should('be.visible')
            .type(firstName)

    }

    lastName(lastName) {
        cy.get(this.last_name)
            .should('be.empty')
            .should('be.visible')
            .type(lastName)

    }

    customerCompany(company) {
        cy.get(this.customer_company)
            .should('be.empty')
            .should('be.visible')
            .type(company)

    }

    customerAddressOne(addressOne) {
        cy.get(this.customer_addressOne)
            .should('be.empty')
            .should('be.visible')
            .type(addressOne)

    }

    customerAddressTwo(addressTwo) {
        cy.get(this.customer_addressTwo)
            .should('be.empty')
            .should('be.visible')
            .type(addressTwo)

    }

    customerCountry(country) {
        cy.get(this.customer_country)
            .select('Canada')
            .should('have.value', country)

    }

    customerState(state) {
        cy.get(this.customer_state)
            .should('be.empty')
            .should('be.visible')
            .type(state)

    }

    customerCity(city) {
        cy.get(this.customer_city)
            .should('be.empty')
            .should('be.visible')
            .type(city)

    }


    customerZipcode(zipcode) {
        cy.get(this.customer_zipcode)
            .should('be.empty')
            .should('be.visible')
            .type(zipcode)

    }

    customerPhoneNo(phoneNo) {
        cy.get(this.customer_phoneNo)
            .should('be.empty')
            .should('be.visible')
            .type(phoneNo)

    }

    createAccountButton() {
        cy.get(this.create_accountButton).click()
    }

    verifyAccountCreate() {
        cy.url().should('include', 'https://automationexercise.com/account_created')
            .and('eq', 'https://automationexercise.com/account_created')
            .and('contain', 'account_created')
    }


    contiuneButton() {
        cy.get(this.contiune_button).click()
    }

}