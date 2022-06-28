Feature: Ecom site : Green cart
    Scenario: Ecom product delivery
        Given visit the site
        When You search a product start with ca
        And Add to cart cashew
        And Place the order
        Then validate thank you message

