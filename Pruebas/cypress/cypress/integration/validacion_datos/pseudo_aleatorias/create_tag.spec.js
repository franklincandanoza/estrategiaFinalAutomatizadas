
//import {Screenshot} from '../Utilities/screenshots'
//const screenshot = new Screenshot()

import {Login} from "../../pages/login"
const login = new Login()

import {Tag} from "../../pages/tag"
const tag = new Tag()

import { faker } from '../../../../../../../node_modules/@faker-js/faker';


describe('Create tag', () => {
    
    beforeEach('Navigate and login into Ghost', ()=>{

        login.login(Cypress.env('user'), Cypress.env('password'))

        cy.wait(2000)
    })

    it('1. Escenario de pruebas positivo: Creación de Tag con todos los campos llenos', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(1234);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    it('2. Escenario de pruebas negativo: Creación de Tag con valor de nombre vacio', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5432);
        var tagName = '';
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
    });
  
 
    it('3. Escenario de pruebas negativo: Creación de Tag con valor de color invalido', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7865);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.random.alphaNumeric(6);

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('The colour should be in valid hex format',"p[class='response']");  
        cy.wait(1000);
    });
    
    it('4. Escenario de pruebas positivo: Creación de Tag con valores vacios en color y descripcion', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6543);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = '';
        var color = '';

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    
    it('5. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 191 caracteres (long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(2341);
        var tagName = faker.random.alphaNumeric(191);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
   it('6. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 192 caracteres', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7658);
        var tagName = faker.random.alphaNumeric(192);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        tag.getMessageError('Tag names cannot be longer than 191 characters.',"p[class='response']"); 
        cy.wait(1000);

       
    }); 
   
  
  it('7. Escenario de pruebas de frontera: Creación de Tag con longitud de nombre de 190 caracteres (un valor menos antes de la long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7765);
        var tagName = faker.random.alphaNumeric(190);
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
   
  
  it('8. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 191 caracteres (long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4120);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(191);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    it('9. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 192 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(9354);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(192);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);
        var url3 = Cypress.env('url1').toString() + "/tag/" + tagSlug + "/";
        tag.getMessageError(url3,"p[class='ghost-url-preview description ember-view']"); 
    
        //cy.wait(10000);
    });
    
    
    
    it('10. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Slug de 190 caracteres (un valor menos antes de la long max de campo slug)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4104);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(190);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
    it('11. Escenario de pruebas de frontera: Creación de Tag con longitud de campo color de 5 caracteres (Uno menos que long max de campo nombre)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4120);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.random.alphaNumeric(191);
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var color2 = color.substring(0, color.length - 1);
        tag.create_tag(tagName, tagSlug, tagDescription, color2)

        cy.wait(1500);

       tag.getMessageError('The colour should be in valid hex format',"p[class='response']"); 

    });
   
   
    it('12. Escenario de pruebas de frontera: Creación de Tag con longitud de campo color de 7 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6644);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.random.numeric(7);

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName)
    
        //cy.wait(10000);
    });
    
    
     it('13. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 500 caracteres (long max de campo descripcion)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(8811);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(500);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName);
    
        //cy.wait(10000);
    });
    
    
    it('14. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 501 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(6547);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(501);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1000);

       tag.getMessageError('Description cannot be longer than 500 characters.',"p[class='response']"); 
   
    });
    
    
   
    it('15. Escenario de pruebas de frontera: Creación de Tag con longitud de campo descripcion de 499 caracteres (uno menos que long max de campo descripcion)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(7201);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.random.alphaNumeric(499);
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.validate_if_exist_tag(tagName);
    
        //cy.wait(10000);
    });
    
    
    
    it('16. Escenario de pruebas negativo/positivo: Creación de Tag con valor de nombre vacio, se verifica el error, se coloca un nombre de tag valido y se procede a intentar salvar: ESta prueba genera un issue', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4433);
        var tagName = '';
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();

        tag.create_tag(tagName, tagSlug, tagDescription, color)

        cy.wait(1500);

        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
        
        tagName = faker.lorem.word();
        tag.create_tag_retry_name(tagName);
        cy.wait(1500);
        
        tag.getMessageError('You must specify a name for the tag.',"p[class='response']");  
        cy.wait(1000);
        
    });
    
   
   it('17. Escenario positivo: Creación de Tag con Datos validos y ahora con datos de Meta', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4207);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.lorem.sentence(5);
        var metaDescription = faker.lorem.word(10);
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        //tag.validate_if_exist_tag(tagName);
        tag.getMessageError(tagName,'h3');
    
        //cy.wait(10000);
    });
     
    
   
    
    it('18. Escenario de pruebas de frontera: Creación de Tag con longitud de campo meta Title de 300 caracteres (long max de campo)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5438);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.random.alphaNumeric(300);
        var metaDescription = faker.lorem.word(10);
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        //tag.validate_if_exist_tag(tagName);
        tag.getMessageError(tagName,'h3');
    
        //cy.wait(10000);
    });
   
  
  it('19. Escenario de pruebas de frontera: Creación de Tag con longitud de campo meta Title de 301 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(3478);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.random.alphaNumeric(301);
        var metaDescription = faker.lorem.paragraph();
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1000);

        tag.getMessageError('Meta Title cannot be longer than 300 characters.',"p[class='response']");
    
        //cy.wait(10000);
    });
   
   
   it('20. Escenario de pruebas de frontera: Creación de Tag con longitud de campo meta Description de 500 caracteres (max long de campo)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(2148);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.random.alphaNumeric(20);
        var metaDescription = faker.random.alphaNumeric(500);
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        tag.getMessageError(tagName,'h3');
        //tag.getMessageError('Meta Title cannot be longer than 300 characters.',"p[class='response']");
    
        //cy.wait(10000);
    });
   
   
    it('21. Escenario de pruebas de frontera: Creación de Tag con longitud de campo meta Description de 501 caracteres (por encima de longitud máxima)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5392);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.random.alphaNumeric(20);
        var metaDescription = faker.random.alphaNumeric(501);
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.getMessageError('Meta Description cannot be longer than 500 characters.',"p[class='response']");
    
        //cy.wait(10000);
    });
    
    
    it('22. Escenario de pruebas de frontera negativo/ positivo: Creación de Tag con longitud de campo meta Description de 501 caracteres (por encima de longitud máxima), luego se elimina un caracter y se intenta salvar de Nuevo. Se genera un Issu', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5392);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.random.alphaNumeric(20);
        var metaDescription = faker.random.alphaNumeric(501);
        var metaURL = faker.internet.url();

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.getMessageError('Meta Description cannot be longer than 500 characters.',"p[class='response']");
    
        cy.wait(1000);
        var metaDescription = faker.random.alphaNumeric(501);
        tag.create_tag_meta_retry_description(metaDescription);
        cy.wait(1500);

        tag.getMessageError('Meta Description cannot be longer than 500 characters.',"p[class='response']");
        
    });
    
    
     it('23. Escenario de pruebas negativo: Creación de Tag con valor de campo Canonical URL con formato de URL invalido', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(5487);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.lorem.words(5);
        var metaDescription = faker.lorem.paragraph(3);
        var metaURL = faker.random.alphaNumeric(15);

        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL);

        cy.wait(1500);

        tag.getMessageError('The url should be a valid url',"p[class='response']");
    
        //cy.wait(10000);
    });   
   
  
  it('24. Escenario de pruebas de frontera: Creación de Tag con longitud de campo meta Canonical URL de 800 caracteres (por encima de longitud máxima), genera un Issue', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(3711);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var metaTitle = faker.lorem.words(5);
        var metaDescription = faker.lorem.paragraph(3);
        var metaURL = faker.internet.url();
        //var metaURL2 = faker.random.alphaNumeric(500);
        var metaURL2 = faker.lorem.paragraph(25);
        console.log(`Long de metaURL3 ${metaURL2.length}`);

        var metaURL3=metaURL + "/" + metaURL2;
        
        tag.create_tag_meta(tagName, tagSlug, tagDescription, color, metaTitle, metaDescription, metaURL3);

        cy.wait(1500);

        tag.getMessageError('Validation error, cannot save tag. Validation failed for canonical_url.',"div[class='gh-alert-content']");
    
        //cy.wait(10000);
    });
  
   
    it('25. Escenario positivo: Creación de Tag con Datos validos y ahora con datos de Twitter Card', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4207);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var twitterTitle = faker.lorem.sentence(5);
        var twitterDescription = faker.lorem.word(10);
        

        tag.create_tag_twitter(tagName, tagSlug, tagDescription, color, twitterTitle, twitterDescription);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        //tag.validate_if_exist_tag(tagName);
        tag.getMessageError(tagName,'h3');
    
        //cy.wait(10000);
    });
    
   
    
  it('26. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Twitter Description de 500 caracteres (max long de campo)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(9956);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var twitterTitle = faker.lorem.sentence(5);
        var twitterDescription = faker.random.alphaNumeric(500);
        //var twitterDescription = faker.lorem.paragraph(24);

        tag.create_tag_twitter(tagName, tagSlug, tagDescription, color, twitterTitle, twitterDescription);

        cy.wait(1500);

        tag.validate_if_exist_tag(tagName);
        
        //tag.getMessageError('Validation error, cannot save tag. Validation failed for twitter_description.',"div[class='gh-alert-content']");
        //cy.wait(10000);
    });
    
    it('27. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Twitter Description de 501 caracteres (por encima del limite). Genera Issue', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(9956);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var twitterTitle = faker.lorem.sentence(5);
        var twitterDescription = faker.random.alphaNumeric(501);
        //var twitterDescription = faker.lorem.paragraph(24);

        tag.create_tag_twitter(tagName, tagSlug, tagDescription, color, twitterTitle, twitterDescription);

        cy.wait(1500);

        //tag.validate_if_exist_tag(tagName);
        
        tag.getMessageError('Validation error, cannot save tag. Validation failed for twitter_description.',"div[class='gh-alert-content']");
        //cy.wait(10000);
    });
    
    
    it('28. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Twitter title de 300 caracteres (max long de campo)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4388);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var twitterTitle = faker.random.alphaNumeric(300);
        var twitterDescription = faker.lorem.paragraph(3);
        //var twitterDescription = faker.lorem.paragraph(24);

        tag.create_tag_twitter(tagName, tagSlug, tagDescription, color, twitterTitle, twitterDescription);

        cy.wait(1500);

        tag.validate_if_exist_tag(tagName);
        
        //tag.getMessageError('Validation error, cannot save tag. Validation failed for twitter_description.',"div[class='gh-alert-content']");
        //cy.wait(10000);
    });
    
    
    it('29. Escenario de pruebas de frontera: Creación de Tag con longitud de campo Twitter title de 301 caracteres (por encima del limite)', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4155);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var twitterTitle = faker.random.alphaNumeric(301);
        var twitterDescription = faker.lorem.paragraph(3);
        //var twitterDescription = faker.lorem.paragraph(24);

        tag.create_tag_twitter(tagName, tagSlug, tagDescription, color, twitterTitle, twitterDescription);

        cy.wait(1500);

        //tag.validate_if_exist_tag(tagName);
        
        tag.getMessageError('Validation error, cannot save tag. Validation failed for twitter_title.',"div[class='gh-alert-content']");
        //cy.wait(10000);
    });
     
    
    it('30. Escenario positivo: Creación de Tag con Datos validos y ahora con datos de Facebook Card', () => {
        
        //screenshot.case('Test to create tag succesfully with mandatory fields')
        tag.navigate_to_tags_list()

        cy.wait(1500)

        tag.click_to_create_new_tag()

        cy.wait(1500)

        //semilla para que genere los mismos valores durante las pruebas
        faker.seed(4299);
        var tagName = faker.lorem.word();
        var tagSlug =  faker.lorem.slug();
        var tagDescription = faker.lorem.paragraph();
        var color = faker.internet.color();
        var fbTitle = faker.lorem.sentence(5);
        var fbDescription = faker.lorem.word(10);
        

        tag.create_tag_fb(tagName, tagSlug, tagDescription, color, fbTitle, fbDescription);

        cy.wait(1500);

        tag.navigate_to_tags_list()

        cy.wait(1000);

        //tag.validate_if_exist_tag(tagName);
        tag.getMessageError(tagName,'h3');
    
        //cy.wait(10000);
    });

});
