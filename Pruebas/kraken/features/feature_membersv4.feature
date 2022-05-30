Feature: Crear miembro , Listar miembros, eliminar miembros  Ghost Version 4.44

@user1 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro y consultar el listado de miembros para validar su creacion
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 5 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on member list with selector "a[href='#/members/']"
    And I take screenshot of step "2" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 1 seconds
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I enter member Name "$name_2" into selector "input[name='name']"
    And I enter member email "$$name_2" from provider "@hotmail.com" into selector "input[name='email']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 2 seconds
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I filter by member on member list section using email "$$name_2" and provider "@hotmail.com" into selector "input[class='gh-input gh-members-list-searchfield ']"
    And I take screenshot of step "5" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I looking for last created member on members list
    And I wait for 1 seconds
    And I take screenshot of step "6" and scenario "<ESCENARIO_1>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I expect the member name "$$name_2" is loaded into selector "input[name='name']"


@user2 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro sin el correo y validar el mensaje de error
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_2>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 5 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_2>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on member list with selector "a[href='#/members/']"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I take screenshot of step "3" and scenario "<ESCENARIO_2>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "$name_1" into selector "input[name='name']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_2>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I looking for error "Please enter an email." on selector "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p"
    And I take screenshot of step "5" and scenario "<ESCENARIO_2>" and feature "Miembros" and version "<GHOST-VERSION-2>"

@user3 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro con un correo inválido y validar mensaje de correo inválido
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_3>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 5 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_3>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on member list with selector "a[href='#/members/']"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I take screenshot of step "3" and scenario "<ESCENARIO_3>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I wait for 1 seconds
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "$name_4" into selector "input[name='name']"
    And I enter member email "$name_3" from provider "hotmail" into selector "input[name='email']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_3>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 3 seconds
    Then I looking for error "Invalid Email." on selector "/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/p"
    And I take screenshot of step "5" and scenario "<ESCENARIO_3>" and feature "Miembros" and version "<GHOST-VERSION-2>"

@user4 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro, volver al listado y crear un miembro con el mismo email para validar que no se permite su creaciòn
    Given I go to "<GHOST-VERSION-2-URL1>"
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 5 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I click on member list with selector "a[href='#/members/']"
    And I take screenshot of step "2" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 1 seconds
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "$name_4" into selector "input[name='name']"
    And I enter member email "$$name_4" from provider "@hotmail.com" into selector "input[name='email']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "3" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I take screenshot of step "4" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I wait for 2 seconds
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "$$name_1" into selector "input[name='name']"
    And I enter member email "$$name_4" from provider "@hotmail.com" into selector "input[name='email']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "5" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 2 seconds
    And I take screenshot of step "6" and scenario "<ESCENARIO_4>" and feature "Miembros" and version "<GHOST-VERSION-2>"

@user5 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro, volver al listado y eliminar el miembro exitosamente previamente creado
    Given I go to "<GHOST-VERSION-2-URL1>"  
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 5 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on member list with selector "a[href='#/members/']"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "$name_5" into selector "input[name='name']"
    And I enter member email "$$name_5" from provider "@hotmail.com" into selector "input[name='email']"
    And I enter member note "frankcandanoza@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 3 seconds
    And I take screenshot of step "5" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I filter by member on member list section using email "$$name_5" and provider "@hotmail.com" into selector "input[class='gh-input gh-members-list-searchfield ']"
    And I wait for 1 seconds
    And I take screenshot of step "6" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I looking for last created member on members list
    And I wait for 1 seconds
    And I push setting member button with selector "button[class='gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view']"
    And I wait for 1 seconds
    And I take screenshot of step "7" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push delete member button with selector "span[class='red']"
    And I confirm delete member operation on button with selector "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']"
    And I take screenshot of step "8" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 2 seconds
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I take screenshot of step "9" and scenario "<ESCENARIO_5>" and feature "Miembros" and version "<GHOST-VERSION-2>"

@user6 @web
Scenario: Deseo ingresar a la aplicación, ver la lista de miembros, crear un miembro, volver al listado e intentar eliminar el miembro pero cancelar la operaciòn de borrado, luego si eliminarlo correctamente.
    Given I go to "<GHOST-VERSION-2-URL1>"  
    And I wait for 2 seconds
    When I enter email "<USERNAME>" into selector "input[name='identification']"
    And I enter password "<PASSWORD>" into selector "input[name='password']"
    And I take screenshot of step "1" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push login button with selector "button[type='submit']"
    And I wait for 4 seconds
    And I expect to enter to Ghost home page "<GHOST-VERSION-2-URL2>"
    And I take screenshot of step "2" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on member list with selector "a[href='#/members/']"
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 1 seconds
    And I take screenshot of step "3" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I click on New Member with selector "a[href='#/members/new/']"
    And I wait for 1 seconds
    And I enter member Name "other" into selector "input[name='name']"
    And I enter member email "other" from provider "@hotmail.com" into selector "input[name='email']"
    And I enter member note "other@hotmail.com" into selector "textarea[name='note']"
    And I take screenshot of step "4" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push Save member button with selector "button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']"
    And I wait for 1 seconds
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 1 seconds
    And I take screenshot of step "5" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I filter by member on member list section using email "other" and provider "@hotmail.com" into selector "input[class='gh-input gh-members-list-searchfield ']" 
    And I wait for 1 seconds
    And I take screenshot of step "6" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I looking for last created member on members list
    And I wait for 1 seconds
    And I push setting member button with selector "button[class='gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view']"
    And I wait for 1 seconds
    And I take screenshot of step "7" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push delete member button with selector "span[class='red']"
    And I wait for 1 seconds
    And I cancel delete member operation on button with selector "button[class='gh-btn']"
    And I take screenshot of step "8" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I expect the member name "other" is loaded into selector "input[name='name']"
    And I take screenshot of step "9" and scenario "<ESCENARIO_6>" and feature "Miembros" and version "<GHOST-VERSION-2>"
    And I push setting member button with selector "button[class='gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view']"
    And I wait for 1 seconds
    And I push delete member button with selector "span[class='red']"
    And I wait for 1 seconds
    And I confirm delete member operation on button with selector "button[class='gh-btn gh-btn-red gh-btn-icon ember-view']"
    Then I go to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I wait for 2 seconds
    And I expect to enter to Ghost Members section "<GHOST-VERSION-2-URL3>"
    And I filter by member on member list section using email "other" and provider "@hotmail.com" into selector "input[class='gh-input gh-members-list-searchfield ']" 
    And I wait for 1 seconds