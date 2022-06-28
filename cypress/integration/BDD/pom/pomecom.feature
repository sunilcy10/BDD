Feature: Ecom site

    Scenario: product booking check on ecomsite
        Given visit the ecom site
        And search product start from ca
        And add to cart cashew
        And place the orderand select country
        Then validate thank you message
