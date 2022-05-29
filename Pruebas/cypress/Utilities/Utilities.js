class Utilities{
    
    pulsar_boton_link(type, button_id)
    {
        
        cy.get(type + ':contains("' + button_id + '")').click({force: true});
    }
    ingresar_texto(element, texto)
    {
         var element2= `[id=${element}]`;
         cy.get(element2).type(texto);
        //cy.get(element).type(texto,{force: true});
    }
    
}
export default Utilities

