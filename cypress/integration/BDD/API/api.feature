Feature: regress API

    Scenario: GET user via API

        Given User sends request to get multiple users
        Then User should be display

    Scenario Outline: Create user via API

        Given User sends the post request to create with <name> and <job>
        Then User should create <name> and <job>

        Examples:
            | name    | job      |
            | sunil   | tester   |
            | pratik  | devloper |
            | shashi  | tester   |
            | shubham | devloper |

    Scenario Outline: Update user via API

        Given User sends PUT request to update with <name> and <job>
        Then User should update <name> and <job>

        Examples:
            | name   | job       |
            | yogesh | mech      |
            | ajay   | post      |
            | anil   | kirloskar |
    
    Scenario: Delete user via API

        Given User sends request to Delete multiple users
        Then User should not display
