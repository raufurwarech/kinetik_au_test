export class AddProduct {

    // Elements of home page & cart page 
    cart_button = '.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    view_Cart = 'View Cart'
    check_out_button = '[class="btn btn-default check_out"]'
    login_page_link = 'p.text-center [href="/login"]'

    // elements of after sucessfully login 
    cart_for_checkout = 'ul.nav [href="/view_cart"]'
    Proceed_checkout = '[class="btn btn-default check_out"]'

    // Elements for verify delivery address & details 
    customer_name = '#address_delivery .address_lastname'
    customer_companyName = '#address_delivery > :nth-child(3)'
    delivery_addressOne = '#address_delivery >  :nth-child(4)'
    delivery_addressTwo = '#address_delivery >  :nth-child(5)'
    CityState_zipcode = '#address_delivery'
    country_name = '#address_delivery >  :nth-child(7)'
    customer_phoneNo = '#address_delivery >  :nth-child(8)'

    // Elements for verify Billing address & details 
    customer_name_billing = '#address_invoice  >  :nth-child(2)'
    customer_companyName_billing = '#address_invoice  >  :nth-child(3)'
    billing_address_one = '#address_invoice  >  :nth-child(4)'
    billing_address_two = '#address_invoice  >  :nth-child(5)'
    billing_cityState_zipcode = '#address_invoice >  :nth-child(6)'
    billing_country_name = '#address_invoice  >  :nth-child(7)'
    billing_customer_phoneNo = '#address_invoice  >  :nth-child(8)'
    // elements of Customer order details 
    product_name = '#product-1 h4 a'
    product_Pprice = '.cart_price > p'
    product_subPrice = '.cart_total p.cart_total_price'
    total_price = ':nth-child(4) .cart_total_price'

    // elements of custom comments 
    customer_comment = '[name="message"]'
    place_order = '[href="/payment"]'

    // elements of payment method
    card_name = '[data-qa="name-on-card"]'
    card_number = '[data-qa="card-number"]'
    card_CVC = '[data-qa="cvc"]'
    cardExpiration_month = '[data-qa="expiry-month"]'
    cardExpiration_year = '[data-qa="expiry-year"]'



    // elements of confirm order sucessfully 
    verify_sucess = '#success_message > .alert-success'



    // Elements of home page & cart page 
    verifyUrlLandingPage() {
        cy.url().should('include', 'automationexercise.com')
            .and('eq', 'https://automationexercise.com/')
            .and('contain', 'automationexercise')
        cy.title().should('eq', 'Automation Exercise');
    }

    addToCartbutton() {
        cy.get(this.cart_button).click()
    }

    viewCart() {
        cy.contains(this.view_Cart).click()
    }

    verifyurlCartPage() {
        cy.url().should('include', 'automationexercise.com/view_cart')
            .and('eq', 'https://automationexercise.com/view_cart')
            .and('contain', 'view_cart')
        cy.title().should('eq', 'Automation Exercise - Checkout');

    }

    checkOutButton() {
        cy.get(this.check_out_button).click()

    }

    loginPageLink() {
        cy.get(this.login_page_link).click()

    }



    // elements of after sucessfully login 

    verifyUsername(userName) {
        cy.contains('Logged in as ' + userName).should('exist')
    }

    cartForCheckout() {
        cy.get(this.cart_for_checkout).click()
    }

    ProceedToCheckout() {
        cy.get(this.Proceed_checkout).click()
    }

    // Elements for verify delivery address & details 

    customerName() {
        cy.get(this.customer_name).should('have.text', 'Mr. Raufur Warech')
    }
    customerCompanyName() {
        cy.get(this.customer_companyName).should('have.text', 'XYZ LTD')
    }
    deliveryAddressOne() {
        cy.get(this.delivery_addressOne).should('have.text', 'H-36, Block-E, Torento')
    }

    deliveryAddressTwo() {
        cy.get(this.delivery_addressTwo).should('have.text', 'H-63, Block-F, Montreal')
    }

    CityStateZipcode() {
        cy.get(this.CityState_zipcode).should('include.text', 'Torento')
            .and('include.text', 'Torento')
            .and('include.text', 'Torento')
    }
    countryName() {
        cy.get(this.country_name).should('have.text', 'Canada')
    }
    customerPhoneNo() {
        cy.get(this.customer_phoneNo).should('have.text', '01841785864')

    }


    // Elements for verify Billing address & details 
    customerNameBilling() {
        cy.get(this.customer_name_billing).should('have.text', 'Mr. Raufur Warech')
    }
    customerCompanyNameBilling() {
        cy.get(this.customer_companyName_billing).should('have.text', 'XYZ LTD')
    }
    billingAddressOne() {
        cy.get(this.billing_address_one).should('have.text', 'H-36, Block-E, Torento')
    }
    billingAddressTwo() {
        cy.get(this.billing_address_two).should('have.text', 'H-63, Block-F, Montreal')
    }

    billingCityStateZipcode() {
        cy.get(this.billing_cityState_zipcode).should('include.text', 'Torento')
            .and('include.text', 'Torento')
            .and('include.text', 'Torento')
    }
    billingcountryName() {
        cy.get(this.billing_country_name).should('have.text', 'Canada')
    }

    billingcustomerPhoneNo() {
        cy.get(this.billing_customer_phoneNo).should('have.text', '01841785864')
    }

    // elements of Customer order details 
    productName(pName) {
        cy.get(this.product_name).should('have.text', pName)

    }

    productpPrice(pPrice) {
        cy.get(this.product_Pprice).should('have.text', pPrice)

    }

    productSubPrice(subPrice) {
        cy.get(this.product_subPrice).should('have.text', subPrice)

    }

    totalPrice(totalPrice) {
        cy.get(this.total_price).should('have.text', totalPrice)

    }

    // elements of custom comments 
    customerComment(comment) {
        cy.get(this.customer_comment).type(comment)
    }

    placeOrder() {
        cy.get(this.place_order).click()
    }

    // elements of payment method

    cardName(cardname) {
        cy.get(this.card_name)
            .should('be.visible')
            .and('be.empty')
            .type(cardname)
    }

    cardNumber(cardnum) {
        cy.get(this.card_number)
            .should('be.visible')
            .and('be.empty')
            .type(cardnum)
    }

    cardCVC(cardcvc) {
        cy.get(this.card_CVC)
            .should('be.visible')
            .and('be.empty')
            .type(cardcvc)
    }

    cardExpirationMonth(exmonth) {
        cy.get(this.cardExpiration_month)
            .should('be.visible')
            .and('be.empty')
            .type(exmonth)
    }

    cardExpirationYear(exyear) {
        cy.get(this.cardExpiration_year)
            .should('be.visible')
            .and('be.empty')
            .type(exyear)
    }

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
        cy.get(this.verify_sucess).should('include.text', 'Your order has been placed successfully!')
    }


}







