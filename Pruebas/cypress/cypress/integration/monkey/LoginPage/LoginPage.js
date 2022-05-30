class LoginPage{
     navigate() {
        cy.visit('http://localhost:2368/ghost');
        cy.wait(2000);
    }

    

    enterEmail(username)
    {
        /* cy.window().then((win)=>{
                 let $elements = win.document.getElementsByTagName("input");
                 if($elements.length > 0)
                 {
                     console.log("Hay elementos");
                     for(var i=0;i<$elements.length;i++)
                     {
                         console.log(`Elemento ${$elements.item(i).id}`);
                         if($elements.item(i).id ==="ember8")
                         console.log("Esta el email");
                     }
                 }
             });*/
        //cy.get('input').type('email')
        cy.get('[id=ember8]').clear();
        cy.get('[id=ember8]').type(username);
        
        return this;
     
    } 
    
    enterPassword(pswd) {
    cy.get('#ember10').clear();
    cy.get('#ember10').type(pswd)
    return this
    }
    send(){
            cy.get('#ember12').click({force:true});
    }


}
export default LoginPage
