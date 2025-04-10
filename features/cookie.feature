Feature: Cookie Test

  Scenario: Check if cookie exists
    Given I navigate to the base URL
    When I set a cookie with name "testKey" and value "testValue"
    Then I check if the cookie with name "testKey" and value "testValue" exists

  Scenario: Delete cookie and verify it's removed
    Given I navigate to the base URL
    And I set a cookie with name "testKey" and value "testValue"
    When I delete the cookie with name "testKey"
    Then the cookie with name "testKey" should not exist