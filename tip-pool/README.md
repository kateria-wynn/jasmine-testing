# Tip Pool

For this assignment, I wrote tests using the Jasmine testing library for an existing code base.
The goal was to thoroughly test each function in the app.

## Description

‘Tip Pool’ is an application that tracks the total tips generated from a group of servers in a restaurant. It then calculates the payout for each server.

## Requirements

- Thoroughly read the code base
- Clean up the dom after the test is run using afterEach
- Write a test for each function found in server.js
- Create a helpers.test.js file and test each function in helpers.js
- Create a payments.test.js file and test each function in payments.js
- When finished you should have three .test.js files one for each .js file
- Review the functionality of appendTd(tr, value)
- Create a appendDeleteBtn(tr), it will be similar to append(tr, value). This function will create a ‘td’ with the value ‘X’, when clicked it will delete the table row it belongs to
- Write the functionality for appending a ‘td’ to a ‘tr’ with the value ‘X’
- Set an click event listener on the ‘td’ that will remove the parent ‘tr’ from the dom. You will have to find a way to access the parent row of the ‘td’ from the click event
- Write tests for appendDeleteBtn(tr). You may notice the difficulty of simulating a click with vanilla javascript so do not spend too much time on testing the html after the DOM is updated (later we will study approaches for this with other libraries).
- Repeat the process for removing a payment from the payment table
