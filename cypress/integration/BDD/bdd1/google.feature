Feature: Google Main Page

    I want to open a search engine

    @focus
    Scenario: Opening a search engine page
        Given I open Google page
        Then I see "Google" in the title
        Then I see "google" in the url

#  Feature: Google Main Page

#     I want to open a search engine

#     @focus
#     Scenario: Opening a search engine page
#         Given I open Google page
#         Then I see "Google" in the title
#         Then I see "google" in the url