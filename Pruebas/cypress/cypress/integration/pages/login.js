export class Login {
    navigate(){
        cy.visit(cy.config('baseUrl')+'/#/signin');
    }

    login(username, password) {
        this.navigate()
        cy.wait(2000)
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(username);
            cy.get('input[name="password"]').type(password);
            
            cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click();
            
        })
        //cy.url().should('eq', cy.config('baseUrl')+'/#/dashboard');
        cy.wait(2000)
        return this;
    }
}