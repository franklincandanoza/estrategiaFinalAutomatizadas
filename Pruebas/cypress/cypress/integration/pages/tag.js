export class Tag {
   
    constructor(){
        //this.screenshot=screenshot;
    }

    navigate_to_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags');
        cy.wait(2500)
        //this.screenshot.take()
    }

    navigate_to_internal_tags_list(){
        cy.visit(cy.config('baseUrl')+'/#/tags?type=internal');
        cy.wait(1500)
        //this.screenshot.take()
    }

    click_to_create_new_tag() {

        cy.get('span:contains("New tag")').click({force: true});
        cy.wait(2500)
        return this;

    }

    create_tag(tagName, tagSlug, tagDescription, color) {
        // Required fields
        cy.get('form').within(() => {
            
            if(tagName){
                cy.get('input[name="name"]').type(tagName,{force: true}) 
            }
            if(color)
            {
                var color2= color.replace('#','');
                cy.get('input[name="accent-color"]').first().type(color2,{force: true})   
            }
            cy.get('input[name="slug"]').type(tagSlug,{force: true})            
            if(tagDescription)
                cy.get('textarea[name="description"]').type(tagDescription,{force: true})
  
        });
        //this.screenshot.take()
        cy.wait(500);
        // Save
        cy.get('span:contains("Save")').click({force: true});
        cy.wait(1500);
        return this;
    }

     create_tag_retry_name(tagName2) {
        // Required fields
            if(tagName2){
                cy.get('input[id="tag-name"]').type(tagName2)
            }
        // Retry
        cy.get('span:contains("Retry")').click({force: true});
        return this;
    }

    validate_if_exist_internal_tag(tagName){
        this.navigate_to_internal_tags_list()
        cy.wait(2000)
        //this.screenshot.take()
        cy.get('h3:contains("'+tagName+'")').click({force: true});
    }

    validate_if_exist_tag(tagName){
        this.navigate_to_tags_list()
        cy.wait(2000)
        cy.get('h3:contains("'+tagName+'")').click({force: true});
        //this.screenshot.take()
    }
    
    getMessageError(error, selector)
    {   
        var errorExists=0; var element2='';
        cy.get(selector).then(($elements)=>{
            for(var i=0;i < $elements.length; i++)
            {
                element2 = $elements[i].innerText;
                console.log(`Texto del selector ${element2} ---error ${error}`);
                //await this.driver.writeSignal(page);
                if(element2.toString().trim() === error.toString().trim())
                {
                    console.log("Encontrado");
                    errorExists=1;
                    expect(element2).to.equal(error)
                    return true;
                }
            }
            if(!errorExists)
                    expect(element2).to.equal(false);
        }) ;
    }

    validateMessageWhenTagNameFieldValueIsMissing(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    You must specify a name for the tag.\n\n    \n\n    \n\n    \n')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon gh-btn-red ember-view"]').invoke('text').should('eq','    \n    \n    \n     Retry\n')
        //this.screenshot.take()
        
    }
    validateMessageWhenTagColorIsWrong(){
        cy.get('p[class="response"]').invoke('text').should('eq', '\n    \n\n    The colour should be in valid hex format\n\n    \n\n    \n')
       
    }

}