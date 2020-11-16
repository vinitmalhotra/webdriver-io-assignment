Feature: Register on the website

Scenario: Signup a new customer
  
    Given I'm on the Automation Practise landing page
     When I click "Sign in" link
     When I enter the email address "vinit0@gmail.com"
     When I click "Create an account" button
     # resuable function manner
     When I select "Mr" title
     When I enter first name "Vinit"
     When I enter last name "Malhotra"
     When I enter emailid "vinit0@gmail.com"
     When I enter password "Password1"
     When I enter date "4"
     When I enter month "3"
     When I enter year "1987"
     When I enter address "55 collins street"
     When I enter city "Melbourne"
     When I enter state "Arizona"
     When I enter postcode "85006"
     When I enter country "United States"
     When I enter mobilephone "0449100411"
     When I click "Register" button
    Then I Validate "Vinit Malhotra" on the landing screen
    When I search a product "Printed Chiffon Dress"
    When I click "Search" button
     When I move to "In stock" button
     When I click the "Add to cart" button
     When I click the "Proceed to checkout" button
     When I navigate by clicking "Proceed to checkout" button
     When I navigate by clicking "Proceed to checkout" button
     When I agree TC
     When I navigate by clicking "Proceed to checkout" button
    Then I Validate "Printed Chiffon Dress" on the payments page
  
     

    


