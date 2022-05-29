

import {Screenshot} from '../../../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../pages/login"
const login = new Login()

import {Member} from "./member"
const member = new Member(screenshot)
import {DataForMember} from "./funciones_aleatorias_members"
const dataForMember = new DataForMember()


let data = dataForMember.build_member_data(1)

describe('Create members', () => {

    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))
    })
    
    Cypress._.range(0, 1).forEach(index =>
    {

        it(`Test to create member succesfully when the form has all mandatory fields ${index+1} with random data`, () => {
            
            let item = data[index]
            screenshot.case('Test to create member succesfully with mandatory fields')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            member.create_member(item.name, item.email, item.note)

            cy.wait(2000)
        
            // Redirect to members list to validate its creation
            member.navigate_to_members_list()
            
            member.open_last_created_member()

            cy.wait(1000)
            
            member.validate_created_member(item.name, item.email, item.note)


        })

        it(`Test to create member failed when the form does not have all mandatory fields (mail) ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member failed when the form does not have all mandatory fields (mail)')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            member.create_member(item.name, '',item.note)
    
            // Assertions   
            member.validateMessageWhenEmailFieldValueIsMissing()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
        })

        it(`Test to create member failed when the members name exceeds the maximum character limit ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member failed when the member`s name exceeds the maximum character limit')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let name = "pepitoperez"
            
            member.create_member(name.repeat(20), item.email, item.note)
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenNameFieldExceedsMaximumCharacterLimit()
            
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
    
        })

        it(`Test to create member succesfully when the members name lenght has the maximum character allowed ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member succesfully when the members name lenght has the maximum character allowed')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            var name = "pepitoLulo"
            member.create_member(name.repeat(19)+"1", item.email, item.note)

            cy.wait(2000)
        
            // Redirect to members list to validate its creation
            member.navigate_to_members_list()
            
            member.open_last_created_member()

            cy.wait(2000)
            
            member.validate_created_member(name.repeat(19)+"1", item.email, item.note)
    
        })

        it(`Test to create member failed when the email already exists ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member failed when the email already exists')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            member.create_member(item.name, item.email, item.note)
            cy.wait(2000)
    
            // Redirect to members list
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
    
            // Required fields
            member.create_member(item.name, item.email, item.note)
            cy.wait(2000)
    
            
            // Assertions
            //member.validateMessageWhenMailMemberAlreadyExist()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })

        it(`Test to create member failed when the member email exceeds the maximum caracters ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member failed when the member email exceeds the maximum caracters')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            let mail = "data@hotmail"+("pepepepepe".repeat(19))+".com"
            
            member.create_member(item.name, mail,item.note)
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenEmailFieldExceedsMaximumCharacterLimit()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })

        it(`Test to create member failed when the member email exceeds the maximum caracters by far ${index+1}`, () => {

            let item = data[index]
            screenshot.case('Test to create member failed when the member email exceeds the maximum caracters by far')
            member.navigate_to_members_list()
            
            member.click_to_create_new_member()
            
            member.create_member(item.name, item.email, item.note)
            cy.wait(2000)
    
            // Assertions
            member.validateMessageWhenEmailFieldExceedsMaximumCharacterLimit()
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')
    
            
        
        })
    
    
    })
})

    