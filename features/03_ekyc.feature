@ekyc
Feature: ekyc
  
  Scenario: Open the app successfully
    # Given user already registered
    When the app should open successfully
    When the user click mulai
    And user allow SkorKu to send notif
    And user enters credentials
    And user uploads eKTP
    And user does liveness detection
    Then user successfully complete ekyc