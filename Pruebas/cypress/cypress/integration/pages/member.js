export class Member {

    constructor(screenshot){
        this.screenshot=screenshot;
    }
   
    navigate_to_members_list(){
        cy.get('span.gh-nav-member-count').click()
        this.screenshot.take()
    }

    click_to_create_new_member() {
        
        cy.get('a.ember-view.gh-btn.gh-btn-primary').click();
        this.screenshot.take()
        return this;

    }

    create_member(memberName, memberEmail, memberNote, suscribe) {

        // Required fields
        cy.get('form').within(() => {
            
            if(memberName)
                cy.get('input[name="name"]').type(memberName,{force: true})
            if(memberEmail)
                cy.get('input[name="email"]').type(''+memberEmail,{force: true})
            if(memberNote)
                cy.get('textarea[name="note"]').type(memberNote,{force: true})
            if(suscribe)
                cy.get('label[for="subscribed-checkbox"]').click()
            
        })
        this.screenshot.take()

        // Save
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        
        return this;
    }

    open_last_created_member(){
        this.navigate_to_members_list()
        this.screenshot.take()
        cy.get('tbody').find('tr').eq(0).find('a').eq(0).click()
    }

    validate_created_member(memberName, memberEmail, memberNote){
        this.open_last_created_member()
        cy.get('input[id="member-name"]').invoke('val').should('eq', ''+memberName);
        cy.get('input[id="member-email"]').invoke('val').should('eq', ''+memberEmail);
        cy.get('textarea[id="member-note"]').invoke('val').should('eq', ''+memberNote);
        this.screenshot.take()
    }

    validateMessageWhenEmailFieldValueIsMissing(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    \n\n    Please enter an email.\n\n    \n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        this.screenshot.take()
        
    }

    validateMessageWhenNameFieldExceedsMaximumCharacterLimit(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    Name cannot be longer than 191 characters.\n\n    \n\n    \n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        this.screenshot.take()
    }

    validateMessageWhenMailMemberAlreadyExist(){
        //cy.get('div[class="gh-alert-content"]').invoke('text').should('eq', '\n    Validation error, cannot save member. Member already exists. Attempting to add member with existing email address\n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        this.screenshot.take()
    }

    clickDeleteMember(){
        // Delete member
        cy.get('button.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.closed.ember-view').click()
        this.screenshot.take()
        cy.get('span[class="red"]').click()

    }

    validate_modal_message_to_delete(memberEmail){
        cy.get('header[class="modal-header"]').invoke('text').should('eq','\n    Delete member account\n\n    Delete member account\n')
        cy.get('p[class="mb6"]').invoke('text').should('eq','\n        Permanently delete '+memberEmail+' from Ghost.\n    \n        Permanently delete '+memberEmail+' from Ghost.\n    ')
        this.screenshot.take()
    }

    clickToConfirmMemberDeleteOperation(){
        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete member').click()
    }

    clickToCancelMemberDeleteOperation(){
        cy.get('button.gh-btn').contains('Cancel').click()
    }

    validateMemberDoesNotExist(memberEmail){
        this.navigate_to_members_list()
        cy.get('input[placeholder="Search members..."]').type(memberEmail)
        cy.get('div[class="gh-members-empty"]').should('exist');
        this.screenshot.take()
    }


}