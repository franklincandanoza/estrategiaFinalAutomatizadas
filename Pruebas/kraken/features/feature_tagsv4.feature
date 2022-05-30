Feature: Crear Etiqueta,Listar_etiqueta Ghost Version 4.44

@user1 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de etquetas, crear una etiqueta y consultar el listados de etiqeutas para validar su creacion
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_16>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on Tags list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost Tags section "<GHOST-VERSION-2-URL4>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_16>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I click on New Tag with selector "a[href='#/tags/new/']"
    And I take screenshot of step "3" and scenario "<ESCENARIO_16>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I enter Tag Name "$name_1" into selector "input[name='name']"
    And I enter Tag Color "FFFFFF" into selector "input[name='accent-color']"
    And I enter Tag Slug "$name_2" into selector "input[name='slug']"
    And I enter Tag Description "$string_1" into selector "textarea[name='description']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_16>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push Save button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Tags section "<GHOST-VERSION-2-URL4>"
    And I wait for 1 seconds
    And I expect to stay in Ghost Tags section "<GHOST-VERSION-2-URL4>"
    And I looking for tag "$$name_2" on tags list
    And I take screenshot of step "5" and scenario "<ESCENARIO_16>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 2 seconds


@user2 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de etquetas, Intentar crear una etiqueta con valores vacios y verificar que se muestra el mensaje de err
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_17>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I take screenshot of step "2" and scenario "<ESCENARIO_17>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on Tags list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost Tags section "<GHOST-VERSION-2-URL4>"
    And I wait for 1 seconds
    And I click on New Tag with selector "a[href='#/tags/new/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_17>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I do not enter Tag Name
    And I enter Tag Color "CCCCCC" into selector "input[name='accent-color']"
    And I enter Tag Slug "$name_2" into selector "input[name='slug']"
    And I enter Tag Description "$string_1" into selector "textarea[name='description']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_17>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push Save button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I looking for error "You must specify a name for the tag." on selector "p[class='response']"
    And I take screenshot of step "5" and scenario "<ESCENARIO_17>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds

@user3 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de etiquetas, Intentar crear una etiqueta con valor de color aleatorio y verificar que se muestra el mensaje de error cuando no es un valor hexadecimal valido
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_21>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on Tags list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost Tags section "<GHOST-VERSION-2-URL4>"
     And I take screenshot of step "2" and scenario "<ESCENARIO_21>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I click on New Tag with selector "a[href='#/tags/new/']"
    And I wait for 1 seconds
     And I take screenshot of step "3" and scenario "<ESCENARIO_21>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I enter Tag Name "$name_1" into selector "input[name='name']"
    And I enter Tag Color "$name_2" into selector "input[name='accent-color']"
    And I enter Tag Slug "$name_3" into selector "input[name='slug']"
    And I enter Tag Description "$string_1" into selector "textarea[name='description']"
     And I take screenshot of step "4" and scenario "<ESCENARIO_21>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push Save button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I expect for error "The colour should be in valid hex format" on selector "p[class='response']"
     And I take screenshot of step "5" and scenario "<ESCENARIO_21>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds

@user4 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de tags, crear un tag interno y consultar en el listado de tags internos que fue creado exitosamente
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_22>" and feature "Tags" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 2 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_22>" and feature "Tags" and version "<GHOST-VERSION-1>"
    And I click on tag list with selector "a[href='#/tags/']"
    And I expect to enter to Ghost tags section "<GHOST-VERSION-2-URL4>"
    And I take screenshot of step "3" and scenario "<ESCENARIO_22>" and feature "Tags" and version "<GHOST-VERSION-1>"
    And I wait for 1 seconds
    And I click on New Member with selector "a[href='#/tags/new/']"
    And I wait for 1 seconds
    And I enter internal tag Name "$name_1" into selector "input[name='name']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_22>" and feature "Tags" and version "<GHOST-VERSION-1>"
    And I push Save tag button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost internal Tags section "<GHOST-VERSION-2-URL4>"
    And I take screenshot of step "6" and scenario "<ESCENARIO_22>" and feature "Tags" and version "<GHOST-VERSION-1>"
    And I wait for 1 seconds
    And I looking for created internal tag "$$name_1" on tags list