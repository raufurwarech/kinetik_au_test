import { landingPage } from "../../support/landing_page";
import { AddProduct } from "../page_objects/add_product_locators";
import { RegistrationPage } from "../page_objects/registration_locators";


describe('landing pages', () => {

    const addProduct = new AddProduct();
    const registrationPage = new RegistrationPage();

    before(() => {
        landingPage();
    });

    it('Verify the title of page', () => {

        cy.fixture('example.json').then((data) => {

            //  Navigate and verify to url 'http://automationexercise.com' 
            addProduct.verifyUrlLandingPage();

            // verify & confirm products to cart
            addProduct.addToCartbutton();
            addProduct.viewCart();

            //  Verify that cart page is displayed & Proceed To Checkout
            addProduct.verifyurlCartPage();
            addProduct.checkOutButton();

            // re-direct ot the login page
            addProduct.loginPageLink();

            // details in Sign up and create account
            registrationPage.enterUserName(data.userName);
            registrationPage.enterEmailId(data.emailId);
            registrationPage.signUpButton();

            // Registration page, Account created & continue shopping 
            registrationPage.nameTitle();
            registrationPage.userName(data.userName);
            registrationPage.userEmail(data.emailId);
            registrationPage.userPassword(data.password);
            registrationPage.customerDobDay(data.dobDay);
            registrationPage.customerDobMonth(data.dobMonth);
            registrationPage.customerDobYear(data.dobYear);
            registrationPage.newsLetter();
            registrationPage.specialOffers();
            registrationPage.firstName(data.firstName);
            registrationPage.lastName(data.lastName);
            registrationPage.customerCompany(data.company);
            registrationPage.customerAddressOne(data.addressOne);
            registrationPage.customerAddressTwo(data.addressTwo);
            registrationPage.customerCountry(data.country);
            registrationPage.customerState(data.state);
            registrationPage.customerCity(data.city);
            registrationPage.customerZipcode(data.zipcode);
            registrationPage.customerPhoneNo(data.phoneNo);
            registrationPage.createAccountButton();

            // Verify create account page  
            registrationPage.verifyAccountCreate();
            registrationPage.contiuneButton();


            // Verify 'Logged in as username' & Proceed To Checkout
            addProduct.verifyUsername(data.userName);
            addProduct.cartForCheckout();
            addProduct.ProceedToCheckout();

            // verify delivery address & details 
            addProduct.customerName();
            addProduct.customerCompanyName();
            addProduct.deliveryAddressOne();
            addProduct.deliveryAddressTwo();
            addProduct.CityStateZipcode();
            addProduct.countryName();
            addProduct.customerPhoneNo();

            // verify Billing address & details 
            addProduct.customerNameBilling();
            addProduct.customerCompanyNameBilling();
            addProduct.billingAddressOne();
            addProduct.billingAddressTwo();
            addProduct.billingCityStateZipcode();
            addProduct.billingcountryName();
            addProduct.billingcustomerPhoneNo();

            // Verify Review order 
            addProduct.productName(data.pName)
            addProduct.productpPrice(data.pPrice)
            addProduct.productSubPrice(data.subPrice)
            addProduct.totalPrice(data.totalPrice)

            // Custom comments & place order
            addProduct.customerComment(data.comment);
            addProduct.placeOrder();

            // payment method details: Name on Card, Card Number, CVC, Expiration date
            addProduct.cardName(data.cardname);
            addProduct.cardNumber(data.cardnum);
            addProduct.cardCVC(data.cardcvc);
            addProduct.cardExpirationMonth(data.exmonth);
            addProduct.cardExpirationYear(data.exyear);

            // Review and Pay and Confirm Orde 
            addProduct.confirmOrder();

            // Verify the success message 'Your order has been placed successfully!'
            addProduct.verifySucess();

        })

    });


});