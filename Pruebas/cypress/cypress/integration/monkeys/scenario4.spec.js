import LoginPage from "./LoginPage/LoginPage";
import Utilities from "./Utilities/Utilities";

describe('Escenario 4: Cambiar el diseño, ingresar valores vacios y validar que genere error', function() {
    //it('Autenticando credenciales', function() {
    before(() => {
        const access = new LoginPage();
        const utilities = new Utilities();
        access.navigate();
        //cy.wait(1000);
        
        //probar();
        access.enterEmail('c.agudeloh@uniandes.edu.co');
        access.enterPassword('Ghos2022..');
        access.send();
        //verificamos que el acceso es correcto
        cy.url().should('be.equal', 'http://localhost:2368/ghost/#/site');
        //ingresar datos en formulario
        //ingresar_texto('tag-name', "Etiqueta de prueba");
    });
    
    it('vamos a la lista de diseño', function() {
        //vamos a la lista de Tags
        
        cy.visit('http://localhost:2368/ghost/#/settings/design');
        cy.wait(1500);
        cy.url().should('be.equal', 'http://localhost:2368/ghost/#/settings/design');
        cy.wait(1500);
    });
    
    it('Ingresar Datos y guardar', function() {
            const utilities = new Utilities();
            utilities.ingresar_texto('ember786', "Home");
            utilities.ingresar_texto('ember788', "http://localhost:2368/");
            utilities.ingresar_texto('ember793', "Tag");
            utilities.ingresar_texto('ember795', "");
            utilities.pulsar_boton_link('span', 'Save');
            //cy.wait(1500);
    });
    
    it('Verificar que genere el error', function() {
         cy.get('p').then(($header)=>{
            expect($header[0].innerText).to.equal('You must specify a URL or relative path')
        })  
            //cy.wait(1500);
    });
    
 });