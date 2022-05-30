class LoginPage{
     navigate() {
        cy.visit('"http://localhost:2368/ghost')
    }

    enterEmail(username)
    {
        cy.get('#ember8').clear()
        cy.get('#ember8').type(username);
        return this
    }
    enterPassword(pswd) {
    cy.get('#ember10').clear();
    cy.get('#ember10').type(pswd)
    return this
    }
    send(){
            cy.get('#ember12').click;
    }


}
export default LoginPage
