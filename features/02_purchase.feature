@freeVoucher
Feature: Free Voucher
  
  Scenario: Open the app successfully
    Given user already registered
    When the app should open successfully
    When the user click mulai
    And user allow SkorKu to send notif
    And user enters credentials
    And user chose SkorKu Pro
    And user applies promo code
    And user does subscription
    Then user success purchase package