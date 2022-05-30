import LoginPage from "./LoginPage/LoginPage";
import Utilities from "./Utilities/Utilities";

describe('Escenario 2: Intentar Crear una etiquetaque ya existe', function() {
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
    
    it('vamos a la lista de Tags', function() {
        //vamos a la lista de Tags
        cy.wait(1500);
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.url().should('be.equal', 'http://localhost:2368/ghost/#/tags');
        cy.wait(1500);
    });
    
    it('Invocar el formulario para crear una nueva tag', function() {
         //vamos a invcar el formulario para crear una nueva tag
         const utilities = new Utilities();
        utilities.pulsar_boton_link('span', 'New tag');
        cy.wait(1000);
        cy.url().should('be.equal', 'http://localhost:2368/ghost/#/tags/new');
    });
    
    it('Ingresar Datos y guardar nuevo tag', function() {
            const utilities = new Utilities();
            utilities.ingresar_texto('tag-name', "Etiqueta de prueba");
            utilities.ingresar_texto('ember93', "000000");
            utilities.ingresar_texto('tag-slug', "Slug de prueba");
            utilities.ingresar_texto('tag-description', "Esta es una etiqueta de prueba de cypress");
            utilities.pulsar_boton_link('span', 'Save');
            cy.wait(1500);
    });
    
    it('Verificar que no deje crear la etiqueta', function() {
         cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Failed to Save')
        })  
            //cy.wait(1500);
    });
    
 });
