Feature: Ecommerce site GREEMKART

    Scenario: ' E-Commerce Product Delivery'
        Given Open E-Commerce Site
        And Search a product which start from ca
        And Add to cart cashew
        When Place the order and select the country
        Then Validate the thank you message
