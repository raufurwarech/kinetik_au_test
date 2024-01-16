An example project for automated UI tests using JavaScript-based end-to-end testing framework Cypress with page object model design pattern.

create one test script & each count each task as a test step, for that reason using one it block. 

using Task 1: Automate the given scenario. 
1. Launch browser(Chrome/Firefox)
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Sign up and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12. Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify the success message 'Your order has been placed successfully!'


to run this project run those command in terminal. 
clone repo or download project & open on vs code 
npm init -y
npm install cypress
npm i --save-dev cypress-mochawesome-reporter
npx cypress open (for gui mode)
npx cypress run (for cli mode - report generate)