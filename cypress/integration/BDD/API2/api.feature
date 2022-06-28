Feature: API hitting

    Scenario: hitting GET api
        Given user sends request for GET user
        Then user should display

    Scenario Outline: creating users
        Given user sends request to create user with <name> and <job>
        Then  user should display <name> and <job>
        Examples:
            | name   | job       |
            | shashi | desiner   |
            | pratik | pusrchase |
            | sunil  | tester    |


    Scenario Outline: update the user
        Given user sends the request to update <name> and <job>
        Then user should display updated <name> and <job>
        Examples:
            | name    | job       |
            | shashi1 | desiner   |
            | pratik1 | pusrchase |
            | sunil1  | tester    |

    Scenario: Delete the user
        Given user sends the request to Delete the user
        Then user should not display