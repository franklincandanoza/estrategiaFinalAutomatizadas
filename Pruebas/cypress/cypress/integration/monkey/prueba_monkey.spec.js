 
 describe('Ghost 4.4 under monkeys with random events', function() {

     beforeEach('Navigate and login into Ghost', ()=>{

        /*cy.visit("http://localhost:3003/ghost/#/setup");
        cy.wait(2000)
        cy.get("input[name='blog-title']").type("Pruebas Automatizadas MISO");
        cy.get("input[name='name']").type(Cypress.env('username'));
        cy.get("input[name='email']").type(Cypress.env('user'));
        cy.get("input[name='password']").type(Cypress.env('password'));
        cy.get("button[type='submit']").click({force:true});
        cy.wait(2000)
        cy.visit("http://localhost:3003/ghost/#/signout");*/
        //cy.wait(2000);
        cy.visit('http://localhost:3003/ghost/#/signin');
        cy.wait(2000);
        //cy.get('[id=ember8]').clear();
        cy.get('input[name="identification"]').type(Cypress.env('user'));
        //cy.get('input[name="password"]').clear();
        cy.get('input[name="password"]').type(Cypress.env('password'));
         cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view').click({force:true});
        cy.wait(2000);
    })



    it('Ingresar a tags y generar eventos aleatorios', function() {

        cy.visit('http://localhost:3003/ghost/#/tags');
        cy.wait(2000);
        cy.get('span:contains("New tag")').click({force:true});
        randomEvent(200);
    })
 })


 //funcion que selecciona eventos al azar y los ejecuta en la app web
 function randomEvent(intentos)
 {

    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //funcion que selecciona el elemento al azar
    function getRandomElement()
    {
        var elements = ['a', 'input', 'select', 'button'];
        //var elements = ['button'];
        return elements[Math.floor(Math.random() * elements.length)];
    }
    //da click
    var element='';
        //for (var i=0;i<10;i++)
        //{
    var monkeysLeft = intentos;
    if(monkeysLeft > 0)
    {
            element = getRandomElement();

            const inputs = ['email', 'date', 'tel', 'url', 'number', 'text', 'password'];
            console.log("Elemento " + element);
            /*cy.get(element).then($elements => {
                var randomElement = $elements.get(getRandomInt(0, $elements.length));
                if(!Cypress.dom.isHidden(randomElement))
                {
                    if(element==='a' ||  element==='button')
                    { cy.wrap(randomElement).click({force: true})}
                    if(element==='input')element
                    {cy.wrap(randomElement).type('Campo de texto',{force: true})}
                    if(element==='select')
                    {cy.wrap(randomElement).select(0, {force: true})}
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });*/
             cy.window().then((win)=>{
                 let $elements = win.document.getElementsByTagName(element);
                 if($elements.length > 0)
                 {
                    var randomElement = $elements.item(getRandomInt(0, $elements.length));
                    if(!Cypress.dom.isHidden(randomElement))
                    {
                        //campo input que treciba texto
                        console.log("EL atributo seleccionado es " +  randomElement.getAttribute("type"));
                        console.log(`SU id es   ${randomElement.id}`);
                        console.log(`SU class es   ${randomElement.class}`);
                        if(element==='input' && inputs.includes(randomElement.getAttribute("type")))
                        {
                            cy.wrap(randomElement).type('abcd',{force: true});
                            console.log(`Campo ${randomElement.id} fue llenado con texto` );
                        }
                        else if(element==='button' || element==='a')
                        {cy.wrap(randomElement).click();
                            console.log(`Boton/Link ${randomElement.name} fue presionado` );
                        }
                        else if(element==='select')
                        {cy.wrap(randomElement).select(0, {force: true})
                           console.log(`Combo ${randomElement.id} fue seleccionado` );
                        }
                        else{
                             console.log("Es otro tipo de elemento");
                        }
                        monkeysLeft = monkeysLeft - 1;

                    }
                    monkeysLeft = monkeysLeft - 1;        
                 }
                 else{
                        console.log("No se encontraron elementos " + element);
                 }
                cy.wait(1000);
                randomEvent(monkeysLeft);
             });

        //}
    }
 }
