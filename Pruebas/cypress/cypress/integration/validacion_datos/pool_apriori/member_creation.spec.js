
import {Screenshot} from '../../../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "../../pages/login"
const login = new Login()

import {Member} from "../../pages/member"
const member = new Member(screenshot)

import * as data from './wrong_members.json';

describe('Create members', () => {
    
    //let data = []
    before(()=>{ 
        console.log(data)
    })
 
       Cypress._.range(0, 26).forEach(index =>
        {
        
         it.only(`Test to create member failed when the form does not have all mandatory fields ${index+1}`, () => {
            let item = data[index]
            login.login(Cypress.env('user'), Cypress.env('password'))
             
            screenshot.case('Test to create member failed when the form does not have all mandatory fields (mail)')
            member.navigate_to_members_list()
        
            member.click_to_create_new_member()
                 
            member.create_member(item.name, item.email,  item.note,item.suscribe )

            // Assertions
            member.validateMessageWhenEmailFieldValueIsMissing()
        
            cy.url().should('eq', cy.config('baseUrl')+'/#/members/new')

    })
    
    
})
  })