# Saucedemo Test Automation (WDIO)
#### Project Description

##### This project contains automated tests for the website:
https://www.saucedemo.com/

###### The main focus of testing:

- Form validation (negative testing)

- Handling slow performance (wait strategies)

#### Technologies Used

- WebDriverIO

- JavaScript (Node.js)

- Mocha Framework

- Chrome browser

###### Page Object Model (POM)

 Project Structure
test/
 ├── specs/          # Test files
 ├── pageobjects/    # Page Object classes

 Test Scenarios
 
 ##### UC-1: Form Validation

- Login with empty username and password → error: "Username is required"

- Login with username only → error: "Password is required"

- Checkout without postal code → error message displayed

 ##### UC-2: Handling Latency

- Login using performance_glitch_user

- Wait for page load without using pause()

- Reset app state using burger menu

- Logout from the system

 ##### How to Run Tests

- Install dependencies:

- npm install

- Run tests:

npx wdio run wdio.conf.js
 ##### Expected Result

All tests should pass:

3 passed, 0 failed


 ###### Author:
Saitazim kyzy Rizban
QA Automation Beginner.