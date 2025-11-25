@registration
Feature: App Launch Test
  
  Scenario: Open the app successfully
    Given the app is launched
    When the app should open successfully
    When the user click mulai
    And user allow SkorKu to send notif
    When user clicks create account
    And user completes registration form
    And user agrees term and condition
    And user agrees privacy policy
    And user enters OTP
    And user creates PIN
    Then user successfully created account