# Nescafe End-to-End Testing

This project contains end-to-end tests for the Nescafe website using Cypress.

<div align="center">

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
[![QA HUNT - Academy](https://img.shields.io/badge/QA_HUNT-Academy-blue?style=for-the-badge)](https://)

</div>

## Test

Move the file to  `cypress/e2e/`.

They cover the following scenarios:

* Invalid name error validation in registration form
* Invalid password error validation in login form
* Blank email error validation in login form
* Blank password error validation in login form

## Running Tests

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `npx cypress open` to open the Cypress Test Runner
4. Click on `nescafe-register.cy.js` file to run the tests

The tests are configured to run in headless mode on the latest Chrome browser.

## Resources

The tests use:

* Cypress for end-to-end testing
* cypress-plugin-steps for adding test steps
* Chance for generating random test data

## Test Scenarios

### Invalid Name Error Validation in Registration Form #1

* Access the https://www.nescafe.com/tr website.
* Click on the Profile logo in the upper menu.
* Click on the "Sign Up" option.
* Enter an invalid name value in the form.
* Fill in the other information
    * Surname: [random surname]
    * Email: [random email]
    * Date of birth: 01/02/1990
* Click on the "Continue" button.
* Verify that the "This field is required" error message appears.

### Invalid Password Error Validation in Login Form #2

* Access the https://www.nescafe.com/tr website.
* Click on the Profile logo in the upper menu.
* Enter an invalid password in the form.
* Click on the "Log In" option.
* Verify that the "Invalid email address or password" error message appears.

### Blank Email Error Validation in Login Form #3

* Access the https://www.nescafe.com/tr website.
* Click on the Profile logo in the upper menu.
* Leave the email field blank in the form.
* Click on the "Log In" option.
* Verify that the "This field is required" error message appears.

### Blank Password Error Validation in Login Form #4

* Access the https://www.nescafe.com/tr website.
* Click on the Profile logo in the upper menu.
* Click on the "Log In" option.
* Leave the password field blank in the form.
* Click on the "Log In" button.
* Verify that the "This field is required" error message appears.
