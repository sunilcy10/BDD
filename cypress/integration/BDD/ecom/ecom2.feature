Feature: Ecom suite

    Scenario: login with valid credential
        Given visit the site
        When fill the username and password
            | username         | password    |
            | shuham@gmail.com | Shubham@123 |
        And click on login Button
        Then Validate the dashboard


    Scenario Outline: login with multiple users
        Given visit the site
        When fill the <users> and <passwords>
         And click on login Button
        Then Validate the dashboard
        Examples:
           
            | users                                      | passwords   |
            | shuham@gmail.com                           | Shubham@123 |
            | sunilcy10@gmail.com                        | Su^il10     |
            | shashank.rewadkar@hitechroboticsystemz.com | .rewadkar@  |
       