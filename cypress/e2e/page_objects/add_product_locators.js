export class AddProduct {

    // Elements of home page & cart page 
    verifyUrlLandingPage() {
        cy.url().should('include', 'automationexercise.com')
            .and('eq', 'https://automationexercise.com/')
            .and('contain', 'automationexercise')
        cy.title().should('eq', 'Automation Exercise');
    }

    addToCartbutton() {
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }

    viewCart() {
        cy.contains('View Cart').click()
    }

    verifyurlCartPage() {
        cy.url().should('include', 'automationexercise.com/view_cart')
            .and('eq', 'https://automationexercise.com/view_cart')
            .and('contain', 'view_cart')
        cy.title().should('eq', 'Automation Exercise - Checkout');

    }

    checkOutButton() {
        cy.get('[class="btn btn-default check_out"]').click()

    }

    loginPageLink() {
        cy.get('p.text-center [href="/login"]').click()

    }

    // elements of after sucessfully login 

    verifyUsername(userName) {
        cy.contains('Logged in as ' + userName).should('exist')
    }

    cartForCheckout() {
        cy.get('ul.nav [href="/view_cart"]').click()
    }

    ProceedToCheckout() {
        cy.get('[class="btn btn-default check_out"]').click()
    }

    // Elements for verify delivery address & details 

    customerName() {
        cy.get('#address_delivery .address_lastname').should('have.text', 'Mr. Raufur Warech')
    }
    customerCompanyName() {
        cy.get('#address_delivery > :nth-child(3)').should('have.text', 'XYZ LTD')
    }
    deliveryAddressOne() {
        cy.get('#address_delivery > :nth-child(4)').should('have.text', 'H-36, Block-E, Torento')
    }

    deliveryAddressTwo() {
        cy.get('#address_delivery > :nth-child(5)').should('have.text', 'H-63, Block-F, Montreal')
    }

    CityStateZipcode() {
        cy.get('#address_delivery > :nth-child(6)').should('include.text', 'Torento')
            .and('include.text', 'Torento')
            .and('include.text', 'Torento')
    }
    countryName() {
        cy.get('#address_delivery > :nth-child(7)').should('have.text', 'Canada')
    }
    customerPhoneNo() {
        cy.get('#address_delivery > :nth-child(8)').should('have.text', '01841785864')

    }


    // Elements for verify Billing address & details 
    customerNameBilling() {
        cy.get('#address_invoice  > :nth-child(2)').should('have.text', 'Mr. Raufur Warech')
    }
    customerCompanyNameBilling() {
        cy.get('#address_invoice  > :nth-child(3)').should('have.text', 'XYZ LTD')
    }
    billingAddressOne() {
        cy.get('#address_invoice  > :nth-child(4)').should('have.text', 'H-36, Block-E, Torento')
    }
    billingAddressTwo() {
        cy.get('#address_invoice  > :nth-child(5)').should('have.text', 'H-63, Block-F, Montreal')
    }

    billingCityStateZipcode() {
        cy.get('#address_invoice > :nth-child(6)').should('include.text', 'Torento')
            .and('include.text', 'Torento')
            .and('include.text', 'Torento')
    }
    billingcountryName() {
        cy.get('#address_invoice  > :nth-child(7)').should('have.text', 'Canada')
    }

    billingcustomerPhoneNo() {
        cy.get('#address_invoice  > :nth-child(8)').should('have.text', '01841785864')
    }

    // elements of Customer order details 
    productName(pName) {
        cy.get('#product-1 h4 a').should('have.text', pName)

    }

    productpPrice(pPrice) {
        cy.get('.cart_price > p').should('have.text', pPrice)

    }

    productSubPrice(subPrice) {
        cy.get('.cart_total p.cart_total_price').should('have.text', subPrice)

    }

    totalPrice(totalPrice) {
        cy.get(':nth-child(4) .cart_total_price').should('have.text', totalPrice)

    }

    // elements of custom comments 
    customerComment(comment) {
        cy.get('[name="message"]').type(comment)
    }

    placeOrder() {
        cy.get('[href="/payment"]').click()
    }

    // elements of payment method

    cardName(cardname) {
        cy.get('[data-qa="name-on-card"]')
            .should('be.visible')
            .and('be.empty')
            .type(cardname)
    }

    cardNumber(cardnum) {
        cy.get('[data-qa="card-number"]')
            .should('be.visible')
            .and('be.empty')
            .type(cardnum)
    }

    cardCVC(cardcvc) {
        cy.get('[data-qa="cvc"]')
            .should('be.visible')
            .and('be.empty')
            .type(cardcvc)
    }

    cardExpirationMonth(exmonth) {
        cy.get('[data-qa="expiry-month"]')
            .should('be.visible')
            .and('be.empty')
            .type(exmonth)
    }

    cardExpirationYear(exyear) {
        cy.get('[data-qa="expiry-year"]')
            .should('be.visible')
            .and('be.empty')
            .type(exyear)
    }

    // elements of confrim & place order
    confirmOrder() {
        cy.get('#payment-form').then(form$ => {
            form$.on('submit', e => {
                e.preventDefault()
            })
        })
        cy.get('#submit').click()
    }

    // elements of confirm order sucessfully 
    verifySucess() {
        cy.get('#success_message > .alert-success').should('include.text', 'Your order has been placed successfully!')
    }

}

