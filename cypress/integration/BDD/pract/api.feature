Feature: regress API

    Scenario: Test regress API's


        Given User sends request to get multiple users
        Then User should be display


    Scenario Outline: Creat the user

        Given User sends request to creat multiple user <name> and <job>
        Then User should be display <name> and <job>

        Examples:
            | name   | job    |
            | sunil  | tester |
            | pratik | dev    |
            | shashi | 5s     |


    Scenario Outline: Update the post

        Given User sends request to update the user <name> and <job>
        Then User should be update <name> and <job>

    Examples:
        
            | name    | job        |
            | ajay    | post       |
            | shubham | contractor |