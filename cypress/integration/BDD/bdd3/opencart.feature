Feature: Ecommerce site  opencart

    # Scenario: login with valid credentials
    #     Given  Visit opencart site
    #     And  Fill the username
    #     And  Fill the passward
    #     When  Click on login button
    #     Then  Validate the text


    Scenario: Login with Invalid Crendetials
        Given  Visit opencart site
        And Fill the username and password
            | username            | password  |
            | sunilcy10@gmail.com | 123456789 |
        When Click on login button
        Then Validate the text










#    Scenario: login with valid credentials
#       Given  Visit ornge HRM Site
#       And  Fill the username
#       And  Fill the password
#       When  Click on login button
#       Then  Validate the Error Message