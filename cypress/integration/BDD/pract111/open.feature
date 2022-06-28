Feature: verify the login


    # Scenario:

    #     Given verify the login correct credentials
    #     When Fill the username
    #     And Fill the password
    #     When Click on login button
    #     Then Assert dashboard

    Scenario: Verify the valid credentials

        Given vesit the url
        When Fill userid and password
            | username | passward |
            | Admin    | admin123 |
        And Click login button
        Then Assertdashboard