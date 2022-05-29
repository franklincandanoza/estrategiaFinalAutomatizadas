
import {Screenshot} from '../../../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../pages/login"
const login = new Login()

import {Tag} from "../../pages/tag"
const tag = new Tag(screenshot)

import {DataForTags} from "./funciones_aleatorias_tags"
const dataForTags = new DataForTags()

let data = dataForTags.build_tag_data(3)

describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))

        cy.wait(2000)
    })

    Cypress._.range(0, 3).forEach(index =>
    {

        it(`Test to create tag succesfully with mandatory fields ${index+1}`, () => {
            
            let item = data[index]
            screenshot.case('Test to create tag succesfully with mandatory fields')
            tag.navigate_to_tags_list()

            cy.wait(2000)

            tag.click_to_create_new_tag()

            cy.wait(2000)

            tag.create_tag(item.name, item.slug, item.description, null)

            cy.wait(1500);

            tag.navigate_to_tags_list()

            cy.wait(1000)

            tag.validate_if_exist_tag(item.name)
        
        })

        it(`Test to create internal tag succesfully with mandatory fields ${index+1}`, () => {
            
            let item = data[index]
            screenshot.case('Test to create internal tag succesfully with mandatory fields')
            tag.navigate_to_tags_list()

            cy.wait(2000)

            tag.click_to_create_new_tag()

            cy.wait(2000)

            tag.create_tag('#'+item.name, item.slug, item.description, null)

            cy.wait(1500);

            tag.validate_if_exist_internal_tag('#'+item.name)
        
        })

        it(`Test to create tag failed when the form does not have all mandatory fields (tag name) ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create tag failed when the form does not have all mandatory fields (tag name)')
            tag.navigate_to_tags_list()

            cy.wait(2000)

            tag.click_to_create_new_tag()

            cy.wait(2000)

            tag.create_tag('', item.slug, item.description, null)

            // Assertions
            tag.validateMessageWhenTagNameFieldValueIsMissing()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

            
        })

        
        it(`Test to create tag failed when the color field isn t a hexadecimal value ${index+1}`, () => {
            
            let item = data[index]
            screenshot.case('Test to create tag failed when the color field isn t a hexadecimal value')
            // Redirect to create member form
            tag.navigate_to_tags_list()

            cy.wait(2000)

            tag.click_to_create_new_tag()

            cy.wait(2000)

            tag.create_tag(item.name, item.slug, item.description, 'trtrsw')

            // Assertions
            tag.validateMessageWhenTagColorIsWrong()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/tags/new')

        })

    })

})