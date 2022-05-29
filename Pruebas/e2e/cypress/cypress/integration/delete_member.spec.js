import {Screenshot} from '../../Utilities/screenshots'
const screenshot = new Screenshot()

import {Login} from "./pages/login"
const login = new Login()

import {Member} from "./pages/member"
const member = new Member(screenshot)

describe('Delete members', () => {
    
    beforeEach(()=>{
        login.login(Cypress.env('user'), Cypress.env('password'))
    })

    it('Test to delete member succesfully', () => {

        screenshot.case('Test to delete member succesfully')
        member.navigate_to_members_list()
    
        member.click_to_create_new_member()
        


        var memberName = Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        

        member.create_member(memberName, memberEmail, memberNote)

        
        cy.wait(200)
       
        member.navigate_to_members_list()
        

        member.open_last_created_member()
        

        member.validate_created_member(memberName, memberEmail, memberNote)

        // Delete member
        member.clickDeleteMember()
        
        
        // Validate modal message
        member.validate_modal_message_to_delete(memberEmail)
        

        // Delete
        member.clickToConfirmMemberDeleteOperation()


        //Assertions
        cy.url().should('eq', cy.config('baseUrl')+'/#/members')
        
        member.validateMemberDoesNotExist(memberEmail)
        

        
    })

    it('Test to delete member but the operation is cancelled', () => {

        screenshot.case('Test to delete member but the operation is cancelled')
        member.navigate_to_members_list()
        

        member.click_to_create_new_member()


        var memberName = Math.random()
        var memberEmail =  memberName + '@gmail.com'
        var memberNote = 'Esta es la nota del nuevo miembro: '+memberName
        

        member.create_member(memberName, memberEmail, memberNote)

        
        cy.wait(200)
       
        member.navigate_to_members_list()
        

        member.open_last_created_member()

        member.validate_created_member(memberName, memberEmail, memberNote)
        

        // Delete member
        member.clickDeleteMember()

        // Validate modal message
        member.validate_modal_message_to_delete(memberEmail)
        
        
        member.clickToCancelMemberDeleteOperation()

        //Assertions
        member.validate_created_member(memberName, memberEmail, memberNote)
        

        
    })
  })