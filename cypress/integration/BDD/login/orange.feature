Feature: Ecommerce Site : Orange HRM

    Scenario: User successfully login via valid username
        Given user on Orange HRM site login
        When user enter the username and password
        And click on login Button
        Then user should be navigated to dashboard and logo is visible


    Scenario: User successfully not login
        Given user on Orange HRM site login
        When user enters the username and password
        And click on login Button
        Then user should be navigated to dashboard and logo is not visible