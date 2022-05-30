Feature: Crear usuario para las pruebas

@user10 @web

Scenario: Crear usuario de Ghost v3.41
    Given I go to "<GHOST-VERSION-1-SETUP1>"
    And I wait for 2 seconds
    When I click on Create your Account with selector "a[href='#/setup/two/']"
    And I wait for 2 seconds
    And I expect to enter to Create your Account screen "<GHOST-VERSION-1-SETUP2>"
    And I enter Site title "Pruebas Automatizadas MISO" into selector "input[name='blog-title']"
    And I enter Full Name "Robot de prueba" into selector "input[name='name']"
    And I enter email "<USERNAME>" into selector "input[name='email']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I wait for 1 seconds
    Then I click on Skip option with selector "button[class='gh-flow-skip']"


@user11 @web

Scenario: Crear usuario de Ghost v4.44
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    And I expect to enter to Create your Account screen "<GHOST-VERSION-2-SETUP1>"
    And I enter Site title "Pruebas Automatizadas MISO" into selector "input[name='blog-title']"
    And I enter Full Name "Robot de prueba" into selector "input[name='name']"
    And I enter email "<USERNAME>" into selector "input[name='email']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Create your Account screen "<GHOST-VERSION-2-SETUP2>"


